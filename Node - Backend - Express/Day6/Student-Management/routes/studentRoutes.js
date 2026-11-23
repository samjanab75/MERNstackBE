const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

console.log("Controller functions:", {
    getAllStudents: typeof studentController.getAllStudents,
    createStudent: typeof studentController.createStudent
});

router.get("/", studentController.getAllStudents);

router.post("/", studentController.createStudent);

module.exports = router;