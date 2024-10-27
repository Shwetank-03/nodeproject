const {viewOneStudentData} = require('../models/studentModel')

const getStudentResult = (rollno, dob, cb) => {
    viewOneStudentData(rollno,dob, (err, result) => {
        if (err) cb(Error(err))
        else cb(null, result[0])
    })
}

module.exports={getStudentResult}