# 📘 README: Flask Backend + Docker (на русском языке)

... (остальное содержимое как выше)

---

## 🧩 Диаграмма связей сущностей (ERD)

### 📚 Таблицы и связи

```
┌──────────────┐         ┌────────────┐        ┌─────────────────┐
│  customers   │         │ order_types│        │     orders      │
├──────────────┤         ├────────────┤        ├─────────────────┤
│ id (PK)      │◄────┐   │ id (PK)    │◄──┐    │ id (PK)         │
│ first_name   │     └──▶│ type_name  │   └───▶│ customer_id (FK)│
│ last_name    │          └───────────┘        │ order_type_id(FK)│
│ contact      │                               │ start_time       │
└──────────────┘                               │ end_time         │
                                               └──────────────────┘
```

---

## 📘 Описание таблиц

### 1. `customers`
Хранит данные о клиентах.

| Колонка      | Тип          | Ограничения         |
|--------------|--------------|---------------------|
| `id`         | SERIAL       | PRIMARY KEY         |
| `first_name` | VARCHAR(50)  | NOT NULL            |
| `last_name`  | VARCHAR(50)  | NOT NULL            |
| `contact`    | VARCHAR(20)  | NOT NULL            |

---

### 2. `order_types`
Справочник типов заказов.

| Колонка     | Тип          | Ограничения              |
|-------------|--------------|--------------------------|
| `id`        | SERIAL       | PRIMARY KEY              |
| `type_name` | VARCHAR(50)  | NOT NULL, UNIQUE         |

📥 **Пример заполнения:**
```sql
INSERT INTO order_types (type_name) 
VALUES ('Online'), ('Offline'), ('Hybrid');
```

---

### 3. `orders`
Основная таблица заказов, ссылается на клиентов и типы заказов.

| Колонка         | Тип        | Ограничения                       |
|------------------|------------|----------------------------------|
| `id`             | SERIAL     | PRIMARY KEY                      |
| `customer_id`    | INT        | NOT NULL, FK → customers(id)     |
| `order_type_id`  | INT        | NOT NULL, FK → order_types(id)   |
| `start_time`     | TIMESTAMP  | NOT NULL                         |
| `end_time`       | TIMESTAMP  | NOT NULL                         |

---

## 🔗 Связи между таблицами

- `orders.customer_id → customers.id`
- `orders.order_type_id → order_types.id`

---

## 💡 Пример SQL-запроса с JOIN

```sql
SELECT
  o.id,
  c.first_name,
  c.last_name,
  ot.type_name,
  o.start_time,
  o.end_time
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_types ot ON o.order_type_id = ot.id;
```

---

## ✅ Примечание
Данная ER-диаграмма отражает структуру базы данных, предназначенной для системы бронирования, с учётом справочников типов и учёта клиентов.

