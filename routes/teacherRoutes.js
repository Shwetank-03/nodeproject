var express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.post('/login',teacherController.teacherLogin);
router.get('/viewall',teacherController.viewStudentData);
router.get('/edit/:id',teacherController.viewOneStudentData);
router.post('/edit/',teacherController.editStudentData);
router.get('/delete/:id',teacherController.deleteStudentData);
// router.get('/option',teacherController.pageTeacherOptions);
router.post('/add',teacherController.addStudentData);
// router.get('/add',teacherController.pageStudentRecord);

module.exports = router;