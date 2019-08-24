const Hotel = require('../models/hotel.model');
const Contact_info = require('../models/contact_info');

/*let hotels = [{rooms: [{
    img: "/w3images/room_single.jpg",
    roomName: "Single Room",
    roomPrice: 99,
    bedSize: "Single bed",
    size: "15",
    tv: "",
    glass: "",
    cutlery: ""
}
,
{
    img: "/w3images/room_double.jpg",
    roomName: "Double Room",
    roomPrice: 149,
    bedSize: "Queen-size bed",
    size: "25",
    tv: "fa fa-tv",
    glass: "",
    cutlery: ""
},
{
    img: "/w3images/room_deluxe.jpg",
    roomName: "Deluxe Room",
    roomPrice: 199,
    bedSize: "King-size bed",
    size: "40",
    tv: "fa fa-tv",
    glass: "fa fa-glass",
    cutlery: "fa fa-cutlery"
}]}];*/


//let questioninfo = [];


exports.getRecommand = function(req, res, next){
    Hotel.find().then(function(rooms){
    res.json(rooms);
    });
    //res.json(hotels);
};
    

exports.createRecommand = function(req, res, next){
    /*console.log(req.body);        
    questioninfo.push(req.body);
    console.log(questioninfo);
    res.end();*/

    console.log(req.body);
    
    
    var query  = Contact_info.where({ email: req.body.email });
    query.findOne(function (err, email) {
        if (err) return handleError(err);
        if (email) {
            console.log("same email");
            res.setHeader('Content-Type', 'application/json');
            res.json({ data: 'user found already in db' });
        }
        else{
            const contact_info = new Contact_info(req.body);
            contact_info.save();
            res.end();
        }
      });
      
    
    /*Hotel.find().then(function(hotels){
        hotels = Object.assign(hotels, req.body);
        hotels.save().then(function(){
            res.json(hotels);
        });
    });*/

};

exports.updateRecommand = function(req, res, next){
    /*console.log(req.params.id);
    const id = req.params.id? req.params.id: null;
    if(id){
        //res.json(hotels[id-1]);
        Hotel.findOne({_id: id}). then(function(hotel){
            //console.log(hotel);
            //res.json(hotel);
            hotel = Object.assign(hotel, req.body);
            hotel.save().then(function(){
                res.json(hotel);
            });
        });           
    }
    else{
        res.json({message: 'hotel not found'});
    }*/
    
    var data_inside = req.body[1].rooms;
    var data_id = req.body[1]._id;
    
    console.log(data_id);
    var filter = { _id: data_id };

    Hotel.deleteOne(filter, function(error, documents){
        if(error)
           console.log("Error: ", error);
        else
            console.log("Document deleted.")
});
    const rooms = new Hotel({rooms: data_inside});
    rooms.save();
    res.end();
    
    
};

exports.deleteRecommand = function(req, res, next){
    
};