let input = document.querySelector("input");
let button = document.querySelector("button");
let Message = document.querySelector("p");
const romanObject = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

button.addEventListener("click", () => {
  inputToRoman(input.value);
  input.value = "";
});

function inputToRoman(num) {
  let number = parseInt(num);

  if (num.trim().length == 0) {
    Message.innerHTML = "Invalid Input";
   
    return false;
  }
  if (number > 4999 || number < 1) {
    Message.innerHTML = "Input Out Of Range";
    
    return false;
  }
  Message.innerHTML = "";

  let result = "";
  let romanValues = Object.keys(romanObject);
  romanValues.forEach((key) => {
    while (romanObject[key] <= number) {
      number -= romanObject[key];
      result += key;
    }
  });
  Message.innerHTML =result;
}