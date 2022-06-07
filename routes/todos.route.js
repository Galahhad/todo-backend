const { Router } = require("express");
const { todosController } = require("../controllers/todos.controller");

const router = Router();

router.post("/todos", todosController.postTodo);
router.delete("/todos/:id", todosController.deleteTodo);
router.patch("/todos/:id", todosController.patchTodo);
router.get("/todos", todosController.getTodos);
router.get("/todos/:id", todosController.getTodosById);

module.exports = router;
