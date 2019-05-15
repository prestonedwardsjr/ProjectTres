const router = require("express").Router();
const collectionNameController = require("../../controllers/collectionNameController.js");

router.route("/")  
  .post((req,res)=>{
      console.log("hello from the backend")
      res.send("authorize")
  }) 

module.exports = router;
