const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 5002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Настройка подключения к PostgreSQL
const pool = new Pool({
  user: "postgres", // замените на вашего пользователя
  host: "localhost",
  database: "postgres", // замените на вашу базу данных
  password: "10021711", // замените на ваш пароль
  port: 5433,
});

// API для добавления заказа
app.post("/orders", async (req, res) => {
  const { firstName, lastName, contact, orderType, orderTypeRoom } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO orders (first_name, last_name, contact, order_type, order_type_room) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [firstName, lastName, contact, orderType, orderTypeRoom]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating order");
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
