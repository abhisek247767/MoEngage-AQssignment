// routes/reviews.js
const express = require('express');
const Review = require('../models/Review');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/brewery/:breweryId', async (req, res) => {
  try {
    const reviews = await Review.find({ breweryId: req.params.breweryId }).populate('userId', 'username');
    res.json(reviews);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.post('/add', auth, async (req, res) => {
  const { breweryId, rating, description } = req.body;
  try {
    const review = new Review({
      userId: req.user.userId,
      breweryId,
      rating,
      description
    });
    await review.save();
    res.status(201).send('Review added');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
