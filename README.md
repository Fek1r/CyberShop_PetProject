📘 Project Documentation

🧾 Project Overview

🎯 What is this project?

This project is a full-featured booking system that allows users to reserve services, such as renting VIP rooms or scheduling consultations. It includes a friendly and intuitive frontend interface and a reliable backend API, connected to a relational PostgreSQL database.

Users can browse available time slots, enter their information, and easily make bookings. The system dynamically checks availability, prevents scheduling conflicts, and securely stores all booking data.

🌐 Key Features

📅 Dynamic scheduling check — only available slots are shown based on selected date and duration

🧾 Booking form — easy contact information input and request submission

🗺️ Google Maps integration — location displayed on an interactive map on the "Location" page

🐳 Fully containerized — backend runs with Flask + PostgreSQL inside Docker containers

🛠️ Modular architecture — clear separation between frontend and backend (components, models, controllers)

📊 Normalized database — clean structure with relations between customers, bookings, and service types

🧩 Tech Stack

Layer

Technologies

Frontend

React, Axios, Google Maps API

Backend

Flask, Flask-SQLAlchemy, Flask-CORS

Database

PostgreSQL

DevOps

Docker, Docker Compose

🧱 Project Components

Frontend: React SPA with reusable components and forms

Backend: REST API (Flask) with endpoints for booking creation and availability checking

Database: SQL schema with orders, customers, and order_types tables (visualized via ERD)

🚀 Use Cases

Booking rooms or other physical spaces

Scheduling consultations or appointments

Reserving time slots for services (e.g., training, equipment rental) .............