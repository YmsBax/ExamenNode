import mongoose,{mongoose,Schema,model} from "mongoose";


export default model ('empleado',empleadoSchema);

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