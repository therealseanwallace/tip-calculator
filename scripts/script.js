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

(function() {
  cleanSlate();
}());

function cleanSlate() {
  clearTextInputs();
  clearResults();
}

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

function clearCustom() {
  const clearCustom = document.querySelector("#custom-input");
  clearCustom.value = "";
  const fadePlaceholder = document.querySelector("#custom-placeholder");
  fadePlaceholder.classList.remove("hidden");
  fadePlaceholder.classList.add("visible");
}

function figureValues(value, id, itemClass) {
  if (id ==="reset-button") {
    cleanSlate();
  } else if (itemClass === "fixed-tip") {
    clearCustom();
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
  if (whatIs === "fixed" || whatIs === "custom") {
    if (whatIs === "fixed") {
      value = value.slice(0, -1);
      value = Number(value);
      
    }
    tipPercent = value;
  } else if (whatIs === "bill") {
    bill = value;
    bill = Number(bill);
  } else {
    numberPeople = value;
  }
  calculator(bill, tipPercent, numberPeople);
}

function calculator(bill, tipPercent, numberPeople){
  if (numberPeople.length === 0 || numberPeople === 0) {
    numberPeople = 1;
  }
  totalTip = bill * (tipPercent / 100);
  tipPerPerson = totalTip / numberPeople;
  totalPerPerson = (bill + totalTip) / numberPeople;
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