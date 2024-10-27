const teacherService = require('../services/teacherService')

const teacherLogin = (req, res) => {
    teacherService.login(req.body.password, (err, result) => {
        if (err) res.render('login', { err_msg: err })
        else res.render('options', { err_msg: '' })
    })
}

const addStudentData = (req, res) => {
    const { rollno, name, dob, score } = req.body;
    const data = {rollno, name, dob, score}
    teacherService.addData(data, (err, result) => {
        if (err) res.render('options', { err_msg: err })
        else res.render('options', { err_msg: 'Data added successfully' })
    })
}

const viewStudentData = (req, res) => {
    teacherService.viewData((err, result) => {
        if (err) res.send({ data: '', err_msg: err })
        else res.send({ data: result, err_msg: '' })
    })

}

const viewOneStudentData = (req, res) => {
    teacherService.viewOneData(req.params.id, (err, result) => {
        if (err) res.render('update', { data: '', err_msg: err })
        else res.render('update', { data: result[0], err_msg: '' })
    })
}



const editStudentData = (req, res) => {
    teacherService.editData(req.body, (err, result) => {
        if (err) res.render('options', {err_msg: err })
        else res.render('options',{ err_msg: 'Record Updated Successfully!' })
    })
}

const deleteStudentData = (req, res) => {
    teacherService.deleteData(req.params.id, (err, result) => {
        if (err) res.render('options', {err_msg: err })
        else res.render('options', { err_msg: 'Record deleted successfully'})
    })
}
module.exports = { teacherLogin, addStudentData, viewStudentData, viewOneStudentData, editStudentData, deleteStudentData }