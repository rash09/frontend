
import './App.css';
import AutoComplete from "./components/autocomplete/AutoComplete";


function App() {

  const staticData=[]
  const fetchSuggestions = async (query) => {
    
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    if (!response.ok) {
      throw new error("Network response was not ok");
    }
    const result = await response.json();
    return result.recipes;
   
 }
  

  return (
    <div>
      <AutoComplete
        placeholder={'enter recipe'}
        fetchSuggestions={fetchSuggestions}
        dataKey={'name'}
        customLoading={<>Loading Recipes..</>}
        onSelect={(res) => console.log(res)}
        onChange={(input) => { }}
        onBlur={(e) => { }}
        onFocus={(e) => { }}
        customStyles={{}} />
      
    </div>
  )
}

export default App
