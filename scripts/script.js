let bill = 0;
let tipPercent = 0;
let billPlusTip = 0;
let numberPeople = 0;
let totalTip = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;
let customTip = 0;

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
      billCents = bill * 100;
      console.log(typeof(bill));
    } else if (id === "custom-input") {
      customTip = value;
      customTip = Number(customTip);
      console.log(typeof(customTip));
    } else {
      numberPeople = value;
      numberPeople = Number(numberPeople);
      console.log(typeof(numberPeople));
    }
    calculator(billCents, tipPercent, numberPeople);
}

function calculator(billCents, tipPercent, numberPeople){
  
}