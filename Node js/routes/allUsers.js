const express = require('express');
const router = express.Router();
const controlerUser = require("../controllers/controlerUser");
const adminAuth=require("../middleware/adminAuth");


//http://localhost:5000/users
router.get("/",controlerUser.getAllUsers);

//http://localhost:5000/users/ahmeda
router.delete("/:name",controlerUser.deleteUser);

http://localhost:5000/users/ahmedaa
router.put("/:name",controlerUser.updateUser);

module.exports = router