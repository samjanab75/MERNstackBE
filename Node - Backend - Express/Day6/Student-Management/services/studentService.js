const students = [];

// GET all students
const getAllStudents = () => {
    return students;
};

// POST - Create student
const createStudent = (student) => {
    students.push(student);
    return student;
};

module.exports = {
    getAllStudents,
    createStudent
};