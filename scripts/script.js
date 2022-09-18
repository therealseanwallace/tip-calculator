let bill = 0;
let tipPercent = 0;
let customTip = 0;
let billPlusTip = 0;
let numberPeople = 0;
let totalTip = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;

(function () {
  console.log("function active");
  const textInput = document.querySelectorAll('.text-input');
  console.log(textInput);
  textInput.forEach(input => {
    console.log("adding event");
    input.addEventListener('input', getValue);
    })
}());

function getValue(e) {
  updateValue(e.target.value, e.target.id);
  console.log("getting value, id", e.target.value, e.target.id)
}

function updateValue(value, id) {
    if (id === "bill-input") {
      bill = value;
      bill = Number(bill);
      
    } else if (id === "custom-input") {
      customTip = value;
      tipPercent = customTip;
      tipPercent = Number(tipPercent);

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
}