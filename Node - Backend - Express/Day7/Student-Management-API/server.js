
const express = require("express");

const app = express();

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000 },
    { id: 2, name: "Phone", category: "Electronics", price: 20000 },
    { id: 3, name: "Shirt", category: "Fashion", price: 1000 },
    { id: 4, name: "Shoes", category: "Fashion", price: 2500 }
];

// Middleware
app.use(express.json());



const students = [
    {
        id: 1,
        name: "Sam",
        email: "sam@gmail.com",
        course: "MERN Stack",
        age: 26
    },
    {
        id: 2,
        name: "Arun",
        email: "arun@gmail.com",
        course: "Java",
        age: 23
    }
];

// Student Registration API

app.post("/students", (req, res) => {

    const { name, email, course, age } = req.body;

    const newStudent = {
        id: 1,
        name: name,
        email: email,
        course: course,
        age: age
    };

    res.status(201).json({
        message: "Student Registered Successfully",
        data: newStudent
    });

});


app.get("/students/:id", (req, res) => {

    const studentId = Number(req.params.id);

    const student = students.find(
        (s) => s.id === studentId
    );

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    res.json({
        message: "Student Details",
        data: student
    });

});


app.get("/products", (req, res) => {

    const { category, minPrice, maxPrice } = req.query;

    const filteredProducts = products.filter((product) => {

        return (
            (!category || product.category.toLowerCase() === category.toLowerCase()) &&
            (!minPrice || product.price >= Number(minPrice)) &&
            (!maxPrice || product.price <= Number(maxPrice))
        );

    });

    res.json({
        message: "Filtered Products",
        data: filteredProducts
    });

});

app.get("/dashboard", (req, res) => {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized! Token Missing"
        });
    }

    res.json({
        message: "Token received for verification",
        token: token
    });

});

// Server
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
