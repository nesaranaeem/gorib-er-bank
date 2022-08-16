document.getElementById("btn-withdraw").addEventListener("click", function () {
  //get withdraw amount
  const getWithdrawAmount = document.getElementById("withdraw-amount");
  const previousWithdrawAmount = parseFloat(getWithdrawAmount.value);
  //set to withdraw
  const getWithdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotal = parseFloat(getWithdrawTotal.innerText);
  const totalWithdraw = previousWithdrawAmount + withdrawTotal;
  getWithdrawTotal.innerText = totalWithdraw;
  //set new total
  const setNewTotal = document.getElementById("balance-total");
  const newTotal = parseFloat(setNewTotal.innerText);
  const finalNewTotal = newTotal - previousWithdrawAmount;
  setNewTotal.innerText = finalNewTotal;
  // if (previousWithdrawAmount > finalNewTotal) {
  //   alert("Sorry your withdraw amount is higher than your balance ");
  // }
});
