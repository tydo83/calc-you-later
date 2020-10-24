//without stretch goals
const calculateFront = require('./calculate-back-end');
// // const num1 = process.argv[2];
// // const num2 = process.argv[4];
// // const operator = process.argv[3];
// const result = calculateFront(num1, num2, operator);
// console.log(result);

// Stretch Goals
// making an array from user input
// const inputs = [];
// for(i = 2; i < process.argv.length; i++) {
//         inputs.push(process.argv[i]);
//     }

// same result as above
const inputs = process.argv.slice(2);
let firstIndex = 0;
let checker = true;
for(const element of inputs) {
    if(Number(element) == element && checker == true) {
        firstIndex = inputs.indexOf(element);
        checker = false;
    }
}
let whatWeNeed = inputs.slice(firstIndex);
const num1 = whatWeNeed[0];
const num2 = whatWeNeed[whatWeNeed.length - 1];
let operator;
    if(whatWeNeed.length > 3) {
    operator = whatWeNeed[1] + ' ' + whatWeNeed[2];
    }
    else {
    operator = whatWeNeed[1]
    }
const result = calculateFront(num1, num2, operator);
console.log(result);







