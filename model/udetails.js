const mongoose = require('mongoose')
const { Schema } = mongoose;

const UdetailSchema = new Schema({
    userId: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    userDescription: {
        type: String,
        require: true,
    },
    skills: {
        type: String,
        require: true,
    },
    ustatus: {
        type: String,
        require: true,
    },
    details:[],
    date: {
        type: Date,
        default: Date.now
    }
});

const Udetails = mongoose.model('udetails', UdetailSchema);
Udetails.createIndexes();
module.exports = Udetails;