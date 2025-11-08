import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    description : {
        type : String,
        required : true
    }
},{
    timestamps : true
})

const Movie = mongoose.model('movieTbl', movieSchema);

export default Movie;