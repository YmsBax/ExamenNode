import empleadoModel from '../model/empleado.model';

//Create (post)
export const postEmpleado = async(req,res)=>{
    const newEmpleado = new empleadoModel({id: req.body.id})
    const empleadoSave = newEmpleado.save();
    res.json({empleadoSave});
}

//Read (get)
export const getEmpleado = async(req,res)=>{
    const empleados = await empleadoModel.find()
    res.json(empleados)
}

//Update (put)
export const putEmpleado = async(req,res)=>{
    const updateEmpleado = await empleados.findByIdAndUpdate(req.params.id, req.body)
    res.json({updateEmpleado})
}

//Delete (delete)
export const deleteEmpleado = async (req, res) => {
    await empleadoModel.findOneAndDelete(req.body.id)
    res.json({
        message: `${req.params.id} se eliminó correctamente`
    })
} 