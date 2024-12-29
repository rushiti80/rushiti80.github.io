// Book object with properties and method
function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    // Method to return info based on readingStatus
    this.getReadingStatus = function() {
        if (this.readingStatus) {
            return `Already read '${this.title}' by ${this.author}.`;
        } else {
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    };
}

// Get user input using prompt() for book details
const title = prompt("Enter the book title:");
const author = prompt("Enter the author's name:");
const readingStatusInput = prompt("Have you read the book? (yes/no)").toLowerCase();

// Convert the readingStatus input to a boolean
const readingStatus = readingStatusInput === "yes";

// Create a new Book object with user input
const book = new Book(title, author, readingStatus);

// Display the reading status
alert(book.getReadingStatus());
