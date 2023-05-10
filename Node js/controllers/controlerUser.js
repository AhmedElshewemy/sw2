const User = require("../models/userSchema");
const massage = "Done :)";



const getAllUsers = (req, res) => {
  User.find()
    .then((result) => {
      res.status(200).json(result);
    })

    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = (req, res) => {
  User.deleteOne({ name: req.params.name })
    .then((result) => {
      // console.log(result);
      res.status(200).json(massage);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate({ name: req.params.name }, req.body)
    .then((result) => {
      // console.log(result);
      res.status(200).json(massage);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

module.exports = {
  getAllUsers,
  deleteUser,
  updateUser,
};
