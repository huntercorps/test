const express = require('express');
const router = express.Router();

// import models
const Review = require('../models/reviews');

/// AUTHOR ROUTES ///

// POST request for creating review.
router.post('/', (req, res) => {
    const review = new Review(req.body);
    review.save()
        .then(() => res.json(review))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request for list of all reviews.
router.get('/', (req, res) => {
    Review.find()
        .then( reviews => res.json(reviews))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request for one review by checkin_id.
router.get('/:id', (req, res) => {
    Review.find({checkin_Id: req.params.id})
        .then( review => res.json(review))
        .catch(err => res.status(400).json("Error: " + err))
});
module.exports = router;