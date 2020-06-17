const mongoose = require('mongoose');
mongoose.connect("localhost", (err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("Connected")
    }
});
