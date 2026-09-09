const studentData = require("../models/studentData");

function getStudentData(req, res){
res.json(studentData)
}

function addStudentData(req, res){
    const newstudent = req.body
    studentData.push(newstudent)
}



module.exports = {getStudentData, addStudentData}

