const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Function to remove slashes from a string
const removeSlashes = (str = '') => str.replace(/^\/+|\/+$/g, '');

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const filepath = removeSlashes(req.baseUrl || 'default').toLowerCase();
        const uploadDir = `uploads/${filepath}`;

        // Ensure directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        console.log("Final Upload Path:", uploadDir); // Debugging
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

// Function to get the file path
const uploadPath = (req, filename) => {
    return `uploads/${removeSlashes(req.baseUrl || 'default').toLowerCase()}/${filename}`;
};

// Multer Upload Middleware
const upload = multer({ storage });

module.exports = { uploadPath, upload };
