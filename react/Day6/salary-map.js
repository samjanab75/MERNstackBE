let salaries = [15000, 20000, 25000, 30000, 35000];

let updatedSalaries = salaries.map((salary) => {
    return salary + 2000;
});

console.log("Original Salaries:", salaries);
console.log("Updated Salaries:", updatedSalaries);

// filter

let marks = [35, 78, 42, 90, 25, 67, 55];

let eligibleStudents = marks.filter((mark) => {
    return mark >= 50;
});

console.log("Eligible Students:", eligibleStudents);

// find

let products = [
    { id: 101, name: "Laptop", price: 55000 },
    { id: 102, name: "Mouse", price: 800 },
    { id: 103, name: "Keyboard", price: 1500 },
    { id: 104, name: "Monitor", price: 12000 }
];

let product = products.find((item) => {
    return item.id === 103;
});

console.log(product);
console.log(product.name);