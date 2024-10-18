const obj={
    a:"Test",
    b:"Program",
    c:"Online"
}

console.log(Object.entries(obj))

Object.prototype.myEntries=function(myObj){
    const keys=Object.keys(myObj);
    const values=Object.values(myObj);
    const result=[];
    
    for(let i=0;i<keys.length;i++){
        result.push([keys[i], values[i]])
    }
    return result;
}

console.log(Object.myEntries(obj))