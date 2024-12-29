function calculateDifference(number) {
    let difference = number - 13;

    if (number > 13) {
        return difference * 2; // Double the difference if the number is greater than 13
    }
    return difference; // Otherwise, just return the difference
}

// Example usage
let input = 20;
let result = calculateDifference(input);
console.log(result); // Output: 14
