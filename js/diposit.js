document.getElementById("btn-diposit").addEventListener("click", function () {
  //get input from input field
  const getDiposit = document.getElementById("diposit-amount");
  const newDeposit = parseFloat(getDiposit.value);
  if (newDeposit < 1 || isNaN(newDeposit) || typeof newDeposit !== "number") {
    alert("Sorry! Minimum Diposit is 1 Taka");
    return;
  }

  //get diposit total
  const dipositTotal = document.getElementById("diposit-total");
  // const allTimeDiposit = parseFloat(dipositTotal.innerText);
  //set diposit only bellow 50k
  if (newDeposit > 50000) {
    alert("This Is Goriber Bank! So, Sorry You Can't Deposit More Than 50000");
    return;
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
