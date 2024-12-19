const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the primary destination folder
    const primaryDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(primaryDir)) {
      fs.mkdirSync(primaryDir, { recursive: true }); // Create the directory if it doesn't exist
    }
    cb(null, primaryDir);
  },
  filename: (req, file, cb) => {
    const primaryDir = path.join(__dirname, '../uploads');
    const secondaryDir = path.join(__dirname, '../../../main/backend/uploads'); // Secondary path
    const primaryFilePath = path.join(primaryDir, file.originalname);
    const secondaryFilePath = path.join(secondaryDir, file.originalname);

    // Check if file exists in both locations and remove it
    if (fs.existsSync(primaryFilePath)) {
      fs.unlinkSync(primaryFilePath); // Delete the existing file from the primary location
    }
    if (!fs.existsSync(secondaryDir)) {
      fs.mkdirSync(secondaryDir, { recursive: true }); // Ensure secondary directory exists
    }
    if (fs.existsSync(secondaryFilePath)) {
      fs.unlinkSync(secondaryFilePath); // Delete the existing file from the secondary location
    }

    cb(null, file.originalname);

    // Save to the secondary location after multer writes to the primary location
    setTimeout(() => {
      fs.copyFile(primaryFilePath, secondaryFilePath, (err) => {
        if (err) {
          console.error('Error copying file to secondary location:', err);
        } else {
          console.log(`File copied to secondary location: ${secondaryFilePath}`);
        }
      });
    }, 100); // Add a slight delay to ensure the primary write is complete
  },
});

// File filter to allow specific file types
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/') || file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
