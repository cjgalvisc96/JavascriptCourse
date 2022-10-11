const returnTrue = () => {
    return true;
}

const negation = !false;
console.log(negation);
console.log(true && true);
console.log(true || true);

// ternary
const actualTime = 11;
const avaliableTimes = [0,9];
let avaliableToOpen = (avaliableTimes.includes(actualTime)) ? "Open" : "Close";


console.log({avaliableToOpen});

const score = 65;
const grade = score >= 90 ? "A+":
              score >= 80 ? "A": "B"

console.log({grade})