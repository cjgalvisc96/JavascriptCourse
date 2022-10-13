class Person{
    // static properties(use only for class Person)
    static counter = 0;
    static getCounter(){
        return Person.counter + " Instances";
    }
    static message(){
        console.log("I'm static method");
    }
    // class properties NOT vars
    name="";
    code="";
    phrase="";
    food = "";

    constructor(name="T", code=0, phrase="Test"){
        this.name= name;
        this.code= code;
        this.phrase= phrase;

        Person.counter++;
    }

    set setFood(food) {
        this.food = food.toUpperCase();
    }

    get getFood(){
        return this.food;
    }

    whoIAm(){
        console.log(`I am ${this.name}`);
    }

    myPhrase(){
        console.log(this.phrase);
    }
}

// Inheritance
class Hero extends Person{
    clan = "Without clan";

    constructor(name, code, phrase){
        super(name, code, phrase);
        this.clan = "Avengers";
    }

    whoIAm(){
        super.whoIAm();
        console.log(`Clan=  ${this.clan}`);
    }
}

const cris = new Person("Cris", 1, "Believe");
cris.whoIAm();
cris.myPhrase();
cris.setFood = "Lasagna";
console.log(cris.getFood);

const pipe = new Person("Pipe", 2, "Energy");

console.log(Person.getCounter());
Person.message();

const spiderman = new Hero("Spiderman", 1, "spider");
spiderman.whoIAm();
console.log(spiderman.clan);
spiderman.whoIAm();

// Private properties
class Rectangle{
    #area = 0; // private properties using "#"
    constructor(base=0, height=0){
        this.base = base;
        this.height = height;
        this.#area = base * height;
    }

    // private methods is not allowed now
    getArea(){
        console.log(this.#area);
    }
}

const rectangleTest = new Rectangle(10,15);
rectangleTest.getArea();