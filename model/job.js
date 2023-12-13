const mongoose = require('mongoose')
const { Schema } = mongoose;

const JobSchema = new Schema({
    jobTitle: {
        type: String,
        require: true,
    },
    jobDescription: {
        type: String,
        require: true,
    },
    comName: {
        type: String,
        require: true,
    },
    skills: {
        type: String,
        require: true,
    },
    requirement: {
        type: String,
        require: true,
    },
    salary: {
        type: String,
        require: true
    },
    jobType: {
        type: String,
        require: true
    },
    jobfor: {
        type: String,
        require: true
    },
    jobPlace: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const Job = mongoose.model('job', JobSchema);
Job.createIndexes();
module.exports = Job;