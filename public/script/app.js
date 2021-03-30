const incomeBtn = document.getElementById('incomeBtn');
const expenseBtn = document.getElementById('expenseBtn');
const incomeTextInput = document.getElementById('incomeTextInput');
const incomeInput = document.getElementById('incomeInput');
const expenseTextInput = document.getElementById('expenseTextInput');
const expenseInput = document.getElementById('expenseInput');
const incomeForm = document.getElementById('incomeForm');
const expenseForm = document.getElementById('expenseForm');

incomeBtn.addEventListener('click',()=>{
    document.getElementById('incomeAction').style.display = 'block';
    document.getElementById('expenseAction').style.display = 'none';
});
expenseBtn.addEventListener('click',()=>{
    document.getElementById('incomeAction').style.display = 'none';
    document.getElementById('expenseAction').style.display = 'block';
});

incomeForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e)
});
expenseForm.addEventListener('submit',(e)=>{
    e.preventDefault();
})