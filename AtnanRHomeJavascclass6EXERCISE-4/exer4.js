function findCloserTo100(num1, num2) {
    // Check if any of the numbers is negative
    if (num1 < 0 || num2 < 0) {
        alert("Negative numbers are not allowed!");
        return;
    }

    // Calculate the absolute differences from 100
    let diff1 = Math.abs(100 - num1);
    let diff2 = Math.abs(100 - num2);

    // Determine which number is closer to 100
    if (diff1 < diff2) {
        console.log(num1 + " is closer to 100");
    } else if (diff2 < diff1) {
        console.log(num2 + " is closer to 100");
    } else {
        console.log("Both numbers are equally close to 100");
    }
}

// Example usage
let input1 = parseInt(prompt("Enter the first integer:"));
let input2 = parseInt(prompt("Enter the second integer:"));

findCloserTo100(input1, input2);
