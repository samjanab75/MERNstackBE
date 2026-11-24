
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();

app.use(express.json());

// MongoDB Atlas Connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Atlas Connected Successfully!");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error.message);
    });

// Home Route
app.get("/", (req, res) => {
    res.send("Student Management API is Running");
});

// 1. CREATE ONE STUDENT
app.post("/students", async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            message: "Student Created Successfully",
            data: student
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});



// 3. GET ALL STUDENTS
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            message: "All Students Retrieved Successfully",
            count: students.length,
            data: students
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});




 // 4. GET ONE STUDENT
app.get("/students/one", async (req, res) => {
    try {
        const student = await Student.findOne({
            email: req.query.email
        });

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.status(200).json({
            message: "Student Found Successfully",
            data: student
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// 5. GET STUDENT BY ID
app.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student Not Found"
            });
        }

        res.status(200).json({
            message: "Student Found By ID Successfully",
            data: student
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// 2. INSERT MULTIPLE STUDENTS
app.post("/students/many", async (req, res) => {
    try {
        const students = await Student.insertMany(req.body);

        res.status(201).json({
            message: "Multiple Students Created Successfully",
            data: students
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
