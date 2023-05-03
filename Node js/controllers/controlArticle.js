const Article = require("../models/blogSchema");




const allBlogs =  (req, res) => {
    Article.find()
      .then((result) => {
        res.render("index", { title: "Home", arrArt: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }


const saveArticle =  (req, res) => {
    const article = new Article(req.body);
    //console.log(req.body)
    article
      .save()
      .then((result) => {
        res.redirect("/all-articles");
      })
      .catch((err) => {
        console.log(err);
      });
  }


module.exports = {
    allBlogs,
    saveArticle
}