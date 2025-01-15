from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

# Конфигурация базы данных PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:10021711@localhost:5433/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Модель заказа
class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    contact = db.Column(db.String(50), nullable=False)
    order_type = db.Column(db.String(50), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)

# Создание базы данных
with app.app_context():
    db.create_all()

# API для добавления заказа
@app.route('/orders', methods=['POST'])
def create_order():
    data = request.json
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    contact = data.get('contact')
    order_type = data.get('orderType')
    start_time = datetime.fromisoformat(data.get('startTime'))
    end_time = datetime.fromisoformat(data.get('endTime'))

    # Проверяем доступность времени
    overlapping_orders = Order.query.filter(
        Order.start_time < end_time,
        Order.end_time > start_time
    ).all()

    if overlapping_orders:
        return jsonify({"error": "Selected time slot is already taken"}), 400

    # Добавляем заказ
    new_order = Order(
        first_name=first_name,
        last_name=last_name,
        contact=contact,
        order_type=order_type,
        start_time=start_time,
        end_time=end_time
    )
    db.session.add(new_order)
    db.session.commit()

    return jsonify({"message": "Order created successfully", "order": {
        "id": new_order.id,
        "firstName": new_order.first_name,
        "lastName": new_order.last_name,
        "contact": new_order.contact,
        "orderType": new_order.order_type,
        "startTime": new_order.start_time.isoformat(),
        "endTime": new_order.end_time.isoformat()
    }}), 201

# API для получения доступных временных слотов
@app.route('/available-times', methods=['GET'])
def get_available_times():
    date = request.args.get('date')
    duration = int(request.args.get('duration'))

    if not date or not duration:
        return jsonify({"error": "Missing date or duration"}), 400

    start_of_day = datetime.fromisoformat(f"{date}T00:00:00")
    end_of_day = datetime.fromisoformat(f"{date}T23:59:59")
    interval = timedelta(hours=duration)

    # Создаем список всех временных интервалов
    all_times = []
    hour = 10
    while True:
        start_time = start_of_day + timedelta(hours=hour)
        end_time = start_time + interval

        if end_time > end_of_day:
            break

        all_times.append({"start": start_time, "end": end_time})
        hour += 1

    # Получаем занятые временные интервалы из базы данных
    orders = Order.query.filter(
        Order.start_time >= start_of_day,
        Order.end_time <= end_of_day
    ).all()

    taken_times = [{"start": order.start_time, "end": order.end_time} for order in orders]

    # Фильтруем доступные временные интервалы
    available_times = [
        slot for slot in all_times
        if not any(
            taken['start'] < slot['end'] and taken['end'] > slot['start']
            for taken in taken_times
        )
    ]

    # Преобразуем даты в строковый формат ISO
    available_times_iso = [
        {"start": slot["start"].isoformat(), "end": slot["end"].isoformat()}
        for slot in available_times
    ]

    return jsonify(available_times_iso)

# Запуск сервера
if __name__ == '__main__':
    app.run(debug=True, port=5003)
