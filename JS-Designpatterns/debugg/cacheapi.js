
const cacheAPI=(time)=>{
    let cache = {};
    
    return async(url, config = {})=>{
        const key = `${url}${JSON.stringify(config)}`;
        const entry = cache[key];

        if (!entry || Date.now() > entry.expiry) {
            console.log("Making a fresh call");

            try {
                let resp = await fetch(url, config);
                resp = await resp.json();
                cache[key] = { value: resp, expiry:Date.now()+time };

            }
            catch(e) {
                console.log("Error-"+e)
            }
        }

        return cache[key]
    }
}


const call = cacheAPI(1500);
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) => console.log("1", a));
setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) => console.log("2",a));
},800)