const mongoose = require('mongoose');
const HeroContentSchema = new mongoose.Schema({
    image: { type: String, required: true },
    imageFilename: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    socialLinks: {
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      instagram: { type: String },
    },
    welcomeTitle: { type: String, required: true },
    welcomeText: { type: String, required: true },
    aboutMe: { type: String, required: true },
    portfolio: { type: String, required: true },
    portfolioFilename: { type: String, required: true },
  });
  
  module.exports = mongoose.model('HeroContent', HeroContentSchema);
  