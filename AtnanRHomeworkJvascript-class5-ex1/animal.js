// Create the animal object with properties and method
function Animal(name, kind) {
    this.name = name;
    this.kind = kind;

    // Method to make the animal speak
    this.speak = function(message) {
        console.log(`${this.kind} says: '${message}'`);
    };
}

// Get user input for the animal's name and kind
const name = prompt("Enter the animal's name:");
const kind = prompt("Enter the animal's kind (e.g., dog, cat, etc.):");

// Create an instance of the Animal object
const animal = new Animal(name, kind);

// Prompt the user to enter a message for the animal to speak
const message = prompt(`${name} the ${kind} says something! What do they say?`);

// Call the speak method with the user's message
animal.speak(message);
