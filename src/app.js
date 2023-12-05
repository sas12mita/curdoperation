const express= require("express");
const app= express();
const hbs= require("hbs")
const path= require("path");
const mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/curdoperation")
.then(()=>console.log("successful"))
.catch(()=> console.log());

app.use(express.urlencoded());
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.set("view engine","hbs");
app.set("view engine","hbs");
app.use(express.static("public")); //static/image/
const Student=require("../models/student");
app.get("/",(req,res)=>
{
res.render("index");
})
app.get("/display",(req,res)=>
{
res.render("display");
})
app.post("/upload",async(req,res)=>
{
try {
const studentdata= new Student(req.body);
studentdata.save();
res.render("index");
} catch (error) {
res.status(500).send(error);
}
}) 
app.listen(555,()=>{
    console.log("Server is listining");
})

