const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema ({
    Stu_name:{
        type: String,
        required: true,
    }, 
    
    Father_name:{
        type: String,
        required: true,
    }, 

    Mother_name:{
        type: String,
        required: true,
    }, 

    Date_of_birth:{
        type: String,
        required: true,
    }, 

    class:{
        type: Number,
        required: true,
    }, 

    Aadhar_no:{
        type: Number,
        required: true,
    }, 

    Mobile_no:{
        type: Number,
        required: true,
    }, 

    image: {
        type: String,
        required: true,
    },
});


const Listing = mongoose.model("Listing", classSchema);
module.exports = Listing;
