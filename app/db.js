require('dotenv').config();

const connection = process.env.DB_URI;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
 
exports.db = mongoose.connect(connection);