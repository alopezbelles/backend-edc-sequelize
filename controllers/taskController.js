const TaskController = {};
const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

// GET ALL TASKS

TaskController.getall = async (req, res) => {
  try {
    let resp = await models.task.findAll({});

    res.send(resp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error when obtaining the task list." });
  }
};

// CREATE NEW TASK

TaskController.addtask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const newTask = await models.task.create({
      title,
      description,
      status,
    });

    // Devuelve la tarea creada como respuesta.
    return res.status(201).json(newTask);
  } catch (error) {
    // Si ocurre un error, devuelve una respuesta de error.
    return res.status(500).json({ error: "No se pudo crear la tarea" });
  }
};



module.exports = TaskController;
