const express = require("express");
const router = express.Router();

//Importamos modelo de datos
const TaskController = require("../controllers/taskController");

///// C R U D   B O O K S  /////

router.get("/getall", TaskController.getall);


module.exports = router;
