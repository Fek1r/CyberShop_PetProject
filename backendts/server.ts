import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { AppDataSource } from "./database";
import { Order } from "./entities/Order";
import { Between } from "typeorm";

const app = express();
const PORT = 5003;

app.use(cors());
app.use(bodyParser.json());

// Подключение к базе данных
AppDataSource.initialize()
  .then(() => console.log("📦 Database connected successfully"))
  .catch((err) => console.error("❌ Database connection failed", err));

// 📌 API для создания заказа
app.post("/orders", async (req, res) => {
  try {
    const { firstName, lastName, contact, orderType, startTime, endTime } = req.body;

    // Проверяем доступность времени
    const overlappingOrders = await AppDataSource.getRepository(Order).find({
      where: {
        startTime: Between(new Date(startTime), new Date(endTime)),
        endTime: Between(new Date(startTime), new Date(endTime)),
      },
    });

    if (overlappingOrders.length > 0) {
      return res.status(400).json({ error: "Selected time slot is already taken" });
    }

    // Создаем новый заказ
    const newOrder = AppDataSource.getRepository(Order).create({
      firstName,
      lastName,
      contact,
      orderType,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    });

    await AppDataSource.getRepository(Order).save(newOrder);

    res.status(201).json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// 📌 API для получения доступных временных слотов
app.get("/available-times", async (req, res) => {
  try {
    const { date, duration } = req.query;
    if (!date || !duration) {
      return res.status(400).json({ error: "Missing date or duration" });
    }

    const dateString = date as string;
    const durationHours = parseInt(duration as string);
    const startOfDay = new Date(`${dateString}T00:00:00`);
    const endOfDay = new Date(`${dateString}T23:59:59`);

    const interval = durationHours * 60 * 60 * 1000; // перевод в миллисекунды

    let availableTimes: { start: string; end: string }[] = [];
    let hour = 10; // Начало рабочего дня
    while (true) {
      let startTime = new Date(startOfDay.getTime() + hour * 60 * 60 * 1000);
      let endTime = new Date(startTime.getTime() + interval);

      if (endTime > endOfDay) break;
      availableTimes.push({ start: startTime.toISOString(), end: endTime.toISOString() });
      hour++;
    }

    // Получаем занятые временные интервалы
    const orders = await AppDataSource.getRepository(Order).find({
      where: {
        startTime: Between(startOfDay, endOfDay),
        endTime: Between(startOfDay, endOfDay),
      },
    });

    let takenTimes = orders.map((order) => ({
      start: order.startTime.toISOString(),
      end: order.endTime.toISOString(),
    }));

    // Фильтруем доступные интервалы
    let filteredAvailableTimes = availableTimes.filter((slot) =>
      !takenTimes.some(
        (taken) =>
          new Date(taken.start) < new Date(slot.end) && new Date(taken.end) > new Date(slot.start)
      )
    );

    res.json(filteredAvailableTimes);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// 📌 Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
