/******************
 * YOUR CODE HERE *
 ******************/

//  Takes in two numbers and a string representing an operation.
// function calculate(num1: number, num2: number, operation: string): number
function calculate(num1, num2, operation) {
  num1 = Number(num1);
  num2 = Number(num2);

  //The variables are not at all necessary, but they do make the code more readable.
  const isAddition = operation === '+' || operation === 'plus' || operation === 'added to';
  const isSubtraction = operation === '-' || operation === 'minus';
  const isMultiplication = operation.toLowerCase() === 'x' || operation === 'times' || operation === 'multiplied by';
  const isDivision = operation === '/' || operation === 'divided by';
  const isModulus = operation === '%' || operation === 'modulus' || operation === 'mod';

  // We don't need the variables above.
  // But then the boolean checks inside these parens get VERY long.
  // Up to you!
  if (isAddition) {
    return num1 + num2;
  } else if (isSubtraction) {
    return num1 - num2;
  } else if (isMultiplication) {
    return num1 * num2;
  } else if (isDivision) {
    return num1 / num2;
  } else if (isModulus) {
    return num1 % num2;
  } else {
    return `Sorry, that's not a mathematical operation!`
  }

  // Alternate no-intermediate-variables version.
  if (operation === '+' || operation === 'plus' || operation === 'added to') {
    return num1 + num2;
  } else if (operation === '-' || operation === 'minus') {
    return num1 - num2;
  } else if (operation.toLowerCase() === 'x' || operation === 'times' || operation === 'multiplied by') {
    return num1 * num2;
  } else if (operation === '/' || operation === 'divided by') {
    return num1 / num2;
  } else if (operation === '%' || operation === 'modulus' || operation === 'mod') {
    return num1 % num2;
  } else {
    return `Sorry, that's not a mathematical operation!`
  }

  /* Or, instead of either of the if/else chains above, we can use
   * a switch, preferably with fall-through to save code.
   * The switch's simplicity means we don't have to choose between
   * saving our boolean checks into variables or having long code.
 */

  // switch(operation.toLowerCase()) {
  //   case 'added to':
  //   case 'plus':
  //   case '+':
  //     return num1 + num2;
  // 
  //   case '-':
  //   case 'minus':
  //   case 'subtracted from':
  //     return num1 - num2;
  // 
  //   case 'x':
  //   case 'times':
  //   case 'multiplied by':
  //     return num1 * num2;
  // 
  //   case '/':
  //   case 'divided by':
  //     return num1 / num2;
  // 
  //   case '%':
  //   case 'mod':
  //   case 'modulus':
  //     return num1 % num2;
  // 
  //   default:
  //     return `Sorry, that's not a mathematical operation!`;
  // }
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}

module.exports = calculate;
