const date = new Date();
let currentTime;
let displayedNumber = document.querySelector('.p-displayedNumber');
let displayedSign = document.querySelector('.p-displayedSign');
let numberA = 0;
let numberB = 0;
let calculation = 0;
let shouldNumberBeZero = false;
let typeOfOperation;


if (Number(date.getMinutes()) < 10) {
currentTime = date.getHours() + ":" + "0" + date.getMinutes();
}
else {
currentTime = date.getHours() + ":" + date.getMinutes();
} 

document.querySelector('.p-time').innerHTML = currentTime;

function createNumber(number) {
  if (shouldNumberBeZero) {
    if (number < 10) {
      displayedSign.innerHTML = "";
      displayedNumber.innerHTML = 0;
      displayedNumber.innerHTML = Number(displayedNumber.innerHTML + number);
      shouldNumberBeZero = false;
    }
    else {
      displayedNumber.innerHTML = 0;
      shouldNumberBeZero = false;
    }

  }

  else if (!shouldNumberBeZero) {
    if (number < 10) {
      displayedNumber.innerHTML = Number(displayedNumber.innerHTML + number);
    }
    else {
      displayedNumber.innerHTML = 0;
    }
  }
}

function clearButton() {
  displayedNumber.innerHTML = 0;
  displayedSign.innerHTML = "";
}

function equals() {
  if(typeOfOperation === 'plus'){ 
    numberB = displayedNumber.innerHTML;
    calculation = Number(numberA) + Number(numberB);
    displayedNumber.innerHTML = calculation;
    numberA = 0;
    numberB = 0;
    shouldNumberBeZero = true;
    typeOfOperation = '';
  }

  if(typeOfOperation === 'minus'){ 
    numberB = displayedNumber.innerHTML;
    calculation = Number(numberA) - Number(numberB);
    displayedNumber.innerHTML = calculation;
    numberA = 0;
    numberB = 0;
    shouldNumberBeZero = true;
    typeOfOperation = '';
  }

  if(typeOfOperation === 'multiply'){ 
    numberB = displayedNumber.innerHTML;
    calculation = Number(numberA) * Number(numberB);
    displayedNumber.innerHTML = calculation;
    numberA = 0;
    numberB = 0;
    shouldNumberBeZero = true;
    typeOfOperation = '';
  }
}

function plus() {
  if (typeOfOperation !== '') {
    equals();
    numberA = displayedNumber.innerHTML;
    displayedSign.innerHTML = '+';  
    typeOfOperation = 'plus';
    shouldNumberBeZero = true;
  }
  else {
    numberA = displayedNumber.innerHTML;
    displayedSign.innerHTML = '+';  
    typeOfOperation = 'plus';
    shouldNumberBeZero = true;
  }

}

function minus() {
  if (typeOfOperation !== '') {
    equals();
    numberA = displayedNumber.innerHTML;
    displayedSign.innerHTML = '-';  
    typeOfOperation = 'minus';
    shouldNumberBeZero = true;
  }
  else {
    numberA = displayedNumber.innerHTML;
    displayedSign.innerHTML = '-';  
    typeOfOperation = 'minus';
    shouldNumberBeZero = true;
  }
}

function multiply() {
  if (typeOfOperation !== '') {
    equals();
    numberA = displayedNumber.innerHTML;
    displayedSign.innerHTML = '×';  
    typeOfOperation = 'multiply';
    shouldNumberBeZero = true;
  }
  else {
    numberA = displayedNumber.innerHTML;
    displayedSign.innerHTML = '×';  
    typeOfOperation = 'multiply';
    shouldNumberBeZero = true;
  }
}
