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
const btnStop = document.querySelector("#btnStop");
const btnNewGame = document.querySelector("#btnNewGame ");

const smallPlayersScore = document.querySelectorAll("small");
const divPlayerCards = document.querySelector("#cards-player");
const divComputerCards = document.querySelector("#cards-computer");

const computerTurn = (minimalPoints) => {
    do {
        const requestedCard = requestCard(deck=deck);
        computerScore += getCardValue(card=requestedCard);
        smallPlayersScore[1].innerText = computerScore;
    
        const imgCard = document.createElement("img");
        imgCard.src = `assets/cards/${requestedCard}.png`;
        imgCard.classList.add('cards');
        divComputerCards.append(imgCard);
        if(minimalPoints > 21){
            break;
        }
    } while((computerScore < minimalPoints) && (minimalPoints) <= 21)

    setTimeout(()=>{
        if (computerScore === minimalPoints){
            alert("Nobody Win!!");
        } else if(minimalPoints>21){
            alert("COMPUTER Win!!");
        } else if(computerScore>21){
            alert("PLAYER Win!!");
        }else{
            alert("COMPUTER Win!!");
        }
    }, 10);
    
}

btnRequestCard.addEventListener("click", ()=>{
    const requestedCard = requestCard(deck=deck);
    playerScore += getCardValue(card=requestedCard);
    smallPlayersScore[0].innerText = playerScore;

    const imgCard = document.createElement("img");
    imgCard.src = `assets/cards/${requestedCard}.png`;
    imgCard.classList.add('cards');
    divPlayerCards.append(imgCard);

    if(playerScore>21){
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(minimalPoints=playerScore);
    }else if(playerScore === 21){
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(minimalPoints=playerScore);
    }
})

btnStop.addEventListener("click", ()=>{
    btnRequestCard.disabled = true;
    btnStop.disabled = true;
    computerTurn(minimalPoints=playerScore);
})

btnNewGame.addEventListener("click", ()=>{
    deck = [];
    deck = createDeck(deck=deck);
    playerScore = 0;
    computerScore = 0;

    btnRequestCard.disabled = false;
    btnStop.disabled = false;

    smallPlayersScore[0].innerText = 0;
    smallPlayersScore[1].innerText = 0;
    divPlayerCards.innerHTML = "";
    divComputerCards.innerHTML = "";
})