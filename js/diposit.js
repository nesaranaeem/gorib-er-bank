document.getElementById("btn-diposit").addEventListener("click", function () {
  //get input from input field
  const getDiposit = document.getElementById("diposit-amount");
  const newDeposit = parseFloat(getDiposit.value);

  //get diposit total
  const dipositTotal = document.getElementById("diposit-total");
  // const allTimeDiposit = parseFloat(dipositTotal.innerText);
  //set diposit only bellow 50k
  if (newDeposit > 50000) {
    alert("Sorry You Can't Deposit More Than 50000 ");
  } else {
    dipositTotal.innerText = parseFloat(dipositTotal.innerText) + newDeposit;
  }
  //add diposit with  balance
  const getBalanceTotal = document.getElementById("balance-total");
  const allTimeBalance = parseFloat(getBalanceTotal.innerText);
  const finalTotal = allTimeBalance + newDeposit;
  getBalanceTotal.innerText = finalTotal;
  // clear diposit field after input
  getDiposit.value = "";
});
