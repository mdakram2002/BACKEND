const express = require('express');
const router = express.Router();


const { localFileUpload, imageUpload, videoUpload, imageSizeReducer} = require("../controllers/fileUpload");
router.post("/imageUpload", imageUpload);
router.post("/localFileUpload", localFileUpload);

router.post("/videoUpload", videoUpload);
router.post("/imageSizeReducer", imageSizeReducer);

module.exports = router;
