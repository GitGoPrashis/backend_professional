const student = require("../models/studentData");

function getStudentData(req, res){
res.json(student)
}

module.exports = {getStudentData}