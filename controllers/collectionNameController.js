/**********************|
|*  Imports In model  *|
|**********************/
const db = require("../models");

/***************************|
|*  Methods for controller *|
|***************************/
const CollectionNameController = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.User
      .findByEmail(req.body.email)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmailPassword: function (req, res) {
    db.User
      .find({ email: req.body.email, password: req.body.password })
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    db.User.find({ email: req.body.email })
      .then(dbModel => {
        if (dbModel.length > 0) {
          return res.json({ error: 'That Username Already Exists' })
        }

        db.User
          .create(req.body)
          .then((dbModel) => res.json(dbModel))
          .catch(err => {
            console.log(err)
            res.status(422).json(err)
          });
      })
  },
  update: function (req, res) {
    db.CollectionName
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.CollectionName
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  sendEmail: function (req, res) {
    console.log(req.body)
  }
};

/***********|
|* EXPORTS *|
|***********/
module.exports = CollectionNameController;
