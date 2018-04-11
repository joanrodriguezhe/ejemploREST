//Dependencias
var express = require('express');
var router = express.Router();

//Models
var Alumno= require('../models/alumno');


//Routes
Alumno.methods(['get','put','post','delete'])
Alumno.register(router,'/alumnos');

//Return router
module.exports = router;