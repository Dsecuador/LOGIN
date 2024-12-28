import Task from "../models/task.model.js";

// VER TODOS
export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id
  }).populate ('user')
  res.json(tasks);
};

//CREAR
export const createTask = async (req, res) => {
  const {title, description, date} = req.body;

  console.log(req.user)

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id
  });
  const saveTask = await newTask.save();
  res.json(saveTask);
};

// VER UN ESPECIFICO
export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate('user');
  if(!task) return res.status(404).json ({message: 'Task no encontrada'})
  res.json(task)
};

// BORRAR
export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id)
  if(!task) return res.status(404).json ({message: 'Task  DELETE no encontrada'})
  return res.sendStatus(204);
};

// ACTUALIZAR
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true})
  if(!task) return res.status(404).json ({message: 'Task UPDATE no encontrada'})
  res.json(task)
};

