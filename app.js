
const express = require("express");              ////////////imp 1 //////////
const app =  express();
const mongoose = require("mongoose");           ////////////imp 2 //////////
const path = require("path");                   ////////////imp 3 /////////
const Listing = require("./models/listing.js");

const URL = "mongodb://127.0.0.1:27017/class"; ///////local mashin me mongo shal me db rkhne k liye 

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname)));



main()
.then(() => {
    console.log("connected to db")
    
}).catch (err => {
    console.log(err);
});

async function main() {
   await mongoose.connect(URL); ////////yha hm usi url ko require kiye jaha db rkhe hai
};

////////sample student data/////// iska upyog mongoshall me fack data insert krane ka liye 
// let student1 = new Listing (
//     {
//         Stu_name: "aarti",
//         Father_name:"amrit",
//         Mother_name:"kaoushi bai",
//         Date_of_birth: "09/04/1991" ,
//         class: 12 ,
//         Aadhar_no:123456789102, 
//         Mobile_no:7771073872, 
//         image: "https://images.pexels.com/photos/2943358/pexels-photo-2943358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     });

//     student1.save().then((res) => { ///////  is func ka matlb hai ki hamre mongoshall me nayi data insert kro
//         console.log(res);
//     })







app.get("/", (req, res) => {
    res.send("hi i am root ");
});
                                                                //////-----async func ka bhi bahut matlb h isko nhi lagane pr find(). func bahut se parameter show krta hai.------///
app.get("/home",  async (req, res) => {                        ////jb hm is route me get req. bhejenge
    const stu_list = await Listing.find({});                   ////to vah mongoshaall ke sare listing ko find kr layega 
    // console.log(stu_list);                                     ///jise ham haya print krwayenge
    res.send("working");                                                                ////////yadi kam sucsess ho jata hai to yah print hoga
                                                                ///////////------very most importent func. find()-----------///////////
})

app.get("/signup", (req, res) => {
    res.render("user/signup.ejs");
});



app.listen("5000", () => {
    console.log("server is listing to port 5000")
});