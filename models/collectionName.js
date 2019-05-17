/*****************|
|*  DEPENDECIES  *|
|*****************/
//  MongoDB object modeling tool
const mongoose = require("mongoose");

/******************|
|* INITIALIZATION *| 
|******************/
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

/**********|
|* SCHEMA *| 
|**********/
// Create Schema for collectionNameSchema
const User = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

User.statics.findByEmail = (email, cb) => { return this.find({ email }, cb); };

/***********|
|* EXPORTS *| 
|***********/
module.exports = mongoose.model("User", User);
