import React, { useState, useEffect,useCallback } from 'react';
import "./styles.css";
import SuggestionsList from "./suggestions-list";
import debounce from "lodash/debounce";

const AutoComplete=({
     placeholder='',
        fetchSuggestions,
        dataKey='',
        customLoading='Loading Recipes.',
        onSelect = () => { },
        onChange=() => { },
        onBlur=(e) => { },
        onFocus=(e) => { },
    customStyles = {},
        staticData
})=> {

    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        onChange(event.target.value)
    }

    const getSuggestions = async (query) => {
        setError(null);
        setLoading(true);
        try {
            let result;
            if (staticData) {
                result = staticData.filter((item) => {
                    return item.toLowercase.includes(query.toLowerCase())
                })
            } else if (fetchSuggestions) {
                result = await fetchSuggestions(query);
            }
            setSuggestions(result)
        } catch (error) { } finally {
            setLoading(false);
        }
    }

    const getSuggestionsDebounced = useCallback(debounce(getSuggestions, 300),[]);

    useEffect(() => {
        if (inputValue.length > 1) {
           getSuggestionsDebounced(inputValue) 
        } else {
            setSuggestions([])
        }
    }, [inputValue])
    
    const handleSuggestionClick = (suggestion) => {
        setInputValue(dataKey?suggestion[dataKey]:suggestion);
        onSelect(suggestion);
        setSuggestions
    }


    return (
        <div className="container">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                style={customStyles}
                onBlur={onBlur}
                onFocus={onFocus}
            />
            {(suggestions.length > 0 || loading || error) && <ul className='suggestion-list'>
            {error && <div className='error'>{error}</div>}
            {loading && <div className='loading'>{customLoading}</div>}
                <SuggestionsList
                    dataKey={dataKey}
                    highlight={inputValue}
                    suggestions={suggestions}
                    onSuggestionClick={handleSuggestionClick}
                />
</ul>}

            
        </div>
    );
}

export default AutoComplete;