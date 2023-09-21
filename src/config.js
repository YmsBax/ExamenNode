const {config} = require('dotenv');
config();

const mongoUrl = process.env.mongo_url;

module.exports = mongoUrl;