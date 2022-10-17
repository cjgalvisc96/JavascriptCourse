const heroes = {
    captian: {
        name: "Captian American",
        power: "Fast"
    },
    iron: {
        name: "Ironman",
        power: "Rich"
    },
    spider: {
        name: "Spiderman",
        power: "Fly"
    }
}

// callback
const searchHero = (heroId, callback) => {
    const hero = heroes[heroId];
    if(hero){
        callback(null, hero);
    }else{
        callback("Hero dosn't exists");
    }
}


const heroId = "captian";
searchHero(heroId, (err, hero) =>{
    if (err){
        console.log(err);
        return;
    }
    console.log(hero);
})