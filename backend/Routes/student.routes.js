const express = require("express");
const router = express.Router();
const studentController = require('../Controllers/student.controller');


router.post('/addStudent', studentController.addStudent);

router.get('/allStudents', studentController.getAllStudents)





module.exports = router;