let numberN = Number(prompt("Please enter the first number:"));
while (Number.isInteger(numberN) === false) {
    numberN = Number(prompt("It is not a correct value, please enter an integer number:"));
}

let numberM = Number(prompt("Please enter the last number (the number must be greater than the previous one):"));
while (Number.isInteger(numberM) === false) {
    numberM = Number(prompt("It is not a correct value, please enter an integer number:"));
}

let skipEvenNumbers = confirm("Should to skip even numbers?") ? true : false;
console.log(`Should to skip even numbers: ${skipEvenNumbers}`);

for (let i = numberN; i <= numberM; i++) {
    
}


// let sum = 0;
// if (skipEvenNumbers) {
//     for (let i = numberN; i <= numberM; i++) { 
//         if (i % 2){
//            console.log(i);
//            sum += i;
//         }
//     }
// } else {
//     for (let i = numberN; i <= numberM; i++) { 
//             console.log(i);
//             sum += i;
//     }
// }
    
// console.log(sum);
