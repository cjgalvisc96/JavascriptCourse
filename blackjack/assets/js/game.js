const myModule = (() => { // Module pattern [security way]
    "use strict";
    // Main
    let deck = [];
    const types = ["C", "D", "H", "S"],
          specialTypes = ["A", "J", "Q", "K"];
    let playersPoints = [];

    // Events
    const btnRequestCard = document.querySelector("#btnRequestCard"),
          btnStop = document.querySelector("#btnStop");

    const divCards = document.querySelectorAll(".divCards"),
          smallPlayersScore = document.querySelectorAll("small");

    const initializeGame = (numberPlayers = 2) => {
        deck = createDeck();
        playersPoints = [];
        for (let i=0; i< numberPlayers; i++){
            playersPoints.push(0);
        }

        smallPlayersScore.forEach( elem => elem.innerText = 0 );
        divCards.forEach( elem => elem.innerHTML = '' );
        btnRequestCard.disabled   = false;
        btnStop.disabled = false;
    }

    const createDeck = () =>{
        deck = [];
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

        return _.shuffle(deck);
    }

    const requestCard = ()=>{
        if (deck.length === 0){
            throw "Finish Game";
        }
        return deck.pop();
    }

    const getCardValue = (card) => {
        const cardValue = card.substring(0, card.length - 1);
        return (isNaN(cardValue)) ?
            (cardValue === "A") ? 11: 10:
            parseInt(cardValue);
    }

    // Turn: 0 => First Player and last => Computer
    const accumulatePoints = (card, turn)=> {
        playersPoints[turn] = playersPoints[turn] + getCardValue(card);
        smallPlayersScore[turn].innerText = playersPoints[turn];
        return playersPoints[turn];
        
    }

    const createCard = (card, turn) => {
        const imgCard = document.createElement("img");
        imgCard.src = `assets/cards/${card}.png`;
        imgCard.classList.add('cards');
        divCards[turn].append(imgCard);
    }

    const getWiner = () => {
        const [minimalPoints, computerScore] = playersPoints;
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

    const computerTurn = (minimalPoints) => {
        let computerScore = 0;
        const computerTurnPosition = playersPoints.length - 1;
        do {
            const requestedCard = requestCard();
            computerScore = accumulatePoints(requestedCard, computerTurnPosition );
            createCard(requestedCard, computerTurnPosition );
        } while((computerScore < minimalPoints) && (minimalPoints) <= 21)

        getWiner();
    }

    btnRequestCard.addEventListener("click", ()=>{
        const playerTurnPosition = 0;
        const requestedCard = requestCard();
        const playerScore = accumulatePoints(requestedCard,playerTurnPosition);

        createCard(requestedCard, playerTurnPosition);

        if(playerScore>21){
            btnRequestCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerScore);
        }else if(playerScore === 21){
            btnRequestCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerScore);
        }
    });

    btnStop.addEventListener("click", ()=>{
        btnRequestCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playersPoints[0]);
    });

    
    return {
        initNewGame: initializeGame
    };
})();


