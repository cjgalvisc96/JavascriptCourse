const cars = ["Ford", "Mazda"];

// First way
let index = 0;
while(index < cars.length){
    console.log(cars[index]);
    index++;
}

// Second way
let index2 = 0;
while(cars[index2]){
    if(index2 === cars.length){
        break;
    }
    console.log(cars[index2]);
    index2++;
}


// Do while
let index3 = 0;
do{
    console.log(cars[index3]);
    index3++;

} while(cars[index3]);