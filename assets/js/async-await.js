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
};

const searchHero = (heroId) => {
    const hero = heroes[heroId];
    return new Promise((resolve, reject)=>{
        if(hero){
            resolve(hero);
            return;
        }
        reject(`${heroId} doesn't exists`);
    });
};

const heroesIds = ["captian", "iron", "spider"];

const getHeroes = async () => {
    return await Promise.all(heroesIds.map(searchHero));
};

getHeroes();
