// Define the constants
const phonePrice = 119.95; // Price of one phone
const taxRate = 0.05; // Tax rate (5%)
const numberOfPhones = 30; // Total number of phones

// Calculate the total price of phones before tax
const totalPriceBeforeTax = phonePrice * numberOfPhones;

// Calculate the tax amount
const taxAmount = totalPriceBeforeTax * taxRate;

// Calculate the total price including tax
const totalPrice = totalPriceBeforeTax + taxAmount;

// Output the result
console.log(`The total price for ${numberOfPhones} phones, including tax, is $${totalPrice.toFixed(2)}.`);
