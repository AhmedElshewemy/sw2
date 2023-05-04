const express = require('express');
const router = express.Router();
const controlArticles = require("../controllers/controlArticle");
const controlerUser = require("../controllers/controlerUser");


//blogs
router.get("/",controlArticles.allBlogs);

router.post("/",controlArticles.saveArticle);

router.put("/:title",controlArticles.updateArticle);

router.delete("/:title",controlArticles.deleteArticle);

router.post("/addComment/:title",controlArticles.addCommentArticle);

//users
router.post("/users",controlerUser.saveUser);

router.get("/users",controlerUser.getAllUsers);

router.delete("/users/:name",controlerUser.deleteUser);

router.put("/users/:name",controlerUser.updateUser);



module.exports = router