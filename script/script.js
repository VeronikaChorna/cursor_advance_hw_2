let numberN = Number(prompt("Please enter the first number:"));
while (Number.isInteger(numberN) === false) {
    numberN = Number(prompt("It is not a correct value, please enter an integer number:"));
    console.log(numberN);
}

let numberM = Number(prompt("Please enter the last number:"));
while (Number.isInteger(numberM) === false) {
    numberM = Number(prompt("It is not a correct value, please enter an integer number:"));
    console.log(numberM);
}


for (let i = numberN; i <= numberM; i++) { 
    console.log(i);
  }




// if (Number.isInteger(numberN) === false) {
//     numberN = Number(prompt("It is not a correct value, please enter an integer number:"))
// } else {
//     numberN = Number(prompt("It is not a correct value, please enter an integer number:"))
// } 

// const numberM = Number(prompt("Please enter last number:"));


// const isNumberNInreger = Number.isInteger(numberN);
// const isNumberMInreger = Number.isInteger(numberM);
// console.log(isNumberNInreger);
// console.log(isNumberMInreger);


// if (Number.isInteger(numberM) === false) {
//     Number(prompt("Number is not correct, please enter correct number:"))
// };