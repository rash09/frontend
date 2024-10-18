// Design pattern- solutionto recurring probpems, guideline totackle certain problem.

//Creational- Singletone, Factory, Builder, Prototype, Abstract Factory
//Behaviour
//Structural
//

//Singlton
//Single instance
// Global access point
// Lazy initialization
//Controlled access to resources (db)
// Easy to modify & extend
//Encapsulation (cover, hide)
//can implement interfaces or inherit from base class
// avoids global variable
// Use case, logger file, authentication, 
//Disadvantage-debugging, over use
const Attendence = (function () {
    let instance;
    const createInstance = function () {
        return {
            user: "guest",
            name: "Ram",
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance()
            }
            return instance
        }
    }

})()
//ECMA Script
/*class Attendence(){
    constructor(){
        if (!Attendence.instance) {
            this.value = " I am from a constructor"
            Attendence.instance=this
        }
        return Attendence.instance
    }
    output(){
        console.log(this.value)
    }
}*/

const obj1 = Attendence.getInstance()
const obj2 = Attendence.getInstance()

console.log(obj1 === obj2)// flase if not singleton


