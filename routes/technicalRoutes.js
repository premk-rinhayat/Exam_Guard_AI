const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
    res.send("Technical Dashboard");
});

module.exports = router;