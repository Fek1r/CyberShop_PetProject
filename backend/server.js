const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 5003;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Настройка подключения к PostgreSQL
const pool = new Pool({
  user: "postgres", // Ваш пользователь PostgreSQL
  host: "localhost",
  database: "postgres", // Имя базы данных
  password: "10021711", // Ваш пароль PostgreSQL
  port: 5433, // Порт PostgreSQL
});

// API для добавления заказа
app.post("/orders", async (req, res) => {
  const { firstName, lastName, contact, orderType, startTime, endTime } = req.body;

  try {
    // Проверяем доступность времени
    const timeCheck = await pool.query(
      "SELECT * FROM orders WHERE (start_time, end_time) OVERLAPS ($1::TIMESTAMP, $2::TIMESTAMP)",
      [startTime, endTime]
    );

    if (timeCheck.rows.length > 0) {
      return res.status(400).send("Selected time slot is already taken");
    }

    // Добавляем заказ
    const result = await pool.query(
      "INSERT INTO orders (first_name, last_name, contact, order_type, start_time, end_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [firstName, lastName, contact, orderType, startTime, endTime]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating order");
  }
});

// API для получения доступных временных слотов
app.get("/available-times", async (req, res) => {
  const { date, duration } = req.query;

  const startOfDay = new Date(`${date}T00:00:00Z`);
  const endOfDay = new Date(`${date}T23:59:59Z`);
  const allTimes = [];
  const interval = parseInt(duration); // Длительность заказа в часах

  for (let hour = 10; hour <= 18; hour++) {
    const start = new Date(startOfDay);
    start.setHours(hour, 0, 0, 0);

    const end = new Date(start);
    end.setHours(start.getHours() + interval);

    if (end > endOfDay) break;

    allTimes.push({ start: start.toISOString(), end: end.toISOString() });
  }

  try {
    const result = await pool.query(
      "SELECT start_time, end_time FROM orders WHERE start_time >= $1 AND end_time <= $2",
      [startOfDay, endOfDay]
    );

    const takenTimes = result.rows;

    const availableTimes = allTimes.filter((timeSlot) => {
      return !takenTimes.some((taken) => {
        return (
          new Date(timeSlot.start) < new Date(taken.end_time) &&
          new Date(timeSlot.end) > new Date(taken.start_time)
        );
      });
    });

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
