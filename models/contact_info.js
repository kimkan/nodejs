const mongoose = require('mongoose');

const contact_info = mongoose.Schema({name: String, email: String, message: String});

module.exports = mongoose.model('Contact_info', contact_info);