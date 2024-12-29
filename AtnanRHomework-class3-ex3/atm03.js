// Hardcoded account balance
let accountBalance = 500; // Initial account money

function atm() {
    // Prompt user for the amount they want to withdraw
    let amountToWithdraw = parseFloat(prompt("Enter the amount you want to withdraw:"));

    // Check if the input is valid
    if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
        alert("Invalid amount. Please enter a positive number.");
        return;
    }

    // Check if there is enough money in the account
    if (amountToWithdraw > accountBalance) {
        alert("Not enough money.");
    } else {
        accountBalance -= amountToWithdraw; // Deduct the withdrawn amount
        alert(`You have withdrawn $${amountToWithdraw}. Remaining balance: $${accountBalance}`);
    }
}

// Call the ATM function
atm();
