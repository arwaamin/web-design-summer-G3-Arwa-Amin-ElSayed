  var input = prompt("Enter your degree");
        if (input === null) {
            console.log("User cancelled the prompt.");
        } else {
            var degree = Number(input);

            if (input.trim() === "" || isNaN(degree)) {
                console.log("Invalid input! Please enter a valid number.");
            } else if (degree >= 90) {
                console.log("A");
            } else if (degree >= 80 && degree < 90) {
                console.log("B");
            } else if (degree >= 70 && degree < 80) {
                console.log("C");
            } else {
                console.log("F");
            }
        }