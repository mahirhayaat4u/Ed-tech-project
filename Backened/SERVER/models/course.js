const mongoose=require("mongoose");
//
const courseSchema=new mongoose.Schema({

    courseName:{
        type:String,
    },
    courseDescription:{
        type:String,
        trim:true,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    whatYouWillLearn:{
        type:String,
        trim:true,
    },
    courseContent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    },
    ratingAndReviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReviews",
    },
    price:{
        type:Number,
        trim:true,
    },
    thumbnail:{
        type:String,
        trim:true,
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",
    },
    studentEnrolled:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

})

module.exports=mongoose.model("Course",courseSchema);