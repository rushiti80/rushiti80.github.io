function sumOfMaxAndMin(arr) {
    // Filter the array to include only valid numbers
    const numbers = arr.filter(item => typeof item === "number" && !isNaN(item));

    // If there are no valid numbers, return an error message
    if (numbers.length === 0) {
        return "Error: The array does not contain any valid numbers.";
    }

    // Find the max and min numbers
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    // Return the sum of max and min
    return `Max: ${max}, Min: ${min}, Sum: ${max + min}`;
}

// Example usage
const exampleArray = [3, 5, "hello", 6, null, 8, 11];
const result = sumOfMaxAndMin(exampleArray);

// Output the result
console.log(result);
alert(result);
