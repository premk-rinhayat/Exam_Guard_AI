const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
    res.send("Candidate Dashboard");
});

router.get("/exam", (req, res) => {
    res.render("candidate/exam");
});

module.exports = router;