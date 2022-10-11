const types = ["C", "D", "H", "S"];
const specialTypes = ["A", "J", "Q", "K"];
const createDeck = (deck) =>{
    for(let i = 2; i<=10;i++){
        for(let type of types){
            deck.push(i+type);
        }
    }

    for(let type of types){
        for(let specialType of specialTypes){
            deck.push(specialType + type);
        }
    }

    deck = _.shuffle(deck)
    return deck
}

const requestCard = (deck)=>{
    if (deck.length === 0){
        throw "Finish Game";
    }
    const card = deck.pop();
    return card;
}

const getCardValue = (card) => {
    const cardValue = card.substring(0, card.length - 1);
    return (isNaN(cardValue)) ?
           (cardValue === "A") ? 11: 10:
           parseInt(cardValue)
}

// Main
let deck = [];
deck = createDeck(deck=deck);
let playerScore = 0;
let computerScore = 0;

// Events
const btnRequestCard = document.querySelector("#btnRequestCard") ;
const smallplayersScore = document.querySelectorAll("small");

btnRequestCard.addEventListener("click", ()=>{
    const requestedCard = requestCard(deck=deck);
    playerScore += getCardValue(card=requestedCard);
    smallplayersScore[0].innerText = playerScore;
})