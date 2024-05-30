// routes/breweries.js
const express = require('express');
const Brewery = require('../models/Brewery');
const auth = require('../middleware/auth');


const router = express.Router();

// Get breweries
router.get('/', async (req, res) => {
  const { by_city, by_name, by_type } = req.query;
  let query = {};
  if (by_city) query.city = new RegExp(by_city, 'i');
  if (by_name) query.name = new RegExp(by_name, 'i');
  if (by_type) query.type = new RegExp(by_type, 'i');
  try {
    const breweries = await Brewery.find(query);
    res.json(breweries);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Get a specific brewery by ID
router.get('/:id', async (req, res) => {
  try {
    const brewery = await Brewery.findById(req.params.id);
    if (!brewery) {
      return res.status(404).send('Brewery not found');
    }
    res.json(brewery);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Add a new brewery
// Add a new brewery
router.post('/', auth, async (req, res) => {
    const { name, street, city, state, phone, website_url } = req.body;
    try {
      const newBrewery = new Brewery({
        name,
        street,
        city,
        state,
        phone,
        website_url
      });
      await newBrewery.save();
      res.status(201).send('Brewery added');
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
  
module.exports = router;
