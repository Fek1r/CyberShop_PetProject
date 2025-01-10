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
  user: "postgres", // Замените на вашего пользователя
  host: "localhost",
  database: "postgres", // Замените на вашу базу данных
  password: "10021711", // Замените на ваш пароль
  port: 5433,
});

// API для добавления заказа
app.post("/orders", async (req, res) => {
  const { firstName, lastName, contact, orderType, orderTypeRoom, orderTime } = req.body;
  try {
    // Проверяем доступность времени
    const timeCheck = await pool.query(
      "SELECT * FROM orders WHERE order_type_room = $1 AND order_time = $2",
      [orderTypeRoom, orderTime]
    );

    if (timeCheck.rows.length > 0) {
      return res.status(400).send("Selected time slot is already taken");
    }

    // Добавляем заказ
    const result = await pool.query(
      "INSERT INTO orders (first_name, last_name, contact, order_type, order_type_room, order_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [firstName, lastName, contact, orderType, orderTypeRoom, orderTime]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating order");
  }
});

// API для получения доступных временных слотов
app.get("/available-times/:orderTypeRoom", async (req, res) => {
  const { orderTypeRoom } = req.params;

  const allTimes = [
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
    "18:00-19:00",
  ];

  try {
    const result = await pool.query(
      "SELECT order_time FROM orders WHERE order_type_room = $1",
      [orderTypeRoom]
    );
    const takenTimes = result.rows.map((row) => row.order_time);
    const availableTimes = allTimes.filter((time) => !takenTimes.includes(time));

    res.json(availableTimes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching available times");
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});