//Dependencias
var restful = require ('node-restful');
var mongoose=restful.mongoose;

//Schema
var alumnoSchema = new mongoose.Schema({
    idalumno:Number,
    nombre:String,
    direccion:String
});

//Return model
module.exports = restful.model('Alumnos',alumnoSchema);