const express = require("express");
const router = express.Router();

const exams = require("../data/exams.json");
const candidates = require("../data/candidates.json");
const incidents = require("../data/incidents.json");

// Interact with computer file system
const fs = require("fs");

router.use(express.json()); // Read the json data
// 1. URL-encoded data ko parse karne ke liye middleware add karein
router.use(express.urlencoded({ extended: true }));

router.get("/exams", (req, res) => {
    // res.send("api routes : exam working");
    res.json(exams);
});

// gives data to frontend: admin.js
router.get("/candidates", (req, res) => {
    res.json(candidates);
});

// Gives incidents data to frontend
router.get("/incidents", (req, res) => {
    res.json(incidents);
});

// Create new incident
router.post("/incidents", (req, res) => {

    const nextId = `INC${String(incidents.length + 1).padStart(3, "0")}`;

    const newIncident = {
        ...req.body,
        id: nextId
    };

    incidents.push(newIncident);

    fs.writeFileSync(  // incidents.json update
        "./data/incidents.json",
        JSON.stringify(incidents, null, 2)
    );

    // console.log(newIncident);

    res.json({
        message: "Incident created successfully",
        incident: newIncident
    });
});


module.exports = router;


// GET    /api/exams
// GET    /api/candidates
// GET    /api/incidents
// GET    /api/system/status

// POST   /api/incidents

// PATCH  /api/incidents/:id
// PATCH  /api/candidates/:id/status