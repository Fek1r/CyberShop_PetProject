# 📘 README: Flask Backend + Docker

## 📌 Project Description

This project is a REST API built with Flask that implements a booking system backed by PostgreSQL. It supports:

- Creating bookings
- Fetching available time slots for a given day

The backend follows a Model-Controller architecture and is fully containerized with Docker.

---

## 🧱 Architecture

**Model-Controller (MC)**:
- **Model** — SQLAlchemy ORM models
- **Controller** — Blueprint routes and logic

**Project structure:**
```
backend/
├── app.py                  # Entry point
├── config.py               # Flask configuration
├── database.py             # SQLAlchemy init
├── requirements.txt        # Python dependencies
├── Dockerfile              # Container build instructions
├── docker-compose.yml      # Launch Flask + PostgreSQL
├── models/
│   └── order.py            # Order model
├── controllers/
│   └── order_controller.py # API logic
```

---

## 🔌 Local Installation

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python app.py
```

---

## 🔗 API Endpoints

### `POST /orders`
Create a new order.

**Sample request body:**
```json
{
  "firstName": "Ivan",
  "lastName": "Ivanov",
  "contact": "+79991234567",
  "orderType": "consultation",
  "startTime": "2025-04-10T10:00:00",
  "endTime": "2025-04-10T11:00:00"
}
```

**Response (201):**
```json
{
  "message": "Order created successfully",
  "order": { ... }
}
```

### `GET /available-times?date=YYYY-MM-DD&duration=N`
Fetch available time slots for a specific day.

**Example:**
```
GET /available-times?date=2025-04-10&duration=1
```
**Response:**
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

### ⏱ Wait for PostgreSQL
Add this to `app.py` before database initialization:
```python
import time
time.sleep(5)
```

---

## 🚀 Running with Docker

```bash
docker-compose down
docker-compose up --build
```

The app will be available at:
```
http://localhost:5003
```

---

## 💡 Ideas for Improvement
- JWT authentication
- Swagger / OpenAPI docs
- Validation via Pydantic
- Admin panel & role management
- Email / SMS notifications

---

## ✅ Final Notes

This backend is production-ready and easily extendable. With modular architecture and containerized deployment, it’s an ideal base for online services or internal tools.

