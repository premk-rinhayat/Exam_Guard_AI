const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
    res.send("Admin Dashboard");
});

router.get("/monitoring", (req, res) => {
    res.render("admin/monitoring");
});

module.exports = router;