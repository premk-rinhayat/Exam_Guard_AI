const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
    res.send("Super Admin Dashboard");
});

module.exports = router;