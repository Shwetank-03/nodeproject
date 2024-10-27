const { executeSelect } = require('../db/db');

const executeQuery = require('../db/db').executeQuery;

const teacherLogin = (pwd, cb) => {
    try {
        if (pwd != 'admin@123') cb(Error("Invalid Password!"))
        else cb(null, "Success")
    }
    catch (err) {
        cb(err)
    }
}

const addStudentData = (data, cb) => {
    try {
        const { rollno, name, dob, score } = data;
        let sql = `INSERT INTO students (rollno, name, dob, score) VALUES (?,?,?,?)`;
        executeQuery(sql, [rollno, name, dob, score], (err, result) => {
            if (err) cb(Error(err))
            else cb(null, result)
        })
    }
    catch (err) {
        cb(Error(err))
    }
}

const editStudentData = (data, cb) => {
    try{
        const {rollno, name, dob, score} = data;
        let sql = `UPDATE students SET name=?, dob=?, score=? WHERE rollno=?`;
        executeQuery(sql, [name, dob, score, rollno], (err, result) => {
            if (err) cb(Error(err))
            else cb(null, result)
        })
    }
    catch (err){
        cb(Error(err))
    }
}

const deleteStudentData = (rollno, cb) => {
    try{
        let sql = `DELETE FROM students WHERE rollno=?`;
        executeQuery(sql, [rollno], (err, result) => {
            if (err) cb(Error(err))
            else cb(null, result)
        })
    }
    catch(err){
        cb(Error(err))
    }
}

const viewAllStudentData = (cb) => {
    try{
        let sql = `SELECT * FROM students`;
        executeSelect(sql, [], (err, result) => {
            if (err) cb(Error(err))
            else if (result.length == 0) cb(Error("No Student Found!"))
            else cb(null, result)
        })
    }
    catch(err){
        cb(Error(err))
    }
}

const viewOneStudentData = (rollno, cb) => {
    try{
        let sql = `SELECT * FROM students WHERE rollno=?`;
        executeSelect(sql, [rollno], (err, result) => {
            if (err) cb(Error(err))
            else if (result.length == 0) cb(Error("No Student Found!"))
            else cb(null, result)
        })
    }
    catch(err){
        cb(Error(err))
    }
}

module.exports={teacherLogin, addStudentData , viewAllStudentData, viewOneStudentData, editStudentData, deleteStudentData}