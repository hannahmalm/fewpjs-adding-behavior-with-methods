// Your code here
//Create classes Cat, Dog, and Bird


class Cat{
    constructor(name,sex){
        //For an instance of Cat, speak returns "name says meow!",
        this.name = name;
        this.sex = sex
    }

    //create a new method named speak
    //explicitly return the 
    speak() {
        return `${this.name} says meow!`
    }
}


class Dog {
    constructor(name,sex){
        //For an instance of Dog, speak returns "name says woof!"
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name,sex){
        //if the instance of Bird is male, speak returns "It's me! name, the parrot!". 
        //if it is not male, speak returns "name says squawk!".
        //Explicitly return anything youw ant printed out
        //speak is still its own metho
        this.name = name;
        this.sex = sex;
    }
    speak(){
        if (this.sex === "male") {
            return `It's me! ${this.name}, the parrot!`
        }
        else {
            return `${this.name} says squawk!`
        }
    }
}