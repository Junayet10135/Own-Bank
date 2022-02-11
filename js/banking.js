
//Hard Method
/* 
function dobleIt(num){
    const result = num *2;
    return result;
} */
function getInputValue(){
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;
    // clear Input Field
    depositInput.value = '';
    return newDepositAmount;
}




//Easy Method

//Handle Deposit button event

document.getElementById('deposit-button').addEventListener('click',function(){
    //get amount from deposit
    /* const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value; */
   // console.log(DepositAmount);
    const newDepositAmount = getInputValue();

   const depositTotal = document.getElementById('deposit-total');

   const previousDepositAmount = depositTotal.innerText;
   const newDepositTotal = parseFloat(previousDepositAmount )+ parseFloat(newDepositAmount);

   
   depositTotal.innerText = newDepositTotal;

   //update account Balance
    const balanceTotal = document.getElementById('balance-total');

   const previousBalance = balanceTotal.innerText;
   const newBalance = parseFloat(previousBalance) +parseFloat(newDepositTotal);

   balanceTotal.innerText = newBalance; 
   /*  // clear Input Field
    depositInput.value = ''; */
    
})

//Handle withdraw button event

 document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawAmount = withdrawTotal.innerText;
    const totalWithdraw = parseFloat(previousWithdrawAmount)+ parseFloat (newWithdrawAmount);

    withdrawTotal.innerText = totalWithdraw;

    //update account Balance
    const balanceTotal = document.getElementById('balance-total');

   const previousBalance = balanceTotal.innerText;
   const newBalance = parseFloat(previousBalance) - parseFloat(totalWithdraw);

   balanceTotal.innerText = newBalance; 

    // clear Input Field
    withdrawInput.value = '';

}) 