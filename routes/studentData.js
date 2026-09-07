const express = require('express')

const router = express.Router()

const {getStudentData} = require("../controllers/studentData");

router.get("/student", getStudentData);

module.exports = router;