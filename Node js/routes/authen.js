const express = require('express');
const router = express.Router();
const entring = require("../controllers/authen");
const adminAuth=require("../middleware/adminAuth");


//http://localhost:5000/reg/signUp
router.post("/signUp",entring.signUp);
//http://localhost:5000/reg/signIn
router.post("/signIn/:email/:password",entring.signIn);
//http://localhost:5000/reg/signOut
router.get("/signOut",entring.signOut);
router.get("/",entring.wellcome);


module.exports = router;