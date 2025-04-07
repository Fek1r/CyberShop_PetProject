# 📘 README: Flask Backend + Docker (latviešu valodā)

... (содержание как было выше)

---

## 🧩 Entity Relationship Diagram (ERD)

### 📚 Tabulas un attiecības

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

## 📘 Tabulu apraksts

### 1. `customers`
Glabā klientu datus.

| Kolonna      | Tips         | Ierobežojumi          |
|--------------|--------------|------------------------|
| `id`         | SERIAL       | PRIMARY KEY            |
| `first_name` | VARCHAR(50)  | NOT NULL               |
| `last_name`  | VARCHAR(50)  | NOT NULL               |
| `contact`    | VARCHAR(20)  | NOT NULL               |

---

### 2. `order_types`
Pasūtījuma tipu vārdnīca.

| Kolonna     | Tips         | Ierobežojumi           |
|-------------|--------------|------------------------|
| `id`        | SERIAL       | PRIMARY KEY            |
| `type_name` | VARCHAR(50)  | NOT NULL, UNIQUE       |

📥 **Piemērs datu ievadei:**
```sql
INSERT INTO order_types (type_name) 
VALUES ('Online'), ('Offline'), ('Hybrid');
```

---

### 3. `orders`
Galvenā pasūtījumu tabula, kas sasaistās ar klientiem un tipu vārdnīcu.

| Kolonna         | Tips       | Ierobežojumi                          |
|------------------|------------|--------------------------------------|
| `id`             | SERIAL     | PRIMARY KEY                          |
| `customer_id`    | INT        | NOT NULL, FK → customers(id)         |
| `order_type_id`  | INT        | NOT NULL, FK → order_types(id)       |
| `start_time`     | TIMESTAMP  | NOT NULL                             |
| `end_time`       | TIMESTAMP  | NOT NULL                             |

---

## 🔗 Attiecības starp tabulām

- `orders.customer_id → customers.id`
- `orders.order_type_id → order_types.id`

---

## 💡 SQL pieprasījuma piemērs ar JOIN

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

## ✅ Piezīme
Šī ERD struktūra ir pielāgota, lai nodrošinātu pilnvērtīgu rezervāciju sistēmu ar uzskaiti par klientiem un pasūtījumu tipiem.

