const Lecture = require('../models/Lecture');

// Create
const addLecture = (req, res) => {
    const { course, date, lecture_number } = req.body;
    const newLecture = new Lecture({ course, date, lecture_number });

    newLecture.save()
        .then(() => res.json("Successfully added a new lecture."))
        .catch(e => res.json(e));
}

// Read
const getLectures = (req, res) => {
    Lecture.find()
        .then(Lectures => res.json(Lectures))
        .catch(e => res.json(e))
}

// Read
const getSpecificLecture = (req, res) => {
    const ID = req.params.id;

    Lecture.findById(ID)
        .then(Lecture => res.json(Lecture))
        .catch(e => res.json(e))
}

// Update
const updateLecture = (req, res) => {
    const ID = req.params.id;
    const { course, date, lecture_number } = req.body;

    Lecture.findById(ID)
        .then(Lecture => {
            Lecture.course = course;
            Lecture.date = date;
            Lecture.lecture_number = lecture_number;

            Lecture.save()
            .then(() => res.json(Lecture))
            .catch(e => res.json(e));
        })
        .catch(e => res.json(e));
}

// Delete
const deleteLecture = (req, res) => {
    const ID = req.params.id;

    Lecture.findByIdAndDelete(ID)
        .then(() => res.json(`Successfully deleted the lecture with ID: ${ID}.`));
}

// Exporting the functions
module.exports = {
    addLecture,
    getLectures,
    getSpecificLecture,
    updateLecture,
    deleteLecture
};