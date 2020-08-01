
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
const rollDie = sides => {
    return randomIntBetween(1, sides+1);
}

const twoDice = () => {
    const dieOne = rollDie(6);
    const dieTwo = rollDie(6);

    return dieOne + dieTwo;
}

// console.log(twoDice());

