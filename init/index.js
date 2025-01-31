const mongoose = require("mongoose");
const initData = require("./sample_data.js");
const Listing = require("../models/listing.js");
const URL = "mongodb://127.0.0.1:27017/class";

main()                              /////main nam ka funftion taiyar krenge 
.then(() => {
    console.log("connected to db") 
    
}).catch (err => {
    console.log(err);
});

async function main() {         //////// yaha main finction ko call krenge or mongo shall se connect krenge
   await mongoose.connect(URL);
}



const initDB = async () => {  /////is func. ka kam hoga 
    await Listing.deleteMany({});      //////sab deta ko delet krna
    await Listing.insertMany(initData.data);   /////// fir  file sampale_data me jakr data (key velue) me store krna
    console.log("data was initiliesd") ///////////bad me report dena ki data store ho gya hai
}

initDB();  //////// jo uper func. banaye hai use call krna tb jake wah kam kreaga