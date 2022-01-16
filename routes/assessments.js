const express = require('express');
const router = express.Router();
const {
    addAssessment,
    getAssessments,
    getSpecificAssessment,
    updateAssessment,
    deleteAssessment
} = require('../controllers/assessments');

router.route('/').post(addAssessment);
router.route('/').get(getAssessments);
router.route('/:id').get(getSpecificAssessment);
router.route('/:id').put(updateAssessment);
router.route('/:id').delete(deleteAssessment);

module.exports = router;