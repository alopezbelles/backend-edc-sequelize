const express = require("express");
const router = express.Router();

//Importamos Routes definidas en routes

const TaskRoutes = require("./routes/taskRoutes");

// End-points CRUD Tasks

router.use("/tasks", TaskRoutes);

module.exports = router;
