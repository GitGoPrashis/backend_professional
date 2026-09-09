const express = require('express')

const router = express.Router()

const {getStudentData, addStudentData} = require("../controllers/studentData");

router.get("/student", getStudentData);

router.post("/student", addStudentData);






module.exports = router