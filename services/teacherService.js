const { teacherLogin, addStudentData, editStudentData, deleteStudentData, viewAllStudentData, viewOneStudentData } = require('../models/teacherModel')

const login = (pwd, cb) => {
    teacherLogin(pwd, (err, res) => {
        if (err) cb(Error(err))
        else cb(null, res)
    })
}

const addData = (data, cb) => {
    addStudentData(data, (err, res) => {
        if (err) cb(Error(err))
        else cb(null, res)
    })
}

const editData = (data, cb) => {
    editStudentData(data, (err, res) => {
        if (err) cb(Error(err))
        else cb(null, res)
    })
}

const deleteData = (rollno, cb) => {
    deleteStudentData(rollno, (err, res) => {
        if (err) cb(Error(err))
        else cb(null, res)
    })
}

const viewData = (cb) => {
    viewAllStudentData((err, res) => {
        if (err) cb(Error(err))
        else cb(null, res)
    })
}

const viewOneData = (rollno, cb) => {
    viewOneStudentData(rollno, (err, res) => {
        if (err) cb(Error(err))
        else cb(null, res)
    })
}

module.exports = { login, addData, viewData, editData, deleteData, viewOneData }