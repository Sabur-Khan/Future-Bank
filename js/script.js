// // Login inter face js


document.querySelector('.login-btn').addEventListener('click', function(){
  let userInput = document.querySelector('.user-input');
  let userInputValue = userInput.value;

  let userPassword = document.querySelector('.user-password');
  let userPasswordValue = userPassword.value;


  
    if(userInputValue === 'user@gmail.com' && userPasswordValue === '123456'){
        
        let bankBody = document.querySelector('.bank-body');
        bankBody.style.display = 'block';
        let userBackground = document.querySelector('.user-background');
        userBackground.style.display = 'none'
        
    }else{
        alert( "Email: "+"user@gmail.com " + "Password: "+"123456");
    }

})


document.getElementById('deposite-btn').addEventListener('click', function(){
    
    let userDepositeInput = document.getElementById('user-deposite-input');
    let userDepositeInputElement =userDepositeInput.value;
    let userDepositeInputConvert = parseFloat(userDepositeInputElement);

    

    let depositeAmountNumber = document.getElementById('deposite-amount-number');
    let depositeAmountElement = depositeAmountNumber.innerText;
    let depositeAmountConvert = parseFloat(depositeAmountElement);

    let totalNewDeposite = depositeAmountConvert + userDepositeInputConvert;
    
    if(isNaN(totalNewDeposite)){
        alert("Please Valid Number")
        return 
    }

    depositeAmountNumber.innerText = totalNewDeposite;

    let blanceAmountNumber = document.getElementById('blance-amount-number');
    let blanceAmountNumberElement = blanceAmountNumber.innerText;
    let blanceAmountNumberConvert = parseFloat(blanceAmountNumberElement);

    let totalUpdateBalance = blanceAmountNumberConvert + userDepositeInputConvert;

    blanceAmountNumber.innerText = totalUpdateBalance;



    userDepositeInput.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    let userWithdrawInput = document.getElementById('user-withdraw-input');
    let userWithdrawInputElement = userWithdrawInput.value;
    let userWithdrawInputConvert = parseFloat(userWithdrawInputElement);

    userWithdrawInput.value = '';

    let withdrawAmountNumber = document.getElementById('withdraw-amount-number')
    let withdrawAmountElement = withdrawAmountNumber.innerText;
    let withdrawAmountConvert = parseFloat(withdrawAmountElement);

    let equalAmount = withdrawAmountConvert + userWithdrawInputConvert;
    if(isNaN(equalAmount)){
        alert("Invalid input")
        return 
    }

    withdrawAmountNumber.innerText = equalAmount;

    
    let totalblanceAmountNumber = document.getElementById('blance-amount-number')
    let totalblanceAmountElement = totalblanceAmountNumber.innerText;
    let totalblanceAmountConvert = parseFloat(totalblanceAmountElement);

    let curentTotal = totalblanceAmountConvert - userWithdrawInputConvert;

    totalblanceAmountNumber.innerText = curentTotal;

    

})