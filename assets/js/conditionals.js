let numberOne = 12;

if (numberOne>10){
    console.log("Heyyy");
}

const today = new Date();
let day = today.getDay();

console.log({day});

if (day === 0){
    console.log("Is Monday");
}else if(day == 3){
    console.log("Is Wendnesday");
}


const days = {
    0: "Sunday",
    1: "Monday",
    2: "Thuesday"
}
const daysSecondWay = ["Sunday",
    "Monday",
    "Thuesday"
]
console.log(days[day]);
console.log(daysSecondWay[day]);