const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
    course: {
        required: true,
        type: String,
        lowercase: true
    },
    style: {
        required: true,
        type: String
    },
    date: {
        year: {
            required: true,
            type: Number
        },
        month: {
            required: true,
            type: Number
        },
        day: {
            required: true,
            type:Number
        }
    },
    percentage: {
        required: true,
        type: Number
    }
})

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;