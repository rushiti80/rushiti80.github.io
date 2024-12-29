let result = ""; // Store the result as a single string
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        result += i + "\n"; // Add a newline for even numbers
    } else {
        result += i + " "; // Add a space for odd numbers
    }
}
console.log(result); // Print the final result