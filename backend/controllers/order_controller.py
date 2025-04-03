from flask import Blueprint, request, jsonify
from models.order import Order
from database import db
from datetime import datetime, timedelta

order_bp = Blueprint('order_bp', __name__)

@order_bp.route('/orders', methods=['POST'])
def create_order():
    data = request.json
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    contact = data.get('contact')
    order_type = data.get('orderType')
    start_time = datetime.fromisoformat(data.get('startTime'))
    end_time = datetime.fromisoformat(data.get('endTime'))

    overlapping_orders = Order.query.filter(
        Order.start_time < end_time,
        Order.end_time > start_time
    ).all()

    if overlapping_orders:
        return jsonify({"error": "Selected time slot is already taken"}), 400

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


@order_bp.route('/available-times', methods=['GET'])
def get_available_times():
    date = request.args.get('date')
    duration = int(request.args.get('duration'))

    if not date or not duration:
        return jsonify({"error": "Missing date or duration"}), 400

    start_of_day = datetime.fromisoformat(f"{date}T00:00:00")
    end_of_day = datetime.fromisoformat(f"{date}T23:59:59")
    interval = timedelta(hours=duration)

    all_times = []
    hour = 10
    while True:
        start_time = start_of_day + timedelta(hours=hour)
        end_time = start_time + interval

        if end_time > end_of_day:
            break

        all_times.append({"start": start_time, "end": end_time})
        hour += 1

    orders = Order.query.filter(
        Order.start_time >= start_of_day,
        Order.end_time <= end_of_day
    ).all()

    taken_times = [{"start": order.start_time, "end": order.end_time} for order in orders]

    available_times = [
        slot for slot in all_times
        if not any(
            taken['start'] < slot['end'] and taken['end'] > slot['start']
            for taken in taken_times
        )
    ]

    available_times_iso = [
        {"start": slot["start"].isoformat(), "end": slot["end"].isoformat()}
        for slot in available_times
    ]

    return jsonify(available_times_iso)
