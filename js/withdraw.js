document.getElementById("btn-withdraw").addEventListener("click", function () {
  //get withdraw amount
  const getWithdrawAmount = document.getElementById("withdraw-amount");
  const previousWithdrawAmount = parseFloat(getWithdrawAmount.value);

  //set new total
  const setNewTotal = document.getElementById("balance-total");
  const newTotal = parseFloat(setNewTotal.innerText);
  if (previousWithdrawAmount > newTotal) {
    alert("Sorry your withdraw amount is higher than your balance");
    return;
  } else if (
    isNaN(previousWithdrawAmount) ||
    typeof newDeposit !== "previousWithdrawAmount"
  ) {
    alert("Sorry value can't be empty");
    return;
  }
  //set to withdraw
  const getWithdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotal = parseFloat(getWithdrawTotal.innerText);
  const totalWithdraw = previousWithdrawAmount + withdrawTotal;
  getWithdrawTotal.innerText = totalWithdraw;
  const finalNewTotal = newTotal - previousWithdrawAmount;
  setNewTotal.innerText = finalNewTotal;
  // clear withdraw field after input
  getWithdrawAmount.value = "";
});
