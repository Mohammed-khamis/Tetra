const express = require('express');

const router = express.Router();

router.get("/create-or-update-user", (req, res) => {
    res.json({
      data: "Hi, you are create-or-update-user:)",
    });
  });

  module.exports= router;