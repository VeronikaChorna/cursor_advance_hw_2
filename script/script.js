let numberN = Number(prompt("Please enter the first number:"));
while (Number.isInteger(numberN) === false) {
    numberN = Number(prompt("It is not a correct value, please enter an integer number:"));
    console.log(numberN);
}

let numberM = Number(prompt("Please enter the last number (the number must be greater than the previous one):"));
while (Number.isInteger(numberM) === false) {
    numberM = Number(prompt("It is not a correct value, please enter an integer number:"));
    console.log(numberM);
}

let skipEvenNumbers = confirm("Should to skip even numbers?") ? true : false;
console.log(skipEvenNumbers);

if (skipEvenNumbers === true) {
    for (let i = numberN; i <= numberM; i++) { 
        if (i % 2 !== 0){
           console.log(i);
        } 
    } 
    } else {
        for (let i = numberN; i <= numberM; i++)
        console.log(i);
    }
    


// for (let i = numberN; i <= numberM; i++) { 
//     if (i % 2 !== 0){
//        console.log(i);
//     }
//   }