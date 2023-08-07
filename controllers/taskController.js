const TaskController = {};
const models = require("../models/index");

//IMPORTAMOS FUNCIONES ORM DE SEQUELIZE
const { Op } = require("sequelize");

/////  C R U D    E N D - P O I N T S  F U N C T I O N S //////

// GET ALL TASKS

TaskController.getall = async (req, res) => {
  try {
    let resp = await models.task.findAll({
      order: [["createdAt", "DESC"]],
    });

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

    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ error: "No se pudo crear la tarea" });
  }
};

// UPDATE TASK

TaskController.edittask = async (req, res) => {
  try {
    const { id, title, description, status, category } = req.body;

    const task = await models.task.findOne({ where: { id_task: id } });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.title = title;
    task.description = description;
    task.status = status;
    task.category = category;
    await task.save();

    res.status(200).json({ message: "Task successfully updated" });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Error updating the task" });
  }
};

// DELETE TASK FROM DATABASE

TaskController.deletetask = async (req, res) => {
  try {
    let id = req.body.id;
    let resp = await models.task.destroy({
      where: { id_task: id },
    });

    if (resp == 1) {
      res.send("Task has been deleted");
    } else {
      res.send("Task could not be deleted");
    }
  } catch (err) {
    res.send(err);
  }
};

//ADD CATEGORY

TaskController.addcategory = async (req, res) => {
  try {
    const { taskId, category } = req.body;

    if (!taskId) {
      return res
        .status(400)
        .json({
          error:
            "Se requiere un ID de tarea válido en el cuerpo de la solicitud",
        });
    }

    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: "No se encontró la tarea" });
    }

    task.category = category;
    await task.save();

    return res
      .status(200)
      .json({ message: "Categoría agregada correctamente a la tarea" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Error al agregar la categoría a la tarea" });
  }
};

module.exports = TaskController;
