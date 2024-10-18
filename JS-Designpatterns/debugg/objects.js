// your code goes here
/*
  
    // polyfill
    if(!Object.create){
       // console.log(Object.create)
       Object.create = function (o) {
        if (arguments.length > 1) {
          throw new Error('Object.create implementation');
        }
        function F() {}
        F.prototype = o;
        return new F();
    }
    }
    
    Object.create=function(proto, protoObjects){
        console.log(typeof proto);
       
    if(typeof proto!=='object' && typeof proto!=='function'){
    throw new TypeError();
    } else if(proto===null){
    return {}
    }
    
    if(protoObjects===undefined) return;
    function F(){}
    F.prototype=proto;
    return new F();
    }

      
const person = {
  isHuman: false,
  name:"John",
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};
let me=Object.create(person,{
name:"Rash"
})
//me.name="Rash"
me.printIntroduction();*/
const person = {
  isHuman: false,
  name:"John",
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

let newMe = Object.create(person, {
    name: {
        value: 'Ram',
        writable:true
    }
});
newMe.printIntroduction();
newMe.hasOwnProperty('printIntroduction')

/*function myCreate(proto, protoObjects) {
    return Object.create = function (proto, protoObjects) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError();
    } else if (proto === null) return {};

    if (ProtoObj !== undefined) return;
    console.log(proto)
    function F() { };
    F.prototype = proto;
    return new F();

}
}*/

if (!Object.create) {
    Object.create = function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };
}


let secondMe = Object.create(person, {
    name: {
        value: "Rams",
        writable:true
    }
})
secondMe.printIntroduction();
secondMe.hasOwnProperty('printIntroduction')
