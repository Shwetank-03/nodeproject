const { executeSelect } = require('../db/db');


const viewOneStudentData = (rollno,dob, cb) => {
    try{
        let sql = `SELECT * FROM students WHERE rollno=? and dob=?`;
        executeSelect(sql, [rollno, dob], (err, result) => {
            if (err) cb(Error(err))
            else if (result.length == 0) cb(Error("No Student Found!"))
            else cb(null, result)
        })
    }
    catch(err){
        cb(Error(err))
    }
}

module.exports={viewOneStudentData}