var express = require("express");
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/login',studentController.studentLogin);

module.exports = router;