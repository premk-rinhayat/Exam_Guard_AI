const express = require("express");
const router = express.Router();

const exams = require("../data/exams.json");

router.get("/exams", (req, res) => {
    // res.send("api routes : exam working");
    res.json(exams);
});

module.exports = router;