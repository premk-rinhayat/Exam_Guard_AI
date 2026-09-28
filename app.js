const express = require("express");
const app = express();
const port = 8080;

const candidateRoutes = require("./routes/candidateRoutes");
const adminRoutes = require("./routes/adminRoutes");
const superAdminRoutes = require("./routes/superAdminRoutes");
const technicalRoutes = require("./routes/technicalRoutes");
const apiRoutes = require("./routes/apiRoutes");


app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/candidate", candidateRoutes);
app.use("/admin", adminRoutes);
app.use("/technical", technicalRoutes);
app.use("/superadmin", superAdminRoutes);
app.use("/api", apiRoutes);

// Demo data 
const users = require("./data/users.json");
const exams = require("./data/exams.json");



app.get("/", (req, res) => {
    res.render("home", { users, exams });
});

app.listen(port, () => {
    console.log(`app listening on port: ${port}`);
});



// GET    /api/exams
// GET    /api/candidates
// GET    /api/incidents
// GET    /api/system/status

// POST   /api/incidents

// PATCH  /api/incidents/:id
// PATCH  /api/candidates/:id/status