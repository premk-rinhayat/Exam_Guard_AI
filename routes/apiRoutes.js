const express = require("express");
const router = express.Router();

const exams = require("../data/exams.json");
const candidates = require("../data/candidates.json");
// const incidents = require("../data/incidents.json");

router.get("/exams", (req, res) => {
    // res.send("api routes : exam working");
    res.json(exams);
});

// gives data to frontend: admin.js
router.get("/candidates", (req, res) => {
    res.json(candidates);
});

module.exports = router;


// GET    /api/exams
// GET    /api/candidates
// GET    /api/incidents
// GET    /api/system/status

// POST   /api/incidents

// PATCH  /api/incidents/:id
// PATCH  /api/candidates/:id/status