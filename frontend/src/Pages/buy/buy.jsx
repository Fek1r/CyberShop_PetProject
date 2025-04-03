import React, { useState, useEffect} from "react";
import axios from "axios";
import "./buy.css";
import Footer from "../../components/footer/footer.jsx";

function Buy() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    orderType: "VIP Room",
  });
  const [date, setDate] = useState(""); // Для выбора даты
  const [duration, setDuration] = useState(1); // Для выбора длительности аренды (в часах)
  const [availableTimes, setAvailableTimes] = useState([]); // Доступные временные интервалы
  const [selectedTime, setSelectedTime] = useState(""); // Выбранное время начала

  const fetchAvailableTimes = async () => {
    if (!date || !duration) return;

    try {
      const response = await axios.get(
        `http://localhost:5003/available-times?date=${date}&duration=${duration}`
      );
      setAvailableTimes(response.data);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  useEffect(() => {
    if (date && duration) {
      fetchAvailableTimes();
    }
  }, [date, duration]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }

    const selectedSlot = availableTimes.find((slot) => slot.start === selectedTime);
    if (!selectedSlot) {
      alert("Invalid time slot selected.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5003/orders", {
        ...formData,
        startTime: selectedSlot.start,
        endTime: selectedSlot.end,
      });
      console.log({response});
      console.log("Order submitted:", response.data);
      alert("Order successfully submitted!");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Error submitting order. Please try again.");
    }
  };

  return (
    <div className="buy-container">
      <h1 className="buy-title">Place Your Order</h1>
      <form className="buy-form" onSubmit={handleSubmit}>
        {/* Имя */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="Enter your first name"
            required
          />
        </div>
        {/* Фамилия */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Enter your last name"
            required
          />
        </div>
        {/* Контакт */}
        <div className="form-group">
          <label htmlFor="contact">Phone Number</label>
          <input
            type="text"
            id="contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            placeholder="Enter your phone number"
            required
          />
        </div>
        {/* Тип заказа */}
        <div className="form-group">
          <label htmlFor="orderType">Room Type</label>
          <select
            id="orderType"
            value={formData.orderType}
            onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
          >
            <option value="VIP Room">VIP Room</option>
            <option value="1 PC Player">For 1 PC Player</option>
            <option value="PS5">PS5</option>
          </select>
        </div>
        {/* Дата */}
        <div className="form-group">
          <label htmlFor="date">Order Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        {/* Длительность */}
        <div className="form-group">
          <label htmlFor="duration">Duration (in hours)</label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
          >
            <option value={1}>1 hour</option>
            <option value={2}>2 hours</option>
            <option value={3}>3 hours</option>
            <option value={4}>4 hours</option>
            <option value={5}>5 hours</option>
            <option value={6}>6 hours</option>
          </select>
        </div>
        {/* Доступные временные слоты */}
        <div className="form-group">
          <label htmlFor="orderTime">Available Time Slots</label>
          <select
            id="orderTime"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a time slot
            </option>
            {availableTimes.map((slot) => (
              <option key={slot.start} value={slot.start}>
                {new Date(slot.start).toLocaleTimeString()} - {new Date(slot.end).toLocaleTimeString()}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit Order
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Buy;
