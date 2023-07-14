const mongoose = require("mongoose");


const RecordSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Album title is required"],
        minLength: [3, "Album title should be at least 3 characters long"]
    },

    artist: {
        type: String,
        required: [true, "Artist name is required"],
        minLength: [3, "Artist name should be at least 3 characters long"]
    },

    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Description should be at least 3 characters long"]
    },

    isOwned: {
        type: Boolean,

    },

    genres1: {
        type: String,
    },
    genres2: {
        type: String,
    },
    genres3: {
        type: String,
    }

}, {timestamps: true});

module.exports = mongoose.model("Record", RecordSchema);

//STEP 3!!!!