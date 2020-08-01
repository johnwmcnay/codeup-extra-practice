//returns the first element of an array
const first = arr => {
    return arr[0];
}

// console.log("first [2, 4, 6]", first([2, 4, 6]));
// console.log("first [5, 1, 3]", first([5, 1, 3]));

//returns the second to last element of an array
const secondToLast = arr => {
    return arr[arr.length - 2];
}

// console.log("secondToLast [2, 4, 6]", secondToLast([2, 4, 6]));
// console.log("secondToLast [5, 1, 3]", secondToLast([5, 1, 3]));

//returns all elements of an array after the first element
const rest = arr => {
    return arr.slice(1);
}

// console.log("rest [2, 4, 6]", rest([2, 4, 6]));
// console.log("rest [5, 1, 3]", rest([5, 1, 3]));

//takes an array and returns the longest string in it
//if multiple strings are same length, returns the first occurrence
const getLongestString = arr => {
    var longestStr = '';
    var longestLength = 0;

    arr.forEach( element => {
        if (element.length > longestLength) {
            longestStr = element;
            longestLength = element.length
        }
    });
    return longestStr;
}

//takes an array and returns the shortest string in it
//if multiple strings are same length, returns the first occurrence
const getShortestString = arr => {
    var shortestStr = '';
    var shortestLength = Infinity;

    arr.forEach( element => {
        if (element.length < shortestLength) {
            shortestStr = element;
            shortestLength = element.length
        }
    });
    return shortestStr;
}

const strArray = ["a", "an", "and", "I", "eye"];

// console.log(getLongestString(strArray));
// console.log(getShortestString(strArray));

