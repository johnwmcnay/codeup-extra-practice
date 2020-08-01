
const fruits = ["apple",
    "banana",
    "orange",
    "apple",
    "pineapple",
    ];

//returns an array containing indexes that hold 'value'
const allIndexesOf = (arr, value) => {
    var newArray = [];

    arr.forEach( (element, index) => {
        if (element === value) {
            newArray.push(index);
        }
    });
    return newArray;
}

// console.log(allIndexesOf(fruits, "apple"));
// console.log(allIndexesOf(fruits, "guava"));
// console.log(allIndexesOf(fruits, "pineapple"));

const bugs = ["mosquito",
    "ant",
    "scorpion",
    "ant",
    "ant",
    "mosquito",
    "typo",
    "reference error",
    "type error",
    ];

//returns an array after removing all elements equal to 'value'
const removeAll = ( (arr, value) => {
    const newArray = arr.filter( (bug) => {
        return bug !== value;
    });
    return newArray;
});

// console.log(removeAll(bugs, "ant"));
// console.log(removeAll(bugs, "mosquito"));
// console.log(removeAll(bugs, "roach"));

//generates a random integer between min (inclusive) and
//max (exclusive)
const randomIntBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

// console.log("Random number between 5 and 75:", randomIntBetween(5, 75));

//returns a 0 or 1;
const coinFlip = () => {
    return randomIntBetween(0, 2);
}

// console.log(coinFlip());


//rolls a die with variable amount of sides and returns the result
//will roll a default of 6 if no argument is passed in
const rollDie = sides => {
    if (sides === undefined)
        return randomIntBetween(1, 7);
    return randomIntBetween(1, sides+1);
}

const twoDice = () => {
    const dieOne = rollDie(6);
    const dieTwo = rollDie(6);

    return dieOne + dieTwo;
}

// console.log(twoDice());

//rolls a twenty-sided die
const twentySidedDie = () => {
    return rollDie(20);
}

// console.log("D20", twentySidedDie());

//rolls a twelve-sided die
const twelveSidedDie = () => {
    return rollDie(12);
}

// console.log("D12", twelveSidedDie());

//rolls a four-sided die
const tetrahedron = () => {
    return rollDie(4);
}

// console.log("D4", tetrahedron());
// console.log("rollDie()", rollDie());

//returns an array of d6 rolls by default
//optionally takes a function to determine the dice roll
const listOfRolls = (rolls, diceFunction) => {
    var rollList = [];
    var diceFunc = (diceFunction === undefined) ?
        rollDie : diceFunction;

    for (var roll = 0; roll < rolls; roll++) {
        rollList.push(diceFunc());
    }
    return rollList;
}

// console.log("5 rolls:", listOfRolls(5));
// console.log("8 rolls:", listOfRolls(8));
// console.log("5 rolls of d4", listOfRolls(5, tetrahedron));
// console.log("3 rolls of d20", listOfRolls(3, twentySidedDie));

