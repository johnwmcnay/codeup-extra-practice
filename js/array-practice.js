
const fruits = ["apple",
    "banana",
    "orange",
    "apple",
    "pineapple",
    ];

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

