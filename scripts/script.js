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
    console.log("this is an amount");
    console.log(amount.textContent);
    amount.textContent = "";
    console.log(amount.textContent);
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
  console.log("Clean slate!");
  clearTextInputs();
  clearResults();
}());

(function addEvents() {
  
  const textInput = document.querySelectorAll('.text-input');
  console.log(textInput);
  textInput.forEach(input => {
    input.addEventListener('input', getValue);
    })
}());



function getValue(e) {
  updateValue(e.target.value, e.target.id);
  console.log("getting value, id", e.target.value, e.target.id)
}

function updateValue(value, id) {
  const fadePlaceholder = document.querySelector("#custom-placeholder")
    if (id === "bill-input") {
      bill = value;
      bill = Number(bill);
      
      
    } else if (id === "custom-input") {
      console.log("Value is", value, "while value.length is", value.length);
      if (value.length === 0) {
        fadePlaceholder.classList.remove("hidden");
        fadePlaceholder.classList.add("visible");
      } else {
        fadePlaceholder.classList.add("hidden");
        customTip = value;
        tipPercent = customTip;
        tipPercent = Number(tipPercent);
      }
      

      
    } else {
      numberPeople = value;
      numberPeople = Number(numberPeople);
      
    }
    calculator(bill, tipPercent, numberPeople);
}

function calculator(bill, tipPercent, numberPeople){
  totalTip = bill * (tipPercent / 100);
  tipPerPerson = totalTip / numberPeople;
  totalPerPerson = (bill + totalTip) / numberPeople;
  console.log("totalTip is", totalTip);
  console.log("tipPerPerson is", tipPerPerson);
  console.log("totalPerPerson is", totalPerPerson);
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
    console.log(totalPerPerson.toFixed(2));
  }
    
}