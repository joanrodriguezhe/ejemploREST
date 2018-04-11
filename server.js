//Dependencias
var express = require('express');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');

//Conexion a Mongo
mongoose.connect('mongodb://localhost/Alumno');

//Express
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes
app.use('/api',require('./routes/api'));

//Start
app.listen(3000);
console.log('Server corriendo');
