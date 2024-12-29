// Function to determine and return the type of a given parameter
function getType(param) {
    const type = typeof param; // Determine the type using typeof
    console.log(`Value: ${param}, Type: ${type}`); // Log the value and type
    return type; // Return the type
}

// Call the function with different types
getType({});              // Object
getType(true);            // Boolean
getType(42);              // Number
getType("Hello World"); // String
getType(undefined);       // Undefined
