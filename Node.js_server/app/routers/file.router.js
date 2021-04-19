let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
 
const fileWorker = require('../controllers/file.controller.js');
 
router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);

module.exports = router;