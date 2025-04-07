# 📘 Frontend Documentation

## 🧱 Project Architecture

The project is built using **React** and follows a modular structure based on modern best practices. The folder organization ensures scalability and ease of navigation.

```
frontend/
├── public/                   # Static assets (index.html, favicon, etc.)
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── footer/
│   │   └── header/
│   ├── Pages/                # Pages corresponding to routes
│   │   ├── buy/
│   │   ├── contact/
│   │   ├── game/
│   │   ├── head/
│   │   ├── home/
│   │   ├── info/
│   │   ├── location/
│   │   ├── login/
│   │   ├── new-jau/
│   │   ├── profile/
│   │   ├── reservation/
│   │   └── solution/
│   ├── App.jsx               # Main application component
│   ├── index.jsx             # Application entry point
│   └── index.css             # Global styles
```

### Potential Improvements:

- Extract shared UI components into `shared/` or `ui/`
- Add global state management via Context API, Zustand, or Redux
- Separate API logic into `services/` or `api/`
- Create a `hooks/` folder for custom hooks
- Organize constants and utilities in `constants/`, `utils/`
- Add `ErrorBoundary`, `404`, `Loading`, and `Spinner` components
- Integrate unit testing (Jest + RTL)

---

## 📡 API Endpoints

### 🔍 `GET /available-times`

**Purpose:** Retrieve available time slots for booking.

**Sample Request:**
```http
GET http://localhost:5003/available-times?date=2025-04-07&duration=2
```

**Parameters:**
| Parameter   | Type     | Description                              |
|-------------|----------|------------------------------------------|
| `date`      | string   | Booking date (format YYYY-MM-DD)         |
| `duration`  | number   | Duration in hours                        |

**Sample Response:**
```json
[
  { "start": "14:00", "end": "16:00" },
  { "start": "16:30", "end": "18:30" }
]
```

---

### 📝 `POST /orders`

**Purpose:** Submit an order to the server.

**Sample Request:**
```http
POST http://localhost:5003/orders
```

**Payload:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "contact": "+123456789",
  "orderType": "VIP Room",
  "startTime": "14:00",
  "endTime": "16:00"
}
```

**Frontend Logic:**
- Form data stored using `useState`
- Validates selected time before submission
- Server response is logged and shown via `alert`

---

## 📌 Highlight Features

### 🗺️ Google Maps Integration (Location Page)

**Component:** `Pages/location/MapComponent.jsx`

Integration with Google Maps using [`@react-google-maps/api`](https://www.npmjs.com/package/@react-google-maps/api).

**Features:**
- Map centered on Riga (`lat: 56.946`, `lng: 24.1059`)
- Uses `GoogleMap` component with `LoadScript` wrapper
- Includes a working hours block and address section
- Footer component reused at the bottom

**Usage Example:**
```jsx
<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
  <GoogleMap
    mapContainerStyle={{ width: '100%', height: '100%' }}
    center={{ lat: 56.946, lng: 24.1059 }}
    zoom={12}
  />
</LoadScript>
```

🔐 **Important:** Store your API key in `.env`:
```
REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyDa...
```

---

## ✅ Tech Stack

- **React 18+** — UI Library
- **Axios** — HTTP client for API requests
- **@react-google-maps/api** — Google Maps integration
- **CSS** — Page styling

---

## 🚧 TODO / Improvements

- [ ] Move API key to `.env`
- [ ] Add responsive design
- [ ] Implement contact form on `contact` page
- [ ] Use toast notifications instead of alert
- [ ] Apply lazy-loading for route-based code splitting

---

_This documentation will be updated as the project evolves._

