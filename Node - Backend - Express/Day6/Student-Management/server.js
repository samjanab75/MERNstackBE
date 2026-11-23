const express = require("express");

const app = express();

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");

app.use("/api/students", studentRoutes);

app.listen(5000, () => {
    console.log("Student Management Server Started");
});