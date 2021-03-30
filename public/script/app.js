const incomeBtn = document.getElementById('btnNewIncome');
const expenseBtn = document.getElementById('btnNewExpense');
const mainBtn = document.getElementById('mainBtn');
const actionResults = document.getElementById('actionResults');
const actionName = document.getElementById('name');
const actionValue = document.getElementById('value');
const incomeForm = document.getElementById('incomeForm');
const yourWallet = document.getElementById('wallet');
const allLists = document.getElementById('allList');
const allIncomesList = document.getElementById('allIncomesList');
const allExpensesList = document.getElementById('allExpensesList');

let wallet = 0;
let visible = true;

mainBtn.addEventListener('click',()=>{
    if(actionResults.style.display === 'block'){
        actionResults.style.display = 'none';
    }else{
        actionResults.style.display = 'block';
    }
});

yourWallet.addEventListener('click',()=>{
    if(visible === true){
        yourWallet.innerHTML = '$ -,--';
        visible = false;
    }else{
        visible = true;
        yourWallet.innerHTML = `$ ${wallet.toFixed(2)}`
    }
})

incomeBtn.addEventListener('click',(e)=>{
    let idColor = Date.now();
    wallet += parseFloat(actionValue.value);
    if(wallet < 0){
        yourWallet.style.color = 'red';
    }else{
        yourWallet.style.color = 'black';
    }
    allLists.innerHTML += `<li id=${idColor}>${actionName.value} $${actionValue.value}</li>`
    document.getElementById(idColor).style.color = 'green';
    allIncomesList.innerHTML += `<li>${actionName.value} $${actionValue.value}</li>`
    yourWallet.innerText = `$ ${wallet.toFixed(2)}`;
    actionName.value = '';
    actionValue.value = 0;
    actionResults.style.display = 'none';
});

expenseBtn.addEventListener('click',(e)=>{
    let idColor = Date.now();
    wallet -= parseFloat(actionValue.value);
    if(wallet < 0){
        yourWallet.style.color = 'red';
    }else{
        yourWallet.style.color = 'black';
    }
    allLists.innerHTML += `<li id=${idColor}>${actionName.value} $${actionValue.value}</li>`
    document.getElementById(idColor).style.color = 'red';
    allExpensesList.innerHTML += `<li>${actionName.value} $${actionValue.value}</li>`
    yourWallet.innerText = `$ ${wallet.toFixed(2)}`;
    actionName.value = '';
    actionValue.value = 0;
    actionResults.style.display = 'none';
})