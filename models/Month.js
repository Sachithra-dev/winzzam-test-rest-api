const mongoose = require("mongoose");


const MonthSchema = new mongoose.Schema(
    {
        Tutor : {type:String,required:false},
        Month : {type:String,required:false},
        Subject: {type:String,required:false},
        fee : {type:String,required:false},
        description: {type:String,required:false},
        imageUrl:{type:String,required:false},//tution master url   
        count : {type:Number,required:false},
        status: {type:Number,required:false}
    },{timestamps:true}
);


module.exports = mongoose.model("Month",MonthSchema);