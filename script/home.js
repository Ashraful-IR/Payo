// console.log("Home page script loaded");
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const amountInput = document.getElementById("amount");
    const amount = amountInput.value;
    console.log("Amount to withdraw:", amount);

    const pinInput = document.getElementById("pin");
    const pin = pinInput.value;
    console.log("Pin entered:", pin);
    
    const agentNumberInput = document.getElementById("agent-number");
    const agentNumber = agentNumberInput.value;
    console.log("Agent number entered:", agentNumber);

    const currentBalanceElement = document.getElementById("curr-balance");
    const currentBalance = currentBalanceElement.innerText;
    console.log("Current balance:", currentBalance);

    const newBalance = Number(currentBalance) - Number(amount);
    console.log("New balance after withdrawal:", newBalance);

    if (amount > Number(currentBalance)) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }
    if (pin !== "1234") {
        alert("Invalid pin. Please try again.");
        return;
    }
    if (agentNumber !== "0987654321") {
        alert("Invalid agent number. Please try again.");
        return;
    }

  // Simulate logout success
  alert("Withdrawal successful!");
  // Update the balance in the UI
  currentBalanceElement.innerText = newBalance;
  // Redirect to login page
//   window.location.href = "../index.html"; // Adjust the path as needed
});
