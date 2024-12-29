function getFullNames(firstNames, lastNames) {
    // Create a new array to store the full names
    const fullNames = [];

    // Loop through both arrays
    for (let i = 0; i < firstNames.length; i++) {
        // Combine the first name, last name, and the numeric index
        fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
    }

    // Return the array with full names
    return fullNames;
}

// Example usage
const firstNames = ["Bob", "Jill"];
const lastNames = ["Gregory", "Wurtz"];
const fullNames = getFullNames(firstNames, lastNames);

// Output the result
console.log(fullNames);
alert(fullNames);
