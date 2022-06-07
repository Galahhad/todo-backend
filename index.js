const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/todos.route"));

const port = 3000;

mongoose
  .connect(
    "mongodb+srv://Galahad:20030909Bella@cluster0.5mvo4.mongodb.net/todo-backend"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Успешное подключение сервера к порту ${port}`);
    });
  })
  .catch((error) => {
    console.log(
      `${error} Произошла ошибка при подключении сервера к порту ${port}`
    );
  });
