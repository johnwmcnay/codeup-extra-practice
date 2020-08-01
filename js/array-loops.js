( () => {

    const shapes = ["circle",
        "square",
        "triangle",
        "trapezoid",
        "rhombus",
        "star",
        ];

    //prompts the user for a shape and sees if it is in
    //the shapes array
    const findShape = () => {
        var userInput = prompt("Please enter a shape:");

        for (var i in shapes) {
            if (shapes[i] === userInput) {
                console.log(shapes[i] + " is found!");
                break;
            }
        }
    };

    //findShape();

    const daysOfTheWeek = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        ];

    //returns a randomDayOfTheWeek
    const randomDayOfTheWeek = () => {
        var index = Math.floor(Math.random() * 7);
        return daysOfTheWeek[index];
    };

    // console.log(randomDayOfTheWeek());

    //returns position of letter in alphabet, 1-26
    const positionInAlphabet = char => {
        const asciiValue = char.toLowerCase().charCodeAt(0);

        return asciiValue - 96;
    };

    // console.log(positionInAlphabet("a"));
    // console.log(positionInAlphabet("z"));
    // console.log(positionInAlphabet("j"));

    //takes two arrays and adds numeric values in each array
    //and returns if the sum in each are equal
    const addNumbersInArrays = (arr1, arr2) => {
        var sum1 = 0, sum2 = 0;

        arr1.forEach( element => {
            if (typeof element === "number" && !isNaN(element)) {
                sum1 += element;
            }
        });
        arr2.forEach( element => {
            if (typeof element === "number" && !isNaN(element)) {
                sum2 += element;
            }
        });
        return (sum1 === sum2);
    };

    // console.log(addNumbersInArrays(["3", null, 4, NaN, 6],
    //     [2, "1", "apple", undefined, 8])
    // );
    // console.log(addNumbersInArrays(["3", null, 2, NaN, 6],
    //     [2, "1", "apple", undefined, 12])
    // );

})();