// Run the app in a designated host

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const teacherRoutes = require('./routes/teacherRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');

app.use(express.json());
const path = require('path');
const port = 5000;

app.set('view engine', 'ejs')
app.use(express.static('static'))
app.use(express.static('assets'))
app.use(express.json());
app.use(express.urlencoded());

app.use(expressLayouts);
app.set('layout', 'layouts/header');

app.get('/', (req, res) => {
    res.render('login', {err_msg:''})
})
app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);

app.listen(port, ()=>{
    console.log('App listenting at port: ', port);
})