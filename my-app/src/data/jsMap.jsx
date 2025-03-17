import { createContext } from "react"

const jsMap = [
    { category : "Fundamentals", concepts: ["Variables", "Data Types", "Operators", "Type Conversion", "Strict Mode"] },
    { category : "Control Flow", concepts: ["If-Else", "Switch", "Loops", "Break & Continue", "Ternary Operator"] },
    { category : "Functions", concepts: ["Function Declaration", "Arrow Functions", "Closures", "Higher-Order Functions", "Default Parameters", "Rest & Spread Operators"] },
    { category : "Objects & Classes", concepts: ["Objects", "Prototypes", "Classes", "Inheritance", "Getters & Setters", "Object Destructuring"] },
    { category : "Arrays", concepts: ["push()", "pop()", "map()", "filter()", "reduce()", "find()", "forEach()", "some()", "every()", "includes()", "slice()", "splice()"] },
    { category : "Promises & Async", concepts: ["Promises", "async/await", "fetch()", "then()", "catch()", "finally()"] },
    { category : "DOM Manipulation", concepts: ["document.querySelector()", "getElementById()", "createElement()", "appendChild()", "innerHTML", "classList", "addEventListener()"] },
    { category : "Events", concepts: ["click", "mouseover", "keydown", "keyup", "change", "input", "submit", "preventDefault()"] },
    { category : "Error Handling", concepts: ["try...catch", "finally", "throw", "Custom Errors"] },
    { category : "Modules & Import/Export", concepts: ["ES6 Modules", "import", "export", "default export", "named export"] },
    { category : "Date & Time", concepts: ["Date()", "getFullYear()", "getMonth()", "getDate()", "getHours()", "getMinutes()", "getSeconds()", "setTimeout()", "setInterval()"] },
    { category : "Storage & Cookies", concepts: ["localStorage", "sessionStorage", "cookies", "JSON.stringify()", "JSON.parse()"] },
    { category : "ES6+ Features", concepts: ["Destructuring", "Spread Operator", "Rest Operator", "Optional Chaining", "Nullish Coalescing", "Template Literals", "Symbol"] },
    { category : "Web APIs", concepts: ["Fetch API", "Geolocation API", "Clipboard API", "Canvas API", "WebSockets"] },
    { category : "Regular Expressions", concepts: ["RegExp", "test()", "match()", "replace()", "exec()"] },
    { category : "Math & Numbers", concepts: ["Math.random()", "Math.floor()", "Math.ceil()", "Math.round()", "parseInt()", "parseFloat()", "Number.isNaN()"] }
  ]
  
export const JsMapData  = createContext()

export function JsMapDataProvider({children}){
  return(
    <JsMapData.Provider value={{jsMap}}>
      {children}
    </JsMapData.Provider>
  )
}

// json format

//   [
//     { "category": "Fundamentals", "concepts": ["Variables", "Data Types", "Operators", "Type Conversion", "Strict Mode"] },
//     { "category": "Control Flow", "concepts": ["If-Else", "Switch", "Loops", "Break & Continue", "Ternary Operator"] },
//     { "category": "Functions", "concepts": ["Function Declaration", "Arrow Functions", "Closures", "Higher-Order Functions", "Default Parameters", "Rest & Spread Operators"] },
//     { "category": "Objects & Classes", "concepts": ["Objects", "Prototypes", "Classes", "Inheritance", "Getters & Setters", "Object Destructuring"] },
//     { "category": "Arrays", "concepts": ["push()", "pop()", "map()", "filter()", "reduce()", "find()", "forEach()", "some()", "every()", "includes()", "slice()", "splice()"] },
//     { "category": "Promises & Async", "concepts": ["Promises", "async/await", "fetch()", "then()", "catch()", "finally()"] },
//     { "category": "DOM Manipulation", "concepts": ["document.querySelector()", "getElementById()", "createElement()", "appendChild()", "innerHTML", "classList", "addEventListener()"] },
//     { "category": "Events", "concepts": ["click", "mouseover", "keydown", "keyup", "change", "input", "submit", "preventDefault()"] },
//     { "category": "Error Handling", "concepts": ["try...catch", "finally", "throw", "Custom Errors"] },
//     { "category": "Modules & Import/Export", "concepts": ["ES6 Modules", "import", "export", "default export", "named export"] },
//     { "category": "Date & Time", "concepts": ["Date()", "getFullYear()", "getMonth()", "getDate()", "getHours()", "getMinutes()", "getSeconds()", "setTimeout()", "setInterval()"] },
//     { "category": "Storage & Cookies", "concepts": ["localStorage", "sessionStorage", "cookies", "JSON.stringify()", "JSON.parse()"] },
//     { "category": "ES6+ Features", "concepts": ["Destructuring", "Spread Operator", "Rest Operator", "Optional Chaining", "Nullish Coalescing", "Template Literals", "Symbol"] },
//     { "category": "Web APIs", "concepts": ["Fetch API", "Geolocation API", "Clipboard API", "Canvas API", "WebSockets"] },
//     { "category": "Regular Expressions", "concepts": ["RegExp", "test()", "match()", "replace()", "exec()"] },
//     { "category": "Math & Numbers", "concepts": ["Math.random()", "Math.floor()", "Math.ceil()", "Math.round()", "parseInt()", "parseFloat()", "Number.isNaN()"] }
//   ]
  