const TaskController = {};
const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

// CREATE NEW TASK

TaskController.getall = async (req, res) => {
    try {
      const { title, description, status } = req.body;
  
      const newTask = await Task.create({
        title,
        description,
        status,
      });
  
      // Devuelve la tarea creada como respuesta.
      return res.status(201).json(newTask);
    } catch (error) {
      // Si ocurre un error, devuelve una respuesta de error.
      return res.status(500).json({ error: 'No se pudo crear la tarea' });
    }
  };
  

module.exports = TaskController;
