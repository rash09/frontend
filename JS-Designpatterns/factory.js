//Provides an interface for creating instances of a class
// code reusable
//used in libraries (bootstrap)

//Functional approach
function Cap(params) {
    this.color= params.color
    this.size=params.size
}

function Tue(params) {
    this.color= params.color
    this.size= params.size
}

function Apperal() {
}

Apperal.prototype.createAppreal = function (type, options) {
    switch (type) {
        case 'Cap':
            return new Cap(options)
        case 'Tie':
            return new Tie(options)
        default:
            throw new Error("invalid Inputs passed")
    }
}

const appreal = new Apperal();
const cap1 = new appreal.createAppreal('Cap', { color: 'RED', size: 33 })
const tie1 = new appreal.createAppreal('Tie', { color: 'GREEN', size: 33 })


//Class approach
class Cap {
    constructor(params) {
        this.color = params.color
        this.size = params.size
    }
    
}

class Tie {
    constructor(params) {
        this.color = params.color
        this.size = params.size
   }
}


class Appreal {
    createAppreal(type, options) {
        switch (type) {
            case 'Cap':
                return new Cap(options)
            case 'Tie':
                return new Tie(options)
            default:
                throw new Error("invalid Inputs passed")
        }
    }

    
}