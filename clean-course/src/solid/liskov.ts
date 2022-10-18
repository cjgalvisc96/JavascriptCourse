(()=>{
    abstract class Vehicle{
        abstract getNumberOfseats(): number;
    }

    class Tesla extends Vehicle{

        constructor( private numberOfSeats: number ) {
            super();
        }

        getNumberOfseats(): number {
            return this.numberOfSeats;
        }
    }

    class Audi extends Vehicle{

        constructor( private numberOfSeats: number ) {
            super();
        }

        getNumberOfseats(): number {
            return this.numberOfSeats;
        }
    }

    class Toyota extends Vehicle{

        constructor( private numberOfSeats: number ) {
            super();
        }

        getNumberOfseats(): number {
            return this.numberOfSeats;
        }
    }

    class Honda extends Vehicle{

        constructor( private numberOfSeats: number ) {
            super();
        }

        getNumberOfseats(): number {
            return this.numberOfSeats;
        }
    }

    const printCarSeats = ( cars: Vehicle[] ) => {
        cars.forEach(car => {
            console.log(car.constructor.name, car.getNumberOfseats())
        })
    }
    
    const cars: Vehicle[] = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];

    printCarSeats( cars );

})();