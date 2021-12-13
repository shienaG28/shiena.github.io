
  var money = document.querySelector('.money');
  var expenses = document.querySelector('.expenses');

  function add() {
    let user = document.querySelector('.user').innerHTML =" Hi " + document.querySelector('.name').value.trim() + " your budget is. ₱" + money.value;
    let amount = document.querySelector('.budgetAmount').innerHTML =" "+ expenses.value;
    let left = document.querySelector('.left').innerHTML =" "+ money.value - expenses.value;
  }
