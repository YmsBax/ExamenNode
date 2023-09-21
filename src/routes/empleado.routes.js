const {Router} = require('express');
const controladorEmpleado = require('../controller/empleado.controller');

const router = Router();

router.post('/', controladorEmpleado.postEmpleado)
router.get('/', controladorEmpleado.getEmpleado)
router.put('/',controladorEmpleado.putEmpleado)
router.delete('/',controladorEmpleado.deleteEmpleado)

module.exports = router