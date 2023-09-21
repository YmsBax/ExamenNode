const {mongoose,Schema,model} = require("mongoose");

const empleadoSchema = new Schema ( {
    nombre:{
        type: String,
        unique: true,
        require: [true, 'Campo requerido']
    },
    apellido:{
        type: String,
        unique: true,
        require: [true, 'Campo requerido']
    },
    edad:{
        type: Number,
        unique: true,
        require: [true, 'Campo requerido']
    },
    cedula:{
        type: Number,
        unique: true,
        require: [true, 'Campo requerido']
    }
})

module.exports = model ('empleado',empleadoSchema);