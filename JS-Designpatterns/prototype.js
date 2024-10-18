//creational design pattern that focuses on creating objects based on a template of an existing object through cloning
//Allows to create new objects by copying an existing one
// one object trying to access properties of another object


let arr = ['Ram', 'Sita', 'Lakshman'];
let objecta = {
    name: 'Ram',
    city: "Ayodhya",
    getIntro: function () {
        console.log(this.name)
    }
    
}

