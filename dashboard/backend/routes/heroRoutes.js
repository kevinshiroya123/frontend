const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const HeroContent = require('../model/HeroContent');
const multer = require('multer');
const upload = require('../routes/upload'); // Updated middleware path


// Dynamic portfolio download route
router.get('/portfolio/download', async (req, res) => {
  try {
    // Fetch portfolio name from the database
    const content = await HeroContent.findOne();
    if (!content || !content.portfolio) {
      return res.status(404).send({ error: 'Portfolio file not found in database' });
    }

    // Resolve the file path
    const filePath = path.resolve(__dirname, '../uploads', content.portfolio);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('File not found:', err);
        return res.status(404).send({ error: 'File not found' });
      }

      // Serve the file
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error serving file:', err);
          res.status(500).send({ error: 'Error serving file' });
        }
      });
    });
  } catch (err) {
    console.error('Error fetching portfolio file:', err);
    res.status(500).send({ error: 'Failed to retrieve portfolio file', details: err.message });
  }
});
  
// GET: Retrieve Hero Content
router.get('/', async (req, res) => {
    try {
      const content = await HeroContent.findOne(); // Fetch the single entry
      res.json(content || {}); // Return empty object if no entry exists
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve content', details: err.message });
    }
  });


  // Upload a file and store its path in the database
  router.post('/upload', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      const filePath = `${req.file.filename}`; // Path relative to `uploads` folder
      res.json({ message: 'File uploaded successfully', filePath });
    } catch (err) {
      res.status(500).json({ error: 'File upload failed', details: err.message });
    }
  });
  
  // Update hero content and include file paths
  router.post('/update', async (req, res) => {
    try {
      const updatedContent = await HeroContent.findOneAndUpdate(
        {}, // Match any document
        { $set: req.body }, // Update with new data
        { upsert: true, new: true } // Create if not exists, return the updated document
      );
      res.json({ message: 'Content updated successfully', updatedContent });
    } catch (err) {
      res.status(500).json({ error: 'Failed to update content', details: err.message });
    }
  });
  
  module.exports = router;
  