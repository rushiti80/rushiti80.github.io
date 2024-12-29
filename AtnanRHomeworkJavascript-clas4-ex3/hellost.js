function combineStrings(stringsArray) {
    // Combine the array elements into a single string with spaces
    const combinedString = stringsArray.join(" ");
    return combinedString;
}

// Example usage
const exampleArray = ["Hello", "there", "students", "of", "-MehmetDeralla-", "!"];
const result = combineStrings(exampleArray);

// Print the result to the console
console.log(result);

// Alternatively, show the result in an alert
alert(result);
