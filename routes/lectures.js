const express = require('express');
const router = express.Router();
const {
    addLecture,
    getLectures,
    getSpecificLecture,
    updateLecture,
    deleteLecture
} = require('../controllers/Lectures');

router.route('/').post(addLecture);
router.route('/').get(getLectures);
router.route('/:id').get(getSpecificLecture);
router.route('/:id').put(updateLecture);
router.route('/:id').delete(deleteLecture);

module.exports = router;