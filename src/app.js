const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const empleadosRoutes = require('./routes/empleado.routes');

const app = express();

// seting
app.set('PORT', process.env.PORT || 8181);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my web aplication api' });
})

app.use('/empleados', empleadosRoutes);


module.exports = app;