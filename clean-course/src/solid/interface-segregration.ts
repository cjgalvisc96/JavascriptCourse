(()=>{
    interface Bird{
        eat():void;
        run():void;
        swim():void;
    }

    interface FlyingBird{
        fly():void;
    }

    class Tucan implements Bird, FlyingBird{
        public fly(){};
        public eat(){};
        public run(){};
        public swim(){};
    }

    class Penguin implements FlyingBird{
        public fly(){};
    }
})();