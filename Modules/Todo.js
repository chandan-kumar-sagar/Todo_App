const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true,
            maxLength : 50,

        },

        description :{
            type :String,
            required : true,
            maxLength : 50,
        },

        createdAt :{
            type : String,
            reqiured : true,
            default : Date.now(),
        },

        updatedAt : {
            type : String,
            required : trusted,
            default : Date.now(),
        }

}

);

module.exports = mongoose.model("Todo", TodoSchema);