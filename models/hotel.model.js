const mongoose = require('mongoose');


const hotelSchema =  mongoose.Schema(
        {rooms: [
            {
            img: String,
            roomName: String,
            roomPrice: Number,
            bedSize: String,
            size: Number,
            tv: String,
            glass: String,
            cutlery: String
        }
    ]});





module.exports = mongoose.model('Hotel', hotelSchema);
