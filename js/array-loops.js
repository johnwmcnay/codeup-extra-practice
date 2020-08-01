( () => {

    const shapes = ["circle",
        "square",
        "triangle",
        "trapezoid",
        "rhombus",
        "star",
        ]

    const findShape = () => {
        var userInput = prompt("Please enter a shape:");

        for (var i in shapes) {
            if (shapes[i] === userInput) {
                console.log(shapes[i] + " is found!");
                break;
            }
        }
    }

    //findShape();




})();