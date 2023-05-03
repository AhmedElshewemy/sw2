const express = require('express');
const router = express.Router();
const controlArticles = require("../controllers/controlArticle")




router.get("/",controlArticles.allBlogs);



router.post("/",controlArticles.saveArticle);


module.exports = router