
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    // clear Input Field
    inputField.value = '';
    return inputAmount;
}
function updateTotalField(totalFieldId,amount){
   const totalElement = document.getElementById(totalFieldId);

   const previousTotal = totalElement.innerText;
   const newAmountTotal = parseFloat(previousTotal )+ parseFloat(amount);

   totalElement.innerText = newAmountTotal;

   
}
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');

   const previousBalance = balanceTotal.innerText;
   

   
   
   if(isAdd == true){
    const newBalance = parseFloat(previousBalance) +parseFloat(amount);
    balanceTotal.innerText = newBalance;
   }
   else{
       const newBalance = parseFloat(previousBalance) - parseFloat(amount);
       balanceTotal.innerText = newBalance;
   }
}

//Handle deposit button event

document.getElementById('deposit-button').addEventListener('click',function(){
    
    const newDepositAmount = getInputValue('deposit-amount');

    //error handeling
    if (newDepositAmount > 0){
        updateTotalField('deposit-total',newDepositAmount);

        updateBalance(newDepositAmount, true);
    }

    
})

//Handle withdraw button event

 document.getElementById('withdraw-button').addEventListener('click', function(){

    const newWithdrawAmount = getInputValue('withdraw-amount');

    //error handeling
    if (newWithdrawAmount > 0){
        updateTotalField('withdraw-total', newWithdrawAmount );

    updateBalance(newWithdrawAmount, false);
    }
    
}) 