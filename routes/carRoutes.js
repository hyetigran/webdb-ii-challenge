const express = require("express");

const router = express.Router();

const Car = require("../models/car");

router.get("/", (req, res) => {
  Car.get()
    .then(result => {
      res.status(200).json({ cars: result });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});
