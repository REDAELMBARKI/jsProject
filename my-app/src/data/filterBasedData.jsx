import React,{ useReducer ,createContext } from "react";

const dataArray = [
    {
      id: 1,
      category: "Fundamentals",
      concept: "Variables",
      exercise: "Write a function to reverse a string.",
      hint: "Use the split(), reverse(), and join() methods.",
      solution: `function reverseString(str) {
    return str.split('').reverse().join('');
  }`
    },
    {
      id: 2,
      category: "Fundamentals",
      concept: "Variables",
      exercise: "Check if a number is even or odd.",
      hint: "Use the modulus (%) operator.",
      solution: `function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
  }`
    },
    {
      id: 3,
      category: "Fundamentals",
      concept: "Variables",
      exercise: "Swap the values of two variables without using a third variable.",
      hint: "Use arithmetic operations or array destructuring.",
      solution: `function swap(a, b) {
    a = a + b; // a becomes sum of a and b
    b = a - b; // b becomes original value of a
    a = a - b; // a becomes original value of b
    return [a, b];
  }`
    },
    {
      id: 4,
      category: "Fundamentals",
      concept: "Variables",
      exercise: "Find the factorial of a number.",
      hint: "Use recursion or a loop.",
      solution: `function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
  }`
    },
    {
      id: 5,
      category: "Fundamentals",
      concept: "Variables",
      exercise: "Check if a number is prime.",
      hint: "Loop from 2 to sqrt(n) and check divisibility.",
      solution: `function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }`
    },
    {
      id: 6,
      category: "Control Flow",
      concept: "If-Else",
      exercise: "Find the largest number in an array.",
      hint: "Use the Math.max() function with the spread operator.",
      solution: `function findMax(arr) {
    return Math.max(...arr);
  }`
    },
    {
      id: 7,
      category: "Control Flow",
      concept: "If-Else",
      exercise: "Check if a string is a palindrome.",
      hint: "Compare the string with its reversed version.",
      solution: `function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }`
    },
    {
      id: 8,
      category: "Control Flow",
      concept: "If-Else",
      exercise: "Determine the grade based on a score.",
      hint: "Use if-else statements to assign grades.",
      solution: `function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }`
    },
    {
      id: 9,
      category: "Control Flow",
      concept: "If-Else",
      exercise: "Check if a year is a leap year.",
      hint: "A year is a leap year if divisible by 4, but not 100, unless also divisible by 400.",
      solution: `function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    }
    return false;
  }`
    },
    {
      id: 10,
      category: "Control Flow",
      concept: "If-Else",
      exercise: "Determine the season based on a month number.",
      hint: "Use if-else statements to map months to seasons.",
      solution: `function getSeason(month) {
    if (month >= 3 && month <= 5) return 'Spring';
    if (month >= 6 && month <= 8) return 'Summer';
    if (month >= 9 && month <= 11) return 'Fall';
    return 'Winter';
  }`
    },
    {
      id: 11,
      category: "Functions",
      concept: "Function Declaration",
      exercise: "Convert the first letter of a string to uppercase.",
      hint: "Use charAt() and slice().",
      solution: `function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }`
    },
    {
      id: 12,
      category: "Functions",
      concept: "Function Declaration",
      exercise: "Remove duplicates from an array.",
      hint: "Use the Set object.",
      solution: `function removeDuplicates(arr) {
    return [...new Set(arr)];
  }`
    },
    {
      id: 13,
      category: "Functions",
      concept: "Function Declaration",
      exercise: "Find the sum of all numbers in an array.",
      hint: "Use the reduce() method.",
      solution: `function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }`
    },
    {
      id: 14,
      category: "Functions",
      concept: "Function Declaration",
      exercise: "Check if a string contains another string.",
      hint: "Use the includes() method.",
      solution: `function containsSubstring(str, substring) {
    return str.includes(substring);
  }`
    },
    {
      id: 15,
      category: "Functions",
      concept: "Function Declaration",
      exercise: "Convert a string to an array of words.",
      hint: "Use the split() method.",
      solution: `function stringToArray(str) {
    return str.split(' ');
  }`
    },
    {
      id: 16,
      category: "Arrays",
      concept: "Array Methods",
      exercise: "Find the longest word in a sentence.",
      hint: "Use split() to create an array of words and reduce().",
      solution: `function longestWord(sentence) {
    return sentence.split(' ').reduce((longest, word) =>
      word.length > longest.length ? word : longest, '');
  }`
    },
    {
      id: 17,
      category: "Arrays",
      concept: "Array Methods",
      exercise: "Sort an array of numbers in ascending order.",
      hint: "Use the sort() method with a comparison function.",
      solution: `function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }`
    },
    {
      id: 18,
      category: "Arrays",
      concept: "Array Methods",
      exercise: "Find the index of a number in an array.",
      hint: "Use the indexOf() method.",
      solution: `function findIndex(arr, num) {
    return arr.indexOf(num);
  }`
    },
    {
      id: 19,
      category: "Objects & Classes",
      concept: "Objects",
      exercise: "Create an object representing a book with title, author, and year.",
      hint: "Use object literals.",
      solution: `const book = {
    title: '1984',
    author: 'George Orwell',
    year: 1949
  };`
    },
    {
      id: 20,
      category: "Objects & Classes",
      concept: "Classes",
      exercise: "Create a class for a Rectangle with methods for area and perimeter.",
      hint: "Use the class syntax and include methods.",
      solution: `class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    area() {
      return this.length * this.width;
    }
  
    perimeter() {
      return 2 * (this.length + this.width);
    }
  }`
    }
  ];
  
  let initState ={
    data:[]
  }

function reducer(state,action){
  const datawanted = dataArray.filter(data => data.concept.toLowerCase() === action.payload.toLowerCase()) 
  return{
       data:datawanted
    }

  }
export const FilteredData = createContext(null)

export const FilteredDataProvider = ({children}) => {
   const [state,dispatch] = useReducer(reducer,initState)

   return(
    <FilteredData.Provider value={{dispatch,data:state.data}}>
         {children}
    </FilteredData.Provider>
   )
}