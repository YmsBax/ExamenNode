const empleadoModel = require('../model/empleado.model');

//Create (post)
exports.postEmpleado = async(req,res)=>{
    const newEmpleado = new empleadoModel({nombre: req.body.nombre, apellido: req.body.apellido, edad: req.body.edad, cedula: req.body.cedula})
    const empleadoSave = newEmpleado.save();
    res.json({empleadoSave});
}

//Read (get)
exports.getEmpleado = async(req,res)=>{
    const empleados = await empleadoModel.find()
    res.json(empleados)
}

//Update (put)
exports.putEmpleado = async(req,res)=>{
    const updateEmpleado = await empleados.findByIdAndUpdate(req.params.id, req.body)
    res.json({updateEmpleado})
}

//Delete (delete)
exports.deleteEmpleado = async (req, res) => {
    await empleadoModel.findOneAndDelete(req.body.id)
    res.json({
        message: `${req.params.id} se eliminó correctamente`
    })
}
