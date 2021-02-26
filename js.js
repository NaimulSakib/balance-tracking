//Login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";   // Transaction area will be shown here

})
// Deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmmount = document.getElementById("depositAmmount").value;
    const depositNumber = document.getElementById("depositAmmount");
})