function greeting(){
    console.log("Hello world");
}

let greetung2 = function (name){
    console.log(`Hello ${name}`);
}

// Actual function sintax
let arrow = (name) => {
    console.log(`Hello ${name}`);
    return [1, 2]
}

let sumOneLine =  (a,b) => a + b;

let randomNumber = () => Math.random();

greeting();
greetung2(name="Cris");

let testReturn = arrow(name="arrow");
console.log(testReturn[1]);
console.log(sumOneLine(a=1,b=2));
console.log(randomNumber());


let createdPerson = (name_, lastName) => ({name_, lastName});

console.log(createdPerson(name_="Test", lastName="Hi"));

// Kwargs manage

let kwargs = (age, ...args) => {
    return args;
}

let [ names, person] = kwargs(age=14, "test", {name:"3"})

console.log({names, person});


const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });
const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });


const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );