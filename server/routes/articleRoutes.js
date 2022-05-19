// import express
const express = require('express');
// import controller
const { getCantoneseArticles, getEnglishArticles } = require('../controllers/articleControllers');

// set up router
const router = express.Router();

// Get Recent Cantonese Articles
router.get('/articles/zh', getCantoneseArticles);

// Get Recent English Articles 
router.get('/articles', getEnglishArticles);

// express router
module.exports = router;