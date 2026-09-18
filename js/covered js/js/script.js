// ==========================================================
// GREENTECH JAVASCRIPT LEARNING SYSTEM
// ==========================================================


// ==========================================================
// DAY 1 - JAVASCRIPT BASIC TO CORE
// ==========================================================

const topics = {

    // ------------------------------------------------------
    // VARIABLES
    // ------------------------------------------------------

    variables: {

        title: "Variables",

        definition:
            "Variables are containers used to store data in JavaScript.",

        syntax:
`let variableName = value;

const variableName = value;`,

        code:
`let studentName = "Samjana";

const age = 25;

console.log(studentName);
console.log(age);`,

        output:
`Samjana
25`

    },


    // ------------------------------------------------------
    // VAR LET CONST
    // ------------------------------------------------------

    letconst: {

        title: "var / let / const",

        definition:
            "var, let and const are keywords used to declare variables. let is used when the value can change, while const is used when the variable should not be reassigned.",

        syntax:
`var name = value;

let name = value;

const name = value;`,

        code:
`var city = "Chennai";

let age = 25;

const course = "JavaScript";

console.log(city);
console.log(age);
console.log(course);`,

        output:
`Chennai
25
JavaScript`

    },


    // ------------------------------------------------------
    // DATA TYPES
    // ------------------------------------------------------

    datatypes: {

        title: "Data Types",

        definition:
            "Data types describe the type of value stored in a JavaScript variable.",

        syntax:
`let name = "Samjana";
let age = 25;
let active = true;`,

        code:
`const name = "Samjana";
const age = 25;
const active = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof active);`,

        output:
`string
number
boolean`

    },


    // ------------------------------------------------------
    // PRIMITIVE
    // ------------------------------------------------------

    primitive: {

        title: "Primitive Data Types",

        definition:
            "Primitive values are simple values such as string, number, boolean, undefined, null, bigint and symbol.",

        syntax:
`let name = "Samjana";
let age = 25;
let active = true;`,

        code:
`const name = "Samjana";
const age = 25;
const active = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof active);`,

        output:
`string
number
boolean`

    },


    // ------------------------------------------------------
    // NON PRIMITIVE
    // ------------------------------------------------------

    nonprimitive: {

        title: "Non-Primitive Data Types",

        definition:
            "Non-primitive values can contain multiple values or structured data. Objects and arrays are common examples.",

        syntax:
`const array = [];

const object = {};`,

        code:
`const courses = [
    "HTML",
    "CSS",
    "JavaScript"
];

const student = {
    name: "Samjana",
    age: 25
};

console.log(courses);
console.log(student);`,

        output:
`["HTML", "CSS", "JavaScript"]
{name: "Samjana", age: 25}`

    },


    // ------------------------------------------------------
    // OPERATORS
    // ------------------------------------------------------

    operators: {

        title: "Operators",

        definition:
            "Operators are symbols used to perform calculations, assignments and comparisons.",

        syntax:
`a + b
a - b
a * b
a / b
a > b
a === b`,

        code:
`const mark1 = 80;
const mark2 = 90;

const total = mark1 + mark2;

console.log(total);

console.log(mark2 > mark1);`,

        output:
`170
true`

    },


    // ------------------------------------------------------
    // EXPRESSIONS
    // ------------------------------------------------------

    expressions: {

        title: "Expressions",

        definition:
            "An expression is JavaScript code that produces a value.",

        syntax:
`value + value

value > value`,

        code:
`const price = 100;
const quantity = 3;

const total = price * quantity;

console.log(total);`,

        output:
            "300"

    },


    // ------------------------------------------------------
    // STATEMENTS
    // ------------------------------------------------------

    statements: {

        title: "Statements",

        definition:
            "A statement is an instruction that JavaScript executes.",

        syntax:
`const name = "Samjana";

console.log(name);`,

        code:
`const name = "Samjana";

console.log(name);

console.log("Learning JavaScript");`,

        output:
`Samjana
Learning JavaScript`

    },


    // ------------------------------------------------------
    // TYPE CONVERSION
    // ------------------------------------------------------

    conversion: {

        title: "Type Conversion",

        definition:
            "Type conversion changes a value from one data type to another.",

        syntax:
`Number(value);

String(value);

Boolean(value);`,

        code:
`const value = "100";

const numberValue = Number(value);

console.log(numberValue);
console.log(typeof numberValue);`,

        output:
`100
number`

    },


    // ------------------------------------------------------
    // TEMPLATE LITERALS
    // ------------------------------------------------------

    template: {

        title: "Template Literals",

        definition:
            "Template literals allow us to create strings using backticks and insert variables using ${}.",

        syntax:
"`Hello ${name}`",

        code:
`const name = "Samjana";
const course = "JavaScript";

const message =
    \`Hello \${name}, you are learning \${course}\`;

console.log(message);`,

        output:
            "Hello Samjana, you are learning JavaScript"

    },


    // ------------------------------------------------------
    // TRUTHY FALSY
    // ------------------------------------------------------

    truthy: {

        title: "Truthy / Falsy",

        definition:
            "Truthy values behave like true in a condition. Falsy values behave like false.",

        syntax:
`if (value) {
    // truthy
}`,

        code:
`const name = "Samjana";

if (name) {
    console.log("Name exists");
}

const empty = "";

if (!empty) {
    console.log("Empty value");
}`,

        output:
`Name exists
Empty value`

    },


    // ------------------------------------------------------
    // SCOPE
    // ------------------------------------------------------

    scope: {

        title: "Scope",

        definition:
            "Scope determines where a variable can be accessed in JavaScript.",

        syntax:
`{
    let value = 10;
}`,

        code:
`const course = "JavaScript";

function showCourse() {

    const topic = "Functions";

    console.log(course);
    console.log(topic);

}

showCourse();`,

        output:
`JavaScript
Functions`

    },


    // ======================================================
    // DAY 2
    // ======================================================


    if: {

        title: "if Condition",

        definition:
            "The if statement executes code when a condition is true.",

        syntax:
`if (condition) {
    // code
}`,

        code:
`const mark = 90;

if (mark >= 50) {
    console.log("Passed");
}`,

        output:
            "Passed"

    },


    else: {

        title: "else",

        definition:
            "else executes when the if condition is false.",

        syntax:
`if (condition) {

} else {

}`,

        code:
`const mark = 40;

if (mark >= 50) {

    console.log("Passed");

} else {

    console.log("Failed");

}`,

        output:
            "Failed"

    },


    elseif: {

        title: "else if",

        definition:
            "else if allows us to check multiple conditions.",

        syntax:
`if (condition) {

} else if (condition) {

} else {

}`,

        code:
`const mark = 75;

if (mark >= 90) {

    console.log("A Grade");

} else if (mark >= 60) {

    console.log("B Grade");

} else {

    console.log("C Grade");

}`,

        output:
            "B Grade"

    },


    ternary: {

        title: "Ternary Operator",

        definition:
            "The ternary operator is a short way to write a simple if-else condition.",

        syntax:
`condition ? valueIfTrue : valueIfFalse;`,

        code:
`const mark = 80;

const result =
    mark >= 50 ? "Passed" : "Failed";

console.log(result);`,

        output:
            "Passed"

    },


    for: {

        title: "for Loop",

        definition:
            "A for loop repeats code while a condition remains true.",

        syntax:
`for (initialization; condition; increment) {
    // code
}`,

        code:
`for (let i = 1; i <= 5; i++) {

    console.log(i);

}`,

        output:
`1
2
3
4
5`

    },


    while: {

        title: "while Loop",

        definition:
            "A while loop executes code as long as the condition is true.",

        syntax:
`while (condition) {
    // code
}`,

        code:
`let i = 1;

while (i <= 5) {

    console.log(i);

    i++;

}`,

        output:
`1
2
3
4
5`

    },


    dowhile: {

        title: "do while Loop",

        definition:
            "A do while loop executes the code at least once before checking the condition.",

        syntax:
`do {
    // code
} while (condition);`,

        code:
`let i = 1;

do {

    console.log(i);

    i++;

} while (i <= 3);`,

        output:
`1
2
3`

    },


    nested: {

        title: "Nested Loop",

        definition:
            "A nested loop is a loop inside another loop.",

        syntax:
`for (...) {

    for (...) {

    }

}`,

        code:
`for (let i = 1; i <= 2; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }

}`,

        output:
`1 1
1 2
1 3
2 1
2 2
2 3`

    },


    break: {

        title: "break",

        definition:
            "break immediately stops a loop.",

        syntax:
`break;`,

        code:
`for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        break;
    }

    console.log(i);

}`,

        output:
`1
2`

    },


    continue: {

        title: "continue",

        definition:
            "continue skips the current iteration and moves to the next iteration.",

        syntax:
`continue;`,

        code:
`for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);

}`,

        output:
`1
2
4
5`

    },


    // ======================================================
    // DAY 3
    // ======================================================


    function: {

        title: "Normal Function",

        definition:
            "A function is a reusable block of code that performs a specific task.",

        syntax:
`function functionName() {
    // code
}`,

        code:
`function greet() {

    return "Hello Samjana";

}

console.log(greet());`,

        output:
            "Hello Samjana"

    },


    parameters: {

        title: "Parameters",

        definition:
            "Parameters are variables written inside a function definition to receive values.",

        syntax:
`function add(a, b) {
    return a + b;
}`,

        code:
`function add(a, b) {

    return a + b;

}

console.log(add(10, 20));`,

        output:
            "30"

    },


    arguments: {

        title: "Arguments",

        definition:
            "Arguments are the actual values passed when calling a function.",

        syntax:
`functionName(value1, value2);`,

        code:
`function greet(name) {

    console.log("Hello", name);

}

greet("Samjana");`,

        output:
            "Hello Samjana"

    },


    return: {

        title: "return",

        definition:
            "return sends a value from a function back to the place where the function was called.",

        syntax:
`function add() {
    return value;
}`,

        code:
`function add(a, b) {

    return a + b;

}

const result = add(10, 20);

console.log(result);`,

        output:
            "30"

    },


    arrow: {

        title: "Arrow Function",

        definition:
            "An arrow function is a shorter syntax for writing functions.",

        syntax:
`const functionName = () => {
    // code
};`,

        code:
`const add = (a, b) => {

    return a + b;

};

console.log(add(10, 20));`,

        output:
            "30"

    },


    callback: {

        title: "Callback Function",

        definition:
            "A callback is a function passed as an argument to another function.",

        syntax:
`function main(callback) {
    callback();
}`,

        code:
`const getUser = (callback) => {

    const user = {
        name: "Samjana",
        age: 25
    };

    callback(user);

};

getUser((user) => {

    console.log(user.name);

});`,

        output:
            "Samjana"

    },


    higherorder: {

        title: "Higher Order Function",

        definition:
            "A higher order function is a function that receives another function as an argument or returns a function.",

        syntax:
`function main(callback) {
    callback();
}`,

        code:
`const calculate = (a, b, operation) => {

    return operation(a, b);

};

const add = (a, b) => a + b;

console.log(
    calculate(10, 20, add)
);`,

        output:
            "30"

    },


    closure: {

        title: "Closure",

        definition:
            "A closure happens when an inner function remembers and accesses variables from its outer function.",

        syntax:
`function outer() {

    let value = 10;

    return function inner() {
        console.log(value);
    };

}`,

        code:
`function createAccount() {

    let balance = 1000;

    return {

        deposit(amount) {

            balance += amount;

        },

        getBalance() {

            return balance;

        }

    };

}

const account = createAccount();

account.deposit(500);

console.log(
    account.getBalance()
);`,

        output:
            "1500"

    },


    hoisting: {

        title: "Hoisting",

        definition:
            "Hoisting is JavaScript's behavior of processing certain declarations before code execution.",

        syntax:
`console.log(value);

var value = 10;`,

        code:
`console.log(value);

var value = 10;`,

        output:
`undefined`

    },


    // ======================================================
    // DAY 4
    // ======================================================


    foreach: {

        title: "forEach()",

        definition:
            "forEach() executes a callback function once for every array element.",

        syntax:
`array.forEach((item) => {
    // code
});`,

        code:
`const students = [
    "Sam",
    "Raj",
    "John"
];

students.forEach((student) => {

    console.log(student);

});`,

        output:
`Sam
Raj
John`

    },


    map: {

        title: "map()",

        definition:
            "map() creates a new array by transforming every element of the original array.",

        syntax:
`const result = array.map((item) => {
    return newValue;
});`,

        code:
`const marks = [50, 60, 70];

const updatedMarks = marks.map((mark) => {

    return mark + 10;

});

console.log(updatedMarks);`,

        output:
            "[60, 70, 80]"

    },


    filter: {

        title: "filter()",

        definition:
            "filter() creates a new array containing elements that satisfy a condition.",

        syntax:
`const result =
    array.filter((item) => condition);`,

        code:
`const marks = [40, 60, 80, 30];

const passed = marks.filter((mark) => {

    return mark >= 50;

});

console.log(passed);`,

        output:
            "[60, 80]"

    },


    find: {

        title: "find()",

        definition:
            "find() returns the first array element that satisfies a condition.",

        syntax:
`array.find((item) => condition);`,

        code:
`const students = [

    {
        name: "Sam",
        mark: 90
    },

    {
        name: "Raj",
        mark: 80
    }

];

const student = students.find((item) => {

    return item.name === "Sam";

});

console.log(student);`,

        output:
            "{ name: 'Sam', mark: 90 }"

    },


    findindex: {

        title: "findIndex()",

        definition:
            "findIndex() returns the index of the first element that satisfies a condition.",

        syntax:
`array.findIndex((item) => condition);`,

        code:
`const marks = [40, 60, 80];

const index = marks.findIndex((mark) => {

    return mark === 60;

});

console.log(index);`,

        output:
            "1"

    },


    some: {

        title: "some()",

        definition:
            "some() checks whether at least one array element satisfies a condition.",

        syntax:
`array.some((item) => condition);`,

        code:
`const marks = [30, 40, 80];

const result = marks.some((mark) => {

    return mark >= 50;

});

console.log(result);`,

        output:
            "true"

    },


    every: {

        title: "every()",

        definition:
            "every() checks whether all array elements satisfy a condition.",

        syntax:
`array.every((item) => condition);`,

        code:
`const marks = [60, 70, 80];

const result = marks.every((mark) => {

    return mark >= 50;

});

console.log(result);`,

        output:
            "true"

    },


    reduce: {

        title: "reduce()",

        definition:
            "reduce() combines array values into a single final value.",

        syntax:
`array.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    },
    initialValue
);`,

        code:
`const marks = [80, 90, 70];

const total = marks.reduce(
    (sum, mark) => {

        return sum + mark;

    },
    0
);

console.log(total);`,

        output:
            "240"

    },


    includes: {

        title: "includes()",

        definition:
            "includes() checks whether an array contains a specific value.",

        syntax:
`array.includes(value);`,

        code:
`const courses = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(
    courses.includes("JavaScript")
);`,

        output:
            "true"

    },


    // ======================================================
    // DAY 5
    // ======================================================


    array: {

        title: "Array",

        definition:
            "An array stores multiple values in a single variable.",

        syntax:
`const arrayName = [
    value1,
    value2
];`,

        code:
`const courses = [

    "HTML",
    "CSS",
    "JavaScript",
    "React"

];

console.log(courses);`,

        output:
            "[HTML, CSS, JavaScript, React]"

    },


    object: {

        title: "Object",

        definition:
            "An object stores information using key-value pairs.",

        syntax:
`const objectName = {

    key: value

};`,

        code:
`const student = {

    name: "Samjana",

    age: 25,

    course: "JavaScript"

};

console.log(student.name);`,

        output:
            "Samjana"

    },


    aoo: {

        title: "Array of Objects",

        definition:
            "An Array of Objects stores multiple objects inside one array and is commonly used for real-world application data.",

        syntax:
`const students = [

    {
        name: "Sam"
    },

    {
        name: "Raj"
    }

];`,

        code:
`const students = [

    {
        name: "Sam",
        mark: 90
    },

    {
        name: "Raj",
        mark: 80
    }

];

console.log(students[0].name);`,

        output:
            "Sam"

    },


    destructuring: {

        title: "Destructuring",

        definition:
            "Destructuring extracts values from arrays or properties from objects into variables.",

        syntax:
`const { name, age } = student;

const [first, second] = array;`,

        code:
`const student = {

    name: "Samjana",

    age: 25

};

const { name, age } = student;

console.log(name);
console.log(age);`,

        output:
`Samjana
25`

    },


    spread: {

        title: "Spread Operator",

        definition:
            "The spread operator (...) expands elements of an array or properties of an object.",

        syntax:
`const newArray = [...oldArray];`,

        code:
`const first = [1, 2, 3];

const second = [4, 5, 6];

const result = [
    ...first,
    ...second
];

console.log(result);`,

        output:
            "[1, 2, 3, 4, 5, 6]"

    },


    rest: {

        title: "Rest Operator",

        definition:
            "The rest operator collects multiple values into a single array.",

        syntax:
`function add(...numbers) {

}`,

        code:
`const add = (...numbers) => {

    return numbers.reduce(
        (sum, value) => sum + value,
        0
    );

};

console.log(add(10, 20, 30));`,

        output:
            "60"

    },


    // ======================================================
    // DAY 6
    // ======================================================


    objectkeys: {

        title: "Object.keys()",

        definition:
            "Object.keys() returns an array containing all enumerable property names of an object.",

        syntax:
`Object.keys(object);`,

        code:
`const student = {

    name: "Samjana",

    age: 25,

    course: "JavaScript"

};

console.log(
    Object.keys(student)
);`,

        output:
            "[name, age, course]"

    },


    objectvalues: {

        title: "Object.values()",

        definition:
            "Object.values() returns an array containing all enumerable property values of an object.",

        syntax:
`Object.values(object);`,

        code:
`const student = {

    name: "Samjana",

    age: 25

};

console.log(
    Object.values(student)
);`,

        output:
            "[Samjana, 25]"

    },


    objectentries: {

        title: "Object.entries()",

        definition:
            "Object.entries() returns an array containing key-value pairs.",

        syntax:
`Object.entries(object);`,

        code:
`const student = {

    name: "Samjana",

    age: 25

};

console.log(
    Object.entries(student)
);`,

        output:
`[
    ["name", "Samjana"],
    ["age", 25]
]`

    },


    objectassign: {

        title: "Object.assign()",

        definition:
            "Object.assign() copies properties from one or more objects into a target object.",

        syntax:
`Object.assign(target, source);`,

        code:
`const student = {
    name: "Samjana"
};

const details = {
    age: 25
};

const result = Object.assign(
    {},
    student,
    details
);

console.log(result);`,

        output:
            "{ name: 'Samjana', age: 25 }"

    },


    hasown: {

        title: "hasOwnProperty()",

        definition:
            "hasOwnProperty() checks whether an object directly contains a specific property.",

        syntax:
`object.hasOwnProperty("property");`,

        code:
`const student = {

    name: "Samjana",

    age: 25

};

console.log(
    student.hasOwnProperty("name")
);

console.log(
    student.hasOwnProperty("mark")
);`,

        output:
`true
false`

    },


    optional: {

        title: "Optional Chaining",

        definition:
            "Optional chaining (?.) safely accesses nested properties without causing an error when a value is null or undefined.",

        syntax:
`object?.property?.property;`,

        code:
`const student = {

    name: "Samjana",

    address: {
        city: "Chennai"
    }

};

console.log(
    student.address?.city
);

console.log(
    student.contact?.phone
);`,

        output:
`Chennai
undefined`

    },


    // ======================================================
    // DAY 7
    // ======================================================


    sync: {

        title: "Synchronous",

        definition:
            "Synchronous JavaScript executes code one statement at a time in order.",

        syntax:
`console.log("A");

console.log("B");`,

        code:
`console.log("First");

console.log("Second");

console.log("Third");`,

        output:
`First
Second
Third`

    },


    asyncprocess: {

        title: "Asynchronous",

        definition:
            "Asynchronous JavaScript allows some operations to complete later without blocking the rest of the program.",

        syntax:
`setTimeout(() => {

    // later

}, 1000);`,

        code:
`console.log("Start");

setTimeout(() => {

    console.log("Async task");

}, 1000);

console.log("End");`,

        output:
`Start
End
Async task`

    },


    callstack: {

        title: "Call Stack",

        definition:
            "The call stack keeps track of functions that are currently being executed.",

        syntax:
`function one() {

    two();

}

function two() {

    console.log("Running");

}

one();`,

        code:
`function first() {

    second();

}

function second() {

    console.log("Second function");

}

first();`,

        output:
            "Second function"

    },


    promise: {

        title: "Promise",

        definition:
            "A Promise represents the eventual completion or failure of an asynchronous operation.",

        syntax:
`const promise = new Promise(
    (resolve, reject) => {

});`,

        code:
`const promise = new Promise(
    (resolve) => {

        resolve("Data received");

    }
);

promise.then((result) => {

    console.log(result);

});`,

        output:
            "Data received"

    },


    resolve: {

        title: "resolve()",

        definition:
            "resolve() marks a Promise as successfully completed and sends a result value.",

        syntax:
`resolve(value);`,

        code:
`const promise = new Promise(
    (resolve) => {

        resolve("Success");

    }
);

promise.then((result) => {

    console.log(result);

});`,

        output:
            "Success"

    },


    reject: {

        title: "reject()",

        definition:
            "reject() marks a Promise as failed and sends an error value.",

        syntax:
`reject(error);`,

        code:
`const promise = new Promise(
    (resolve, reject) => {

        reject("Failed");

    }
);

promise.catch((error) => {

    console.log(error);

});`,

        output:
            "Failed"

    },


    then: {

        title: "then()",

        definition:
            "then() handles the successful result of a Promise.",

        syntax:
`promise.then((result) => {

});`,

        code:
`Promise.resolve("Success")

    .then((result) => {

        console.log(result);

    });`,

        output:
            "Success"

    },


    catch: {

        title: "catch()",

        definition:
            "catch() handles errors or rejected Promises.",

        syntax:
`promise.catch((error) => {

});`,

        code:
`Promise.reject("Error")

    .catch((error) => {

        console.log(error);

    });`,

        output:
            "Error"

    },


    finally: {

        title: "finally()",

        definition:
            "finally() executes after a Promise is completed whether it succeeds or fails.",

        syntax:
`promise.finally(() => {

});`,

        code:
`Promise.resolve("Success")

    .then((result) => {

        console.log(result);

    })

    .finally(() => {

        console.log("Completed");

    });`,

        output:
`Success
Completed`

    },


    asyncawait: {

        title: "async / await",

        definition:
            "async and await provide a cleaner way to work with Promises.",

        syntax:
`const functionName = async () => {

    const result = await promise;

};`,

        code:
`const getData = async () => {

    const result =
        await Promise.resolve(
            "Student data received"
        );

    console.log(result);

};

getData();`,

        output:
            "Student data received"

    },


    trycatch: {

        title: "try / catch",

        definition:
            "try/catch is used to handle errors without stopping the entire application.",

        syntax:
`try {

    // code

} catch (error) {

    // error handling

}`,

        code:
`try {

    throw new Error("Something went wrong");

} catch (error) {

    console.log(error.message);

}`,

        output:
            "Something went wrong"

    },


    // ======================================================
    // DAY 8
    // ======================================================


    document: {

        title: "document",

        definition:
            "document represents the HTML page and provides methods to access and modify the DOM.",

        syntax:
`document.method();`,

        code:
`console.log(document.title);`,

        output:
            "GreenTech JavaScript Learning System"

    },


    getelement: {

        title: "getElementById()",

        definition:
            "getElementById() selects an HTML element using its id.",

        syntax:
`document.getElementById("id");`,

        code:
`const title =
    document.getElementById("topicTitle");

console.log(title.textContent);`,

        output:
            "Selected topic title"

    },


    queryselector: {

        title: "querySelector()",

        definition:
            "querySelector() selects the first HTML element matching a CSS selector.",

        syntax:
`document.querySelector("selector");`,

        code:
`const button =
    document.querySelector(".topic");

console.log(button.textContent);`,

        output:
            "First topic button"

    },


    queryall: {

        title: "querySelectorAll()",

        definition:
            "querySelectorAll() selects all HTML elements matching a CSS selector.",

        syntax:
`document.querySelectorAll("selector");`,

        code:
`const buttons =
    document.querySelectorAll(".topic");

console.log(buttons.length);`,

        output:
            "Number of topic buttons"

    },


    textcontent: {

        title: "textContent",

        definition:
            "textContent gets or changes the text inside an HTML element.",

        syntax:
`element.textContent = "New text";`,

        code:
`const output =
    document.getElementById("topicOutput");

output.textContent =
    "Hello JavaScript";`,

        output:
            "Hello JavaScript"

    },


    innerhtml: {

        title: "innerHTML",

        definition:
            "innerHTML gets or changes the HTML content inside an element.",

        syntax:
`element.innerHTML = "<p>Hello</p>";`,

        code:
`const output =
    document.getElementById("topicOutput");

output.innerHTML =
    "<strong>Hello JavaScript</strong>";`,

        output:
            "Hello JavaScript"

    },


    value: {

        title: "value",

        definition:
            "The value property gets the current value from form elements such as input fields.",

        syntax:
`input.value;`,

        code:
`const input =
    document.querySelector("input");

console.log(input.value);`,

        output:
            "The value entered by the user"

    },


    style: {

        title: "style",

        definition:
            "The style property allows JavaScript to change inline CSS styles.",

        syntax:
`element.style.property = "value";`,

        code:
`const title =
    document.getElementById("topicTitle");

title.style.fontSize = "40px";`,

        output:
            "Topic title becomes larger"

    },


    classlist: {

        title: "classList",

        definition:
            "classList allows JavaScript to add, remove or toggle CSS classes.",

        syntax:
`element.classList.add("className");

element.classList.remove("className");

element.classList.toggle("className");`,

        code:
`const panel =
    document.getElementById("learningPanel");

panel.classList.add("border-4");`,

        output:
            "CSS class added to the panel"

    },


    createelement: {

        title: "createElement()",

        definition:
            "createElement() creates a new HTML element using JavaScript.",

        syntax:
`document.createElement("tag");`,

        code:
`const heading =
    document.createElement("h3");

heading.textContent =
    "New Heading";

console.log(heading.textContent);`,

        output:
            "New Heading"

    },


    append: {

        title: "append()",

        definition:
            "append() adds a new node or text to the end of an element.",

        syntax:
`parent.append(child);`,

        code:
`const paragraph =
    document.createElement("p");

paragraph.textContent =
    "New paragraph";

document.body.append(paragraph);`,

        output:
            "New paragraph is added to the page"

    },


    remove: {

        title: "remove()",

        definition:
            "remove() removes an element from the DOM.",

        syntax:
`element.remove();`,

        code:
`const element =
    document.querySelector(".topic");

element.remove();`,

        output:
            "Selected element is removed"

    },


    addevent: {

        title: "addEventListener()",

        definition:
            "addEventListener() listens for an event such as click, input or submit.",

        syntax:
`element.addEventListener(
    "event",
    function
);`,

        code:
`const button =
    document.querySelector(".topic");

button.addEventListener(
    "click",
    () => {

        console.log("Topic clicked");

    }
);`,

        output:
            "Topic clicked"

    },


    form: {

        title: "Form Handling",

        definition:
            "Form handling means reading and processing data submitted by the user.",

        syntax:
`form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

    }
);`,

        code:
`const form =
    document.querySelector("form");

form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        console.log("Form submitted");

    }
);`,

        output:
            "Form submitted"

    },


    validation: {

        title: "Validation",

        definition:
            "Validation checks whether user input satisfies required rules before processing it.",

        syntax:
`if (value === "") {

    // show error

}`,

        code:
`const name = "Samjana";

if (name.trim() === "") {

    console.log("Name required");

} else {

    console.log("Valid name");

}`,

        output:
            "Valid name"

    },


    localstorage: {

        title: "localStorage",

        definition:
            "localStorage stores data in the browser and keeps it even after the browser page is refreshed.",

        syntax:
`localStorage.setItem(
    "key",
    "value"
);

localStorage.getItem("key");`,

        code:
`localStorage.setItem(
    "studentName",
    "Samjana"
);

const name =
    localStorage.getItem(
        "studentName"
    );

console.log(name);`,

        output:
            "Samjana"

    },


    sessionstorage: {

        title: "sessionStorage",

        definition:
            "sessionStorage stores data for the current browser tab session.",

        syntax:
`sessionStorage.setItem(
    "key",
    "value"
);

sessionStorage.getItem("key");`,

        code:
`sessionStorage.setItem(
    "course",
    "JavaScript"
);

const course =
    sessionStorage.getItem("course");

console.log(course);`,

        output:
            "JavaScript"

    },


    stringify: {

        title: "JSON.stringify()",

        definition:
            "JSON.stringify() converts a JavaScript object or array into a JSON string.",

        syntax:
`JSON.stringify(object);`,

        code:
`const student = {

    name: "Samjana",

    age: 25

};

const data =
    JSON.stringify(student);

console.log(data);`,

        output:
            '{"name":"Samjana","age":25}'

    },


    parse: {

        title: "JSON.parse()",

        definition:
            "JSON.parse() converts a JSON string back into a JavaScript object.",

        syntax:
`JSON.parse(jsonString);`,

        code:
`const data =
    '{"name":"Samjana","age":25}';

const student =
    JSON.parse(data);

console.log(student.name);`,

        output:
            "Samjana"

    },


    fetch: {

        title: "fetch()",

        definition:
            "fetch() is used to request data from a server or API.",

        syntax:
`fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });`,

        code:
`fetch(
    "https://jsonplaceholder.typicode.com/users/1"
)

.then(response => response.json())

.then(data => {

    console.log(data.name);

});`,

        output:
            "API user name"

    },


    api: {

        title: "API",

        definition:
            "An API allows one application to communicate with another application or server and exchange data.",

        syntax:
`Client → API → Server

Server → API → Client`,

        code:
`fetch(
    "https://jsonplaceholder.typicode.com/users/1"
)

.then(response => response.json())

.then(data => {

    console.log(data);

});`,

        output:
            "User data received from API"

    },


    get: {

        title: "GET",

        definition:
            "GET is an HTTP method used to retrieve data from a server.",

        syntax:
`fetch(url, {
    method: "GET"
});`,

        code:
`fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
        method: "GET"
    }
)

.then(response => response.json())

.then(data => {

    console.log(data.name);

});`,

        output:
            "User data received"

    },


    post: {

        title: "POST",

        definition:
            "POST is an HTTP method commonly used to send new data to a server.",

        syntax:
`fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
});`,

        code:
`const student = {

    name: "Samjana",

    course: "JavaScript"

};

fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
        method: "POST",

        headers: {
            "Content-Type":
                "application/json"
        },

        body:
            JSON.stringify(student)

    }
)

.then(response => response.json())

.then(data => {

    console.log(data);

});`,

        output:
            "New data sent to API"

    },


    put: {

        title: "PUT",

        definition:
            "PUT is an HTTP method used to replace an existing resource with updated data.",

        syntax:
`fetch(url, {
    method: "PUT",
    body: JSON.stringify(data)
});`,

        code:
`const student = {

    id: 1,

    name: "Samjana Updated"

};

fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "PUT",

        headers: {
            "Content-Type":
                "application/json"
        },

        body:
            JSON.stringify(student)

    }
)

.then(response => response.json())

.then(data => {

    console.log(data);

});`,

        output:
            "Existing data replaced"

    },


    patch: {

        title: "PATCH",

        definition:
            "PATCH is an HTTP method used to partially update an existing resource.",

        syntax:
`fetch(url, {
    method: "PATCH",
    body: JSON.stringify(data)
});`,

        code:
`const update = {

    name: "Samjana Updated"

};

fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "PATCH",

        headers: {
            "Content-Type":
                "application/json"
        },

        body:
            JSON.stringify(update)

    }
)

.then(response => response.json())

.then(data => {

    console.log(data);

});`,

        output:
            "Selected data updated"

    },


    delete: {

        title: "DELETE",

        definition:
            "DELETE is an HTTP method used to remove a resource from a server.",

        syntax:
`fetch(url, {
    method: "DELETE"
});`,

        code:
`fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
        method: "DELETE"
    }
)

.then(response => {

    console.log(
        "Data deleted"
    );

});`,

        output:
            "Data deleted"

    }

};


// ==========================================================
// DOM ELEMENTS
// ==========================================================

const topicButtons =
    document.querySelectorAll(".topic");

const topicCount =
    document.querySelector("#topicCount");

const learningPanel =
    document.querySelector("#learningPanel");

const topicTitle =
    document.querySelector("#topicTitle");

const topicDefinition =
    document.querySelector("#topicDefinition");

const topicSyntax =
    document.querySelector("#topicSyntax");

const topicCode =
    document.querySelector("#topicCode");

const topicOutput =
    document.querySelector("#topicOutput");

const closeBtn =
    document.querySelector("#closeBtn");

const startBtn =
    document.querySelector("#startBtn");


// ==========================================================
// TOPIC COUNT
// ==========================================================

topicCount.textContent =
    topicButtons.length + " Topics";


// ==========================================================
// START LEARNING BUTTON
// ==========================================================

startBtn.addEventListener("click", () => {

    const firstTopic =
        document.querySelector(
            '[data-topic="variables"]'
        );

    firstTopic.click();

});


// ==========================================================
// TOPIC CLICK
// ==========================================================

topicButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Get topic name

        const topicName =
            button.dataset.topic;


        // Find topic data

        const topic =
            topics[topicName];


        // Safety check

        if (!topic) {

            console.log(
                "Topic data not found:",
                topicName
            );

            return;

        }


        // Remove active from all buttons

        topicButtons.forEach((item) => {

            item.classList.remove("active");

        });


        // Add active to selected button

        button.classList.add("active");


        // Show learning panel

        learningPanel.classList.remove("hidden");


        // Add topic information

        topicTitle.textContent =
            topic.title;

        topicDefinition.textContent =
            topic.definition;

        topicSyntax.textContent =
            topic.syntax;

        topicCode.textContent =
            topic.code;

        topicOutput.textContent =
            topic.output;


        // Scroll to learning panel

        learningPanel.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });


        // Console output

        console.log(
            "Selected Topic:",
            topic.title
        );

        console.log(
            "Definition:",
            topic.definition
        );

        console.log(
            "Syntax:",
            topic.syntax
        );

        console.log(
            "Code:",
            topic.code
        );

        console.log(
            "Output:",
            topic.output
        );

    });

});


// ==========================================================
// CLOSE TOPIC
// ==========================================================

closeBtn.addEventListener("click", () => {

    learningPanel.classList.add("hidden");


    topicButtons.forEach((button) => {

        button.classList.remove("active");

    });

});