const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
    {
        checkin_Id: {type: Number, required: true, unique: true},
        checkin_comment: {type: String},

        first_name: {type: String, required: true, max: 100},
        last_name: {type: String, required: true, max: 100},

        bid: {type: Number, required: true},
        rating: {type: Number},

        created_at: {type: Date},
    }
);

//Export model
module.exports = mongoose.model('Review', ReviewSchema);