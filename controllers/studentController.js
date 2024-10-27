const studentService = require('../services/studentService');

const studentLogin=(req, res)=>{
    const rollno = req.body.rollno
    const dob = req.body.dob
    studentService.getStudentResult(rollno, dob, (err, result)=>{
        if (err) res.render('login', { err_msg: err })
        else res.render('view', { data: result })
    })
}

module.exports={studentLogin}