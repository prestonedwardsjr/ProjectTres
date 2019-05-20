const router = require("express").Router();
const collectionNameController = require("../../controllers/collectionNameController.js");

router.route("/register") 
  .post(collectionNameController.create) 

  router.route("/login") 
  .post(collectionNameController.findByEmailPassword) 

  router.route("/send") 
 .post(collectionNameController.sendEmail)
module.exports = router;
