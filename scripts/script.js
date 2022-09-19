let bill = 0;
let tipPercent = 0;
let customTip = 0;
let billPlusTip = 0;
let numberPeople = 0;
let totalTip = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;

function clearResults() {
  const amounts = document.querySelectorAll(".amount");
  amounts.forEach ((amount) => {  
    amount.textContent = "";
    amount.textContent = "$0.00"
  })

};

function clearTextInputs() {
  const inputs = document.querySelectorAll(".text-input");
  inputs.forEach ((input) => {
    input.value = "";
    
  }
  )
}

(function cleanSlate() {
  clearTextInputs();
  clearResults();
}());

(function addEvents() {
  
  const textInput = document.querySelectorAll('.text-input');
  const buttons = document.querySelectorAll('input[type=button]');
  
  textInput.forEach(input => {
    input.addEventListener('input', getValue);
  })
  buttons.forEach(button => {
    button.addEventListener('click', getValue);
  })
  
}());


function getValue(e) {
  figureValues(e.target.value, e.target.id, e.target.classList[0]);
}

function figureValues(value, id, itemClass) {
  if (itemClass === "fixed-tip") {
    whatIs = "fixed";
    } else if (id === "bill-input") {
    whatIs = "bill";
  } else if (id === "custom-input") {
    whatIs = "custom";
    const fadePlaceholder = document.querySelector("#custom-placeholder")
    if (value.length === 0) {
      fadePlaceholder.classList.remove("hidden");
      fadePlaceholder.classList.add("visible");
    } else {
      fadePlaceholder.classList.add("hidden");
    }
  } else {
    whatIs = "people";
  }
  updateValues(value, whatIs)  
}

function updateValues(value, whatIs) {
  console.log("Updating values", value, whatIs);
  if (whatIs === "fixed" || whatIs === "custom") {
    if (whatIs === "fixed") {
      value = value.slice(0, -1);
      value = Number(value);
      
    }
    tipPercent = value;
    console.log("Updating tipPercent to", value);
    console.log("Updated tipPercent to", tipPercent);
  } else if (whatIs === "bill") {
    bill = value;
    bill = Number(bill);
    console.log("Updating bill to", value);
    console.log("Updated bill to", bill);
  } else {
    numberPeople = value;
    console.log("Updating numberPeople to", value);
    console.log("Updated numberPeople to", numberPeople);
  }
  calculator(bill, tipPercent, numberPeople);
  console.log("Launching calculator with bill, tipPercent, numberPeople as: bill-", bill, "tipPercent-", tipPercent, "numberPeople-",numberPeople);
}

function calculator(bill, tipPercent, numberPeople){
  setTimeout(function() {console.log("Calculator launched! bill, tipPercent and numberPeople are:", bill,",",tipPercent,",",numberPeople), 100});
  setTimeout(function() {console.log("Calculator received the following data types:", typeof bill, ",", typeof tipPercent,",", typeof numberPeople), 200});
  if (numberPeople.length === 0 || numberPeople === 0) {
    numberPeople = 1;
  }
  totalTip = bill * (tipPercent / 100);
  tipPerPerson = totalTip / numberPeople;
  totalPerPerson = (bill + totalTip) / numberPeople;
  setTimeout(function() {console.log("calculator results are as follows (totalTip, tipPerPerson, totalPerPerson",totalTip,",",tipPerPerson,",",totalPerPerson,". Launching updateResults."), 100});
  updateResults();
}

function updateResults() {
  const tipPer = document.querySelector("#tip-per");
  tipPer.textContent = "";
  if (isNaN(tipPerPerson.toFixed(2)) === true ||  tipPerPerson === Infinity) {
    tipPer.textContent = "$0.00";
  } else {
    tipPer.textContent = ("$", tipPerPerson.toFixed(2));
  }
  const total = document.querySelector("#total");
  total.textContent = "";
  if (isNaN(totalPerPerson.toFixed(2)) === true || totalPerPerson === Infinity) {
    total.textContent = "$0.00";
  } else {
    total.textContent = ("$", totalPerPerson.toFixed(2));
    
  }
    
}