const mongoose=require("mongoose");

const OTPschema=new mongoose.Schema({

    email:{
        type:String,
         
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60,
    },
    otp:{
        type:String,
         
    },
     
})

module.exports=mongoose.model("OTP",OTPschema);