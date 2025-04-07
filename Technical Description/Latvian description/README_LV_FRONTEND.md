# 📘 Frontenda Dokumentācija

## 🧱 Projekta Arhitektūra

Projekts ir veidots, izmantojot **React**, un balstās uz modulāru struktūru, ievērojot mūsdienīgas labākās prakses. Mapju organizācija nodrošina mērogojamību un ērtu navigāciju.

```
frontend/
├── public/                   # Statiskie faili (index.html, favicon utt.)
├── src/
│   ├── components/           # Atkārtoti izmantojami UI komponenti
│   │   ├── footer/
│   │   └── header/
│   ├── Pages/                # Lapas, kas atbilst maršrutiem
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
│   ├── App.jsx               # Galvenais lietotnes komponents
│   ├── index.jsx             # Lietotnes sākumpunkts
│   └── index.css             # Globālie stili
```

### Iespējamie uzlabojumi:

- Izdalīt kopīgus UI komponentus mapē `shared/` vai `ui/`
- Pievienot globālu stāvokļa pārvaldību ar Context API, Zustand vai Redux
- Nodrošināt API loģiku atsevišķā mapē `services/` vai `api/`
- Izveidot mapi `hooks/` pielāgotajiem hookiem
- Organizēt konstantus un utilītus mapēs `constants/`, `utils/`
- Pievienot `ErrorBoundary`, `404`, `Loading`, un `Spinner` komponentus
- Ievietot vienību testēšanu (Jest + RTL)

---

## 📡 API Galapunkti

### 🔍 `GET /available-times`

**Mērķis:** Iegūt pieejamos laika intervālus rezervācijām.

**Pieprasījuma piemērs:**
```http
GET http://localhost:5003/available-times?date=2025-04-07&duration=2
```

**Parametri:**
| Parametrs   | Tips     | Apraksts                                   |
|-------------|----------|---------------------------------------------|
| `date`      | string   | Rezervācijas datums (formāts YYYY-MM-DD)   |
| `duration`  | number   | Ilgums stundās                             |

**Atbildes piemērs:**
```json
[
  { "start": "14:00", "end": "16:00" },
  { "start": "16:30", "end": "18:30" }
]
```

---

### 📝 `POST /orders`

**Mērķis:** Nosūtīt pasūtījuma datus serverim.

**Pieprasījuma piemērs:**
```http
POST http://localhost:5003/orders
```

**Datu piemērs (payload):**
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

**Frontenda loģika:**
- Datu ievade tiek glabāta ar `useState`
- Laika izvēles validācija pirms nosūtīšanas
- Atbildes rezultāts tiek parādīts ar `alert` un izdrukāts konsolē

---

## 📌 Interesantas Funkcijas

### 🗺️ Google Maps Integrācija (Location Page)

**Komponents:** `Pages/location/MapComponent.jsx`

Integrācija ar Google Maps, izmantojot [`@react-google-maps/api`](https://www.npmjs.com/package/@react-google-maps/api).

**Funkcijas:**
- Kartei ir centrs uz Rīgu (`lat: 56.946`, `lng: 24.1059`)
- Tiek izmantots `GoogleMap` komponents ar `LoadScript` aplaušanu
- Lapas daļā redzams darba laiks un adrese
- Lapas apakšā atkārtoti izmantots `Footer` komponents

**Izmantošanas piemērs:**
```jsx
<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
  <GoogleMap
    mapContainerStyle={{ width: '100%', height: '100%' }}
    center={{ lat: 56.946, lng: 24.1059 }}
    zoom={12}
  />
</LoadScript>
```

🔐 **Svarīgi:** API atslēgu vajadzētu uzglabāt `.env` failā:
```
REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyDa...
```

---

## ✅ Tehnoloģiju Steks

- **React 18+** — UI bibliotēka
- **Axios** — HTTP klients API pieprasījumiem
- **@react-google-maps/api** — Google Maps integrācija
- **CSS** — Lapu stili

---

## 🚧 TODO / Uzlabojumi

- [ ] Pārvietot API atslēgu uz `.env`
- [ ] Pievienot responsīvo dizainu
- [ ] Izstrādāt kontaktformu `contact` lapā
- [ ] Aizvietot alert ar toast paziņojumiem
- [ ] Ieviest lazy-loading maršrutu komponentēm

---

_Šī dokumentācija tiks papildināta projekta attīstības gaitā._

