# 📘 README: Flask Backend + Docker (latviešu valodā)

## 📌 Projekta apraksts

Šis projekts ir REST API, kas veidots ar Flask, un nodrošina rezervāciju sistēmu, izmantojot PostgreSQL datubāzi. Funkcionalitāte ietver:

- Jaunu rezervāciju izveidi
- Pieejamo laika intervālu iegūšanu konkrētai dienai

Backend izmanto Model-Controller (MC) arhitektūru un ir pilnībā konteinerizēts ar Docker.

---

## 🧱 Arhitektūra

**Model-Controller (MC)**:
- **Modelis** — SQLAlchemy ORM datu modeļi
- **Kontrolieris** — Blueprint maršruti un loģika

**Projekta struktūra:**
```
backend/
├── app.py                  # Galvenais sākumpunkts
├── config.py               # Flask konfigurācija
├── database.py             # SQLAlchemy inicializācija
├── requirements.txt        # Python atkarības
├── Dockerfile              # Docker konteineru instrukcijas
├── docker-compose.yml      # Flask + PostgreSQL startēšana
├── models/
│   └── order.py            # Pasūtījuma modelis
├── controllers/
│   └── order_controller.py # API loģika
```

---

## 🔌 Lokālā instalācija

1. Uzinstalē atkarības:
```bash
pip install -r requirements.txt
```

2. Palaid aplikāciju:
```bash
python app.py
```

---

## 🔗 API Beigu punkti

### `POST /orders`
Izveidot jaunu rezervāciju.

**Piemērs pieprasījuma datiem:**
```json
{
  "firstName": "Jānis",
  "lastName": "Bērziņš",
  "contact": "+37120000000",
  "orderType": "konsultācija",
  "startTime": "2025-04-10T10:00:00",
  "endTime": "2025-04-10T11:00:00"
}
```

**Atbilde (201):**
```json
{
  "message": "Order created successfully",
  "order": { ... }
}
```

### `GET /available-times?date=YYYY-MM-DD&duration=N`
Iegūt pieejamos laikus konkrētai dienai.

**Piemērs:**
```
GET /available-times?date=2025-04-10&duration=1
```
**Atbilde:**
```json
[
  { "start": "2025-04-10T10:00:00", "end": "2025-04-10T11:00:00" },
  { "start": "2025-04-10T11:00:00", "end": "2025-04-10T12:00:00" }
]
```

---

## 🐳 Docker un Docker Compose

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

### ⏱ Gaidīšana PostgreSQL startam
Pievieno `app.py` failam pirms inicializācijas:
```python
import time
time.sleep(5)
```

---

## 🚀 Palaišana ar Docker

```bash
docker-compose down
docker-compose up --build
```

Aplikācija būs pieejama:
```
http://localhost:5003
```

---

## 💡 Uzlabojumu idejas
- JWT autentifikācija
- Swagger / OpenAPI dokumentācija
- Validācija ar Pydantic
- Admin panelis un lietotāju lomas
- E-pasta / SMS paziņojumi

---

## ✅ Noslēgums

Šis backend projekts ir gatavs ražošanas izmantošanai un viegli paplašināms. Tas izmanto modulāru arhitektūru un konteinerizētu izvietošanu, kas padara to par lielisku pamatu tiešsaistes servisam vai iekšējai lietotnei.

