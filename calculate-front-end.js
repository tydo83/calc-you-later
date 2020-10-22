//without stretch goals

const calculateFront = require('./calculate-back-end');

const num1 = process.argv[2];
const num2 = process.argv[4];
const operator = process.argv[3];
const result = calculateFront(num1, num2, operator);

console.log(result);

// Stretch Goals
// const inputs = [].slice(0);
// for(i = 2; i < process.argv.length; i++) {
//         inputs.push(process.argv[i]);
//     }










