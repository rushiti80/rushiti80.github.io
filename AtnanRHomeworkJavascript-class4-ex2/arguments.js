// Function to validate if a value is a valid number
function validateNumber(number) {
    return typeof number === "number" && !isNaN(number);
}

// Function to calculate the sum of an array of 5 numbers
function calculateSum(numbers) {
    // Validate each number in the array
    for (let i = 0; i < numbers.length; i++) {
        if (!validateNumber(numbers[i])) {
            alert(`Error: The value at index ${i} (${numbers[i]}) is not a valid number.`);
            return; // Exit the function if validation fails
        }
    }

    // Calculate the sum
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum;
}

// Example usage
const userNumbers = [10, 20, 30, 40, 50]; // Replace with any array of 5 numbers
const result = calculateSum(userNumbers);

if (result !== undefined) {
    console.log(`The sum of the numbers is: ${result}`);
    alert(`The sum of the numbers is: ${result}`);
}
