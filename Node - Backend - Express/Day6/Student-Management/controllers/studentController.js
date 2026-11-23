const studentService = require("../services/studentService");

// GET all students
const getAllStudents = (req, res) => {
    const students = studentService.getAllStudents();

    res.status(200).json({
        message: "All Students Retrieved Successfully",
        data: students
    });
};

// POST - Create student
const createStudent = (req, res) => {
    console.log("CREATE STUDENT CONTROLLER CALLED");

    const student = req.body;

    console.log("Received student:", student);

    const newStudent = studentService.createStudent(student);

    console.log("New student:", newStudent);

    res.status(201).json({
        message: "Student Created Successfully",
        data: newStudent
    });
};

module.exports = {
    getAllStudents,
    createStudent
};