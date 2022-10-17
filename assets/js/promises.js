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

export const searchHero = (heroId) => {
    const hero = heroes[heroId];
    return new Promise((resolve, reject)=>{
        if(hero){
            resolve(hero);
            return;
        }
        reject(`${heroId} doesn't exists`);
    });
};

// const heroId = "captian";
// const heroIdTwo = "spider";
// Promise.all([searchHero(heroId),searchHero(heroIdTwo)])
//     .then(([hero1, hero2]) => {
//         console.log(hero1);
//         console.log(hero2);
// }).catch(err => {
//     console.log(err);
// }).finally(()=>{
//     console.log("All promises finished");
// });

// console.log("Finished program");
