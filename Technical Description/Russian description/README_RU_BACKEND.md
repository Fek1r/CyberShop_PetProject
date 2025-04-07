# 📘 README: Flask Backend + Docker

## 📌 Описание проекта

Проект представляет собой REST API на Flask, реализующий систему бронирования с PostgreSQL. Он позволяет:

- Создавать заказы
- Получать список доступных временных интервалов (таймслотов)

Backend структурирован по архитектуре Model-Controller и полностью готов к контейнеризации через Docker.

---

## 🧱 Архитектура

**Model-Controller (MC)**:
- **Model** — ORM-модели SQLAlchemy
- **Controller** — Blueprint-роуты и логика обработки

**Структура проекта:**
```
backend/
├── app.py                  # Точка входа
├── config.py               # Конфигурация Flask
├── database.py             # SQLAlchemy init
├── requirements.txt        # Зависимости Python
├── Dockerfile              # Инструкция сборки контейнера
├── docker-compose.yml      # Подъём Flask + PostgreSQL
├── models/
│   └── order.py            # Модель Order
├── controllers/
│   └── order_controller.py # Роуты и логика API
```

---

## 🔌 Установка и запуск локально

1. Установить зависимости:
```bash
pip install -r requirements.txt
```

2. Запустить приложение:
```bash
python app.py
```

---

## 🔗 API

### `POST /orders`
Создать новый заказ.

**Пример тела запроса:**
```json
{
  "firstName": "Иван",
  "lastName": "Иванов",
  "contact": "+79991234567",
  "orderType": "консультация",
  "startTime": "2025-04-10T10:00:00",
  "endTime": "2025-04-10T11:00:00"
}
```

**Ответ (201):**
```json
{
  "message": "Order created successfully",
  "order": { ... }
}
```

### `GET /available-times?date=YYYY-MM-DD&duration=N`
Получить список доступных слотов.

**Пример:**
```
GET /available-times?date=2025-04-10&duration=1
```
**Ответ:**
```json
[
  { "start": "2025-04-10T10:00:00", "end": "2025-04-10T11:00:00" },
  { "start": "2025-04-10T11:00:00", "end": "2025-04-10T12:00:00" }
]
```

---

## 🐳 Docker & Docker Compose

### 📦 requirements.txt
```txt
Flask
Flask-Cors
Flask-SQLAlchemy
psycopg2-binary
python-dotenv
```

### 📄 Dockerfile
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

### ⚙️ docker-compose.yml
```yaml
services:
  web:
    build: .
    ports:
      - "5003:5003"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/postgres
    depends_on:
      - db
    volumes:
      - .:/app

  db:
    image: postgres:15
    restart: always
    ports:
      - "5440:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### ⚙️ config.py
```python
import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL", "postgresql://postgres:postgres@localhost:5440/postgres"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

### ⏱ Ожидание PostgreSQL
Добавить в `app.py` перед инициализацией БД:
```python
import time
time.sleep(5)
```

---

## 🚀 Запуск через Docker

```bash
docker-compose down
docker-compose up --build
```

Приложение будет доступно по адресу:
```
http://localhost:5003
```

---

## 💡 Идеи для улучшения
- JWT авторизация
- Swagger / OpenAPI
- Валидация через Pydantic
- Админка и роли
- Email / SMS уведомления

---

## ✅ Заключение

Проект готов для локального запуска и деплоя в продакшн-среде. Архитектура проста, расширяема и легко адаптируется под реальные задачи. Отличная база для онлайн-сервиса или внутреннего приложения.

