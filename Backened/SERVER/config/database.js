const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect=()=>{

    mongoose.connect('DB_URL',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> console.log("Database connected successfully"))
    .catch((error)=>{
        console.log("error while connecting db");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports=dbConnect;