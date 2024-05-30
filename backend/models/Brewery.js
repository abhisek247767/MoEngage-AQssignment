// models/Brewery.js
const mongoose = require('mongoose');

const BrewerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  phone: { type: String },
  website_url: { type: String }
});

module.exports = mongoose.model('Brewery', BrewerySchema);
