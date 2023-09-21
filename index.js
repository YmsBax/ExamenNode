const app = require('./src/app');
require('./src/js/conexion')
app.listen(3000,()=>{
    console.log(`Servidor activo en el puerto 3000`)
})
