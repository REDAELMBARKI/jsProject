import { createContext } from "react";
const dataArray = [
    {
      id: 1,
      exercise: "Write a function to reverse a string.",
      hint: "Use the split(), reverse(), and join() methods.",
      solution: `function reverseString(str) {
    return str.split('').reverse().join('');
  }`,
    },
    {
      id: 2,
      exercise: "Check if a number is even or odd.",
      hint: "Use the modulus (%) operator.",
      solution: `function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }`,
    },
    {
      id: 3,
      exercise: "Find the largest number in an array.",
      hint: "Use the Math.max() function with the spread operator.",
      solution: `function findMax(arr) {
    return Math.max(...arr);
  }`,
    },
    {
      id: 4,
      exercise: "Write a function that returns the factorial of a number.",
      hint: "Use recursion or a loop.",
      solution: `function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
  }`,
    },
    {
      id: 5,
      exercise: "Convert the first letter of a string to uppercase.",
      hint: "Use charAt() and slice().",
      solution: `function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }`,
    },
    {
      id: 6,
      exercise: "Remove duplicates from an array.",
      hint: "Use the Set object.",
      solution: `function removeDuplicates(arr) {
    return [...new Set(arr)];
  }`,
    },
    {
      id: 7,
      exercise: "Check if a string is a palindrome.",
      hint: "Compare the string with its reversed version.",
      solution: `function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }`,
    },
    {
      id: 8,
      exercise: "Find the sum of all numbers in an array.",
      hint: "Use the reduce() method.",
      solution: `function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }`,
    },
    {
      id: 9,
      exercise: "Write a function to check if a number is prime.",
      hint: "Loop from 2 to sqrt(n) and check divisibility.",
      solution: `function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }`,
    },
    {
      id: 10,
      exercise: "Find the longest word in a sentence.",
      hint: "Use split() to create an array of words and reduce().",
      solution: `function longestWord(sentence) {
    return sentence.split(' ').reduce((longest, word) =>
      word.length > longest.length ? word : longest, '');
  }`,
    },
  ];
  
export const dataContext = createContext({data:dataArray});