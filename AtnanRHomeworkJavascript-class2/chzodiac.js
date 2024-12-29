// Function to calculate Chinese Zodiac
function getChineseZodiac(year) {
    const zodiacAnimals = [
        "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", 
        "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];
    
    // Formula to calculate Chinese Zodiac
    const index = (year - 4) % 12;
    return zodiacAnimals[index];
}

// Get user input and display result
function calculateZodiac() {
    const yearInput = prompt("Enter a year to find its Chinese Zodiac:");
    const year = parseInt(yearInput);
    
    if (isNaN(year) || year <= 0) {
        alert("Please enter a valid positive number for the year.");
        return;
    }

    const zodiac = getChineseZodiac(year);
    alert(`The Chinese Zodiac for the year ${year} is: ${zodiac}`);
}

// Run the function
calculateZodiac();
