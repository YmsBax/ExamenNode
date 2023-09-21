import {Routes} from 'express';
import *as controladorEmpleado from '../controller/empleado.controller';

const router = Router();

router.post('/', controladorEmpleado)