const express = require('express');
const router = express.Router();
const controlArticles = require("../controllers/controlArticle");
const controlerUser = require("../controllers/controlerUser");
const adminAuth=require("../middleware/adminAuth");


//http://localhost:5000/articles
router.get("/",controlArticles.allBlogs);

//http://localhost:5000/articles
router.post("/addArticles",controlArticles.saveArticle);

//http://localhost:5000/articles/ca
router.put("/:title",controlArticles.updateArticle);

//http://localhost:5000/articles/aaaa
router.delete("/:title",adminAuth,controlArticles.deleteArticle);

//http://localhost:5000/articles/addComment/c
router.post("/addComment/:title",controlArticles.addCommentArticle);

//http://localhost:5000/articles/deleteComment/c
router.post("/deleteComment/:title",adminAuth,controlArticles.deleteCommentArticle);



module.exports = router