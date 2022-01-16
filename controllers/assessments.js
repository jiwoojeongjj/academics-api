const Assessment = require('../models/Assessment');

// Create
const addAssessment = (req, res) => {
    const { course, style, date, percentage } = req.body;
    const newAssessment = new Assessment({ course, style, date, percentage });

    newAssessment.save()
        .then(() => res.json("Successfully added a new assessment."))
        .catch(e => res.json(e));
}

// Read
const getAssessments = (req, res) => {
    Assessment.find()
        .then(assessments => res.json(assessments))
        .catch(e => res.json(e))
}

// Read
const getSpecificAssessment = (req, res) => {
    const ID = req.params.id;

    Assessment.findById(ID)
        .then(assessment => res.json(assessment))
        .catch(e => res.json(e))
}

// Update
const updateAssessment = (req, res) => {
    const ID = req.params.id;
    const { course, style, date, percentage } = req.body;

    Assessment.findById(ID)
        .then(assessment => {
            assessment.course = course;
            assessment.style = style;
            assessment.date = date;
            assessment.percentage = percentage;

            assessment.save()
                .then(() => res.json(assessment))
                .catch(e => res.json(e));
        })
        .catch(e => res.json(e));
}

// Delete
const deleteAssessment = (req, res) => {
    const ID = req.params.id;

    Assessment.findByIdAndDelete(ID)
        .then(() => res.json(`Successfully deleted the assessment with ID: ${ID}.`));
}

// Exporting the functions
module.exports = {
    addAssessment,
    getAssessments,
    getSpecificAssessment,
    updateAssessment,
    deleteAssessment
};