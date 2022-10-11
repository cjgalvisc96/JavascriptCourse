let cartoon = {
    name: "Mickey",
    code:  1234,
    coords:{
        longitude: 111,
        latitude: -11
    },
    powers: ["fast"],
    "last-movie": "Test"
};

console.log(cartoon);
console.log("Name=", cartoon.name);
console.log("powers=", cartoon.powers[0]);
console.log("powersLen=", cartoon.powers.length);
console.log("coords=", cartoon.coords.latitude);

const isAlive = "alive";

console.log(cartoon["isAlive"]);
console.log(cartoon["last-movie"]);


delete cartoon.code;
console.log(cartoon);
