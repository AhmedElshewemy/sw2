const User = require("../models/userSchema");

const signUp = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    age: req.body.age,
  });
};

const signIn = (req, res) => {
  console.log( "Hi : " , res.params)
  User.findOne({  email : req.params.email}, (err, user) => {
    if (err) {
      //console.error("HI");
      res.status(500).json("MedoZ");
    } else {
      //console.log(user);
      res.status(500).json(user);
    }
  });
};

const signOut = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};
const wellcome = (req,res) => {
  console.log("HI");
}

module.exports = {
    signUp,
    signIn,
    signOut,
    wellcome
};
