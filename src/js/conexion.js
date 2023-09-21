const mongoose = require("mongoose");
const config = require('../config');

(async function conexionMongo() {
    try{
     const db = await mongoose.connect('mongodb+srv://Jhoan:misterio112@cluster0.ukk1cxl.mongodb.net/empleados');
     console.log(`DataBase: ${db.connection.name}`);
    }catch(error){
     console.log(error);
}
})();
