( () => {

    //returns the first element of an array
    const first = arr => {
        return arr[0];
    };

    // console.log("first [2, 4, 6]", first([2, 4, 6]));
    // console.log("first [5, 1, 3]", first([5, 1, 3]));

    //returns the second to last element of an array
    const secondToLast = arr => {
        return arr[arr.length - 2];
    };

    // console.log("secondToLast [2, 4, 6]", secondToLast([2, 4, 6]));
    // console.log("secondToLast [5, 1, 3]", secondToLast([5, 1, 3]));

    //returns all elements of an array after the first element
    const rest = arr => {
        return arr.slice(1);
    };

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
    };

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
    };

    const strArray = ["a", "an", "and", "I", "eye"];

    // console.log(getLongestString(strArray));
    // console.log(getShortestString(strArray));

    //concatenates two arrays
    const addTwoArrays = (arr1, arr2) => {
        return arr1.concat(arr2);
    };

    const testArray1 = [1, 2, 3];
    const testArray2 = [4, 5, 6];

    // console.log(addTwoArrays(testArray1, testArray2));

    //return an array with no duplicate values
    const getUniqueValues = arr => {
        var uniqueArray = [];

        arr.forEach( (element, index) => {
            if (arr.indexOf(element) === index) {
                uniqueArray.push(element);
            }
        });
        return uniqueArray;
    };

    const duplicateEntries = ["a", "b", "a", "c", "b", "c"];
    // console.log(getUniqueValues(duplicateEntries));

    //reverses the array
    const reverseArray = arr => {
        return arr.reverse();
    };

    // console.log(reverseArray(testArray1));
    // console.log(reverseArray(testArray2));

    const quotes = ["All the world's a stage...",
        "Give me liberty or give me death",
        "An eye for an eye leaves the whole world blind",
        ]

    //gets a random quote/index from an optional array argument
    const getRandomQuote = (arr=quotes) => {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };

    // console.log(getRandomQuote());
    // console.log(getRandomQuote(duplicateEntries));

    const getIndexesOf = (char, word) => {
        const strArray = word.split('');
        var newArray = [];

        strArray.forEach( (letter, index) => {
            if (letter === char) {
                newArray.push(index);
            }
        });
        return newArray;
    };

    // console.log(getIndexesOf("a", "banana"));
    // console.log(getIndexesOf("z", "banana"));

    //returns an array with all elements equal to value removed
    const removeAll = (arr, value) => {
        return arr.filter( (element) => {
            return element !== value;
        });
    };

    // console.log(removeAll([1,2,3], 2));
    // console.log(removeAll([2,2,3,4,5,2,2], 2));

    //returns an array with the num-elements of the Fibonacci sequenece
    const getNFibonacci = num => {
        var fibonacciArray = [0, 1];

        if (num === 1)
            return [0];
        if (num === 2)
            return fibonacciArray;

        for (var i = 2; i < num; i++) {
            fibonacciArray.push(
                fibonacciArray[i-1] +
                fibonacciArray[i-2]
            );
        }
        return fibonacciArray;
    };

    //returns an array with 10 elements of the Fibonacci sequence
    const firstTenFibonacciNumbers = () => {
        return getNFibonacci(10);
    };

    // console.log(firstTenFibonacciNumbers());
    // console.log(getNFibonacci(5));

    //takes an array, moves first element to last
    const moveFirstToLast = arr => {
        var newArray = arr.slice(1);
        return newArray.concat(arr[0]);
    };

    // console.log(moveFirstToLast(testArray1));
    // console.log(moveFirstToLast(testArray2));

    //takes two arrays of same length and returns an
    //array of arrays with elements of the same index
    const zip = (arr1, arr2) => {
        var newArray = [];

        arr1.forEach( (element, index) => {
           newArray.push([element, arr2[index]]);
        });
        return newArray;
    };

    // console.log(zip(testArray1, testArray2));

})();
