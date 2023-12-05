const  mongoose  = require("mongoose")

//const validator= require("validator");
const studentschema= mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLenght:3
    },
    address:{
        type:String,
        require:true,
        minLenght:3
    },
    phonename:{
        type:Number,
        require:true,
        minLenght:10,
        maxLenght:10
    },
    parent:{
        type:String,
        require:true,
        minLenght:3
    }
})
const Student=mongoose.model("Student",studentschema);
module.exports=Student;