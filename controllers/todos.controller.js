const Todo = require("../models/Todo.model");

module.exports.todosController = {
  postTodo: async (req, res) => {
    try {
      const { title, text, completed } = req.body;
      const todo = await Todo.create({
        title,
        text,
        completed,
      });
      res.status(201).json(todo);
    } catch (e) {
      res.json(e);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const data = await Todo.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
  patchTodo: async (req, res) => {
    try {
      const { title, text, completed } = req.body;
      const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        {
          title,
          text,
          completed,
        },
        { new: true }
      );
      res.json(todo);
    } catch (e) {
      res.json(e);
    }
  },
  getTodos: async (req, res) => {
    try {
      const data = await Todo.find();
      const reverse = await data.reverse();
      res.json(reverse);
    } catch (e) {
      res.json(e);
    }
  },
  getTodosById: async (req, res) => {
    try {
      const data = await Todo.findById(req.params.id);
      res.json(data);
    } catch (e) {
      res.json(e);
    }
  },
};
