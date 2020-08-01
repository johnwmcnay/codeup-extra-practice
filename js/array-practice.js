
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

