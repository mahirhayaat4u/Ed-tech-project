const mongoose=require("mongoose");

const tagSchema=new mongoose.Schema({

    tagName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    description:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
     
})

module.exports=mongoose.model("Tag",tagSchema);