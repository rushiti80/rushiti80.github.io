// Function to calculate age conversion
function calculateAge(age, toDogYears = true) {
    if (toDogYears) {
        // Convert human years to dog years
        return age * 7;
    } else {
        // Convert dog years to human years
        return age / 7;
    }
}

// Example usage in the console:
// Calculate dog's age in dog years from human years
console.log("5 human years in dog years: ", calculateAge(5)); // Default is human to dog

// Calculate human's age from dog's age
console.log("35 dog years in human years: ", calculateAge(35, false));
