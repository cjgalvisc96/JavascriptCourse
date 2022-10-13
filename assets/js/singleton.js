class Singleton{
    static instance;
    name = "";

    constructor(name=""){
        if(!!Singleton.instance){
            return Singleton.instance;
        }

        Singleton.instance = this;
        this.name = name;
        return this;
    }
}

const instance1 = new Singleton("Test1");
const instance2 = new Singleton("Test22");
const instance3 = new Singleton("Test4");
console.log(instance1.name);
console.log(instance2.name);
console.log(instance3.name);