// PROBLEM 1
function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

const reverseStr = reverseString("hello world");
console.log("reverseStr: " + reverseStr);

// ----------------------------------------------------

// PROBLEM 2
function sumOfPositiveNum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      continue;
    }
    sum += arr[i];
  }

  return sum;
}

const sum = sumOfPositiveNum([2, -5, 10, -3, 7]);
console.log("sumOfPositiveNUm: " + sum);

// --------------------------------------------------

// PROBLEM 3
function findFrequentElement(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
      continue;
    }

    map.set(arr[i], map.get(arr[i]) + 1);
  }

  let maxContent = null;
  let frequentElement = null;

  map.forEach((value, key) => {
    if (!(frequentElement && maxContent)) {
      frequentElement = key;
      maxContent = value;
      return;
    }

    if (value > maxContent) {
      maxContent = value;
      frequentElement = key;
    }
  });

  return frequentElement;
}

const frequentElement = findFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
console.log("frequentElement: " + frequentElement);

// ------------------------------------------------------------------------

// PROBLEM 4
function addUpToTarget(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === target) {
        return [i, k];
      }
    }
  }
}

const arrOfIndices = addUpToTarget([2, 3, 6, 8, 11, 15], 9);
console.log("arrOfIndices: " + arrOfIndices);

// --------------------------------------------------------------------------

// PROBLEM 5
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  }
  if (operator === "-") {
    return num1 - num2;
  }
  if (operator === "*") {
    return num1 * num2;
  }
  if (operator === "/") {
    if (num2 === 0) {
      return "Error: cannot divide zero";
    }
    return num1 / num2;
  }
}

const calcOutput = calculator(5, 2, "/");
console.log("calcOutput: " + calcOutput);

// ----------------------------------------------

//  PROBLEM 6
function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_-+=<>?/{}~";

  const allChar =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChar.length);
    password += allChar[randomIndex];
  }

  return password;
}

const password = generateRandomPassword(6);
console.log("password: " + password);

// -------------------------------------------------------------
// PROBLEM 7
function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentNumeral = roman[i];
    const currentValue = romanNumerals[currentNumeral];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

const romanNumeral = "XXI";
const intValue = romanToInt(romanNumeral);
console.log("Integer value:", intValue);

// PROBLEM 8
function findSecondSmallest(arr) {
  return arr.sort((a, b) => a - b)[1];
}

const secondSmallest = findSecondSmallest([5, 3, 2, 1, 7]);
console.log("secondSmallest: " + secondSmallest);
