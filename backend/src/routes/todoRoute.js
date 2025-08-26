const express = require("express");

const router = express.Router();

router
  .route("/todos")
  .get((req, res) => {
    res.status(200).json({ message: "success" });
  })
  .post((req, res) => {
    res.status(201).json({ message: "success" });
  });

module.exports = router;
