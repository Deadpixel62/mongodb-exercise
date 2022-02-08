const Student = require("../Models/student.model");
const studentController = {};


studentController.addStudent = async(req,res) => {
    const {firstName, lastName, email, group} = req.body; //destructuring of the req.body object
    const student = new Student({
        firstName,       //same as saying firstName : firstName
        lastName,
        email,
        group,
    });
    try {
        await student.save();
        res.status(201).json({
            message: "Student added successfully",
            student,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error adding student",
            error,
        });
    }
};


studentController.getAllStudents = async function (req, res) {
  console.log("GET /exos");
  let students;
  try {
    students = await Student.find();
    res.send(students);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = studentController;