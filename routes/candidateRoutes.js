const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
    res.send("Candidate Dashboard");
});

module.exports = router;