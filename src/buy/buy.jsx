import React, { useState, useEffect } from "react";
import axios from "axios";
import "./buy.css";
import Footer from "../footer/footer";

function Buy() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    orderType: "standard",
    orderTypeRoom: "apartment",
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");

  const fetchAvailableTimes = async (orderTypeRoom) => {
    try {
      const response = await axios.get(`http://localhost:5002/available-times/${orderTypeRoom}`);
      setAvailableTimes(response.data);
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  useEffect(() => {
    fetchAvailableTimes(formData.orderTypeRoom);
  }, [formData.orderTypeRoom]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/orders", {
        ...formData,
        orderTime: selectedTime,
      });
      console.log("Order submitted:", response.data);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className="buy-container">
      <h1 className="buy-title">Place Your Order</h1>
      <form className="buy-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            placeholder="Enter your first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            placeholder="Enter your last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Phone Number</label>
          <input
            type="text"
            id="contact"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderType">Room Type</label>
          <select
            id="orderType"
            value={formData.orderType}
            onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
          >
            <option value="Vip Room">VIP Room</option>
            <option value="1 pc Playaer">For 1 pc Player</option>
            <option value="ps5">PS5</option>
          </select>
          <label htmlFor="orderTypeRoom">Order Day</label>
          <select
            id="orderTypeRoom"
            value={formData.orderTypeRoom}
            onChange={(e) => {
              setFormData({ ...formData, orderTypeRoom: e.target.value });
              setSelectedTime(""); // Reset time when room changes
            }}
          >
            <option value="mon">Mon</option>
            <option value="tue">Tue</option>
            <option value="wed">Wed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="orderTime">Time Slot</label>
          <select
            id="orderTime"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="" disabled>
              Select a time slot
            </option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
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
