const mongoose = require("mongoose");

const BookMarkSchema = new mongoose.Schema(
    {
        Month:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Month"
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        
        
    },{timestamps:true}
)

module.exports = mongoose.model("Bookmark",BookMarkSchema);