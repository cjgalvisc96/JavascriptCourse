// let arrayWayOne = new Array(10);
// let arrayWayTwo = [];

let videoGames = ["MarioBros", "CallOfDuty"]
console.log({videoGames});
console.log(videoGames[0]);

let things = [
    true,
    1,
    "Test",
    1*3,
    function(){},
    ()=>{},
    {a:1},
    ["Megaman", "Test1",[
        1000
    ]]
];
console.log(things);
console.log(things[0]);
console.log(things[things.length-1][2][0]);

// Methods
let games = ["zelda", "Metroid"];
console.log("Len=", games.length);
let lastGame = games[games.length-1];

games.forEach((element, index, arr) =>{
    console.log({element, index, arr});
})

let newGamesLength = games.push(items="F-zero"); // Add in last position
console.log(newGamesLength);

newGamesLength =  games.unshift(items="Embled") // Add in first position
console.log(newGamesLength);

let removedGame = games.pop(); // Remove last position
console.log(removedGame);

let  removedSpecificGames = games.splice(start=1, deleteCount=2);
console.log(removedSpecificGames);

let specificGameIndex = games.indexOf(searchElement="Embled");
console.log(specificGameIndex);