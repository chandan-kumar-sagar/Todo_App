const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
       useNewURLParser :true,
       useUnifiedTopology : true, 
    })


    .then(()=> console.log("db connection is succesfully"))
    
    .catch((error)=>{
      console.log("issu in db connections");
      console.error(error.message);
      process.exit(1);
    });
    
   }



    module.exports = dbconnect;
    
    
