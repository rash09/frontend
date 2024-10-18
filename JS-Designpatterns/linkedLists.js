async function Lists() {
   const url = 'https://spotify23.p.rapidapi.com/search/?q=albums&type=albums&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e44c36037bmshac8b8c4782c87e0p174236jsn9a7a93d176c1',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    const result = await response.json();
    //console.log(result);
    return new Promise((resolve, reject) => {
        try{
resolve(result)
        } catch(err) {
            reject(err)
        }
    });
	
} catch (error) {
	console.error(error);
}
}

function createElement(key, id, content,element, type) {
    const LIelem = document.createElement(element);
    LIelem.key = key;
    LIelem.id = id;
    
    LIelem.textContent = content;
     if (type === 'checkbox') {
        LIelem.type='checkbox'
    }
    
    return LIelem;
}

function renderList() {
    const lt = Lists();
    
    
    lt.then((result) => {
        const ULelem = document.getElementById('lists');
        const items = result.albums.items;
        items.map((val, index) => {
             const Chkelem = createElement(`key-${index}`, `${index}`, `${val.data.name}`, 'Input', 'checkbox');
            const Lielem = createElement(`key-${index}`, `${index}`, `${val.data.name}`, 'li',null);
            Lielem.append(Chkelem);
            ULelem.append(Lielem)
        })
            
        })
}
renderList();
