const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lectureSchema = new Schema({
    course: {
        required: true,
        type: String,
        lowercase: true
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
    lecture_number: {
        required: true,
        type: Number
    }
})

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;