
//Hard Method
/* 
function dobleIt(num){
    const result = num *2;
    return result;
} */
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    // clear Input Field
    inputField.value = '';
    return inputAmount;
}




//Easy Method

//Handle Deposit button event

document.getElementById('deposit-button').addEventListener('click',function(){
    //get amount from deposit
    /* const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value; */
   //next line update after using function
    const newDepositAmount = getInputValue('deposit-amount');

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
    /* const withdrawInput = document.getElementById('withdraw-amount');
    const newWithdrawAmount = withdrawInput.value; */
    //next line update after using function
    const newWithdrawAmount = getInputValue('withdraw-amount');

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawAmount = withdrawTotal.innerText;
    const totalWithdraw = parseFloat(previousWithdrawAmount)+ parseFloat (newWithdrawAmount);

    withdrawTotal.innerText = totalWithdraw;

    //update account Balance
    const balanceTotal = document.getElementById('balance-total');

   const previousBalance = balanceTotal.innerText;
   const newBalance = parseFloat(previousBalance) - parseFloat(totalWithdraw);

   balanceTotal.innerText = newBalance; 

    /* // clear Input Field
    withdrawInput.value = ''; */

}) 