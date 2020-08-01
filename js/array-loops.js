( () => {

    const shapes = ["circle",
        "square",
        "triangle",
        "trapezoid",
        "rhombus",
        "star",
        ];

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

    const randomDayOfWeek = () => {
        var index = Math.floor(Math.random() * 7);
        return daysOfTheWeek[index];
    };

    // console.log(randomDayOfWeek());

    const positionInAlphabet = char => {
        const asciiValue = char.toLowerCase().charCodeAt(0);

        return asciiValue - 96;
    };

    // console.log(positionInAlphabet("a"));
    // console.log(positionInAlphabet("z"));
    // console.log(positionInAlphabet("j"));

})();