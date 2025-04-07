# 📘 README: Flask Backend + Docker (на русском языке)

... (остальное содержимое как выше)

---

## 🧩 Entity Relationship Diagram (ERD)

### 📚 Tables and Relationships

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

## 📘 Table Descriptions

### 1. `customers`
Stores client information.

| Column       | Type         | Constraints         |
|--------------|--------------|---------------------|
| `id`         | SERIAL       | PRIMARY KEY         |
| `first_name` | VARCHAR(50)  | NOT NULL            |
| `last_name`  | VARCHAR(50)  | NOT NULL            |
| `contact`    | VARCHAR(20)  | NOT NULL            |

---

### 2. `order_types`
Reference table for order types.

| Column      | Type         | Constraints              |
|-------------|--------------|--------------------------|
| `id`        | SERIAL       | PRIMARY KEY              |
| `type_name` | VARCHAR(50)  | NOT NULL, UNIQUE         |

📥 **Example insertion:**
```sql
INSERT INTO order_types (type_name) 
VALUES ('Online'), ('Offline'), ('Hybrid');
```

---

### 3. `orders`
Main table for storing orders. References customers and order types.

| Column          | Type        | Constraints                       |
|------------------|------------|----------------------------------|
| `id`             | SERIAL     | PRIMARY KEY                      |
| `customer_id`    | INT        | NOT NULL, FK → customers(id)     |
| `order_type_id`  | INT        | NOT NULL, FK → order_types(id)   |
| `start_time`     | TIMESTAMP  | NOT NULL                         |
| `end_time`       | TIMESTAMP  | NOT NULL                         |

---

## 🔗 Table Relationships

- `orders.customer_id → customers.id`
- `orders.order_type_id → order_types.id`

---

## 💡 SQL JOIN Example

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

## ✅ Note
This ER diagram represents a normalized database schema for a booking system, including reference tables and relationships between orders and clients.
Данная ER-диаграмма отражает структуру базы данных, предназначенной для системы бронирования, с учётом справочников типов и учёта клиентов.

