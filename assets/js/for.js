const heroes = ["Batman", "Superman", "Wonderwoman", "Aquaman"];

// Traditional FOR
for(let index=0; index < heroes.length; index++){
    console.log(heroes[index]);
}

// FOR IN 
for(let index in heroes){
    console.log(heroes[index]);
}

// FOR OF
for(let hero of heroes){
    console.log(hero);
}