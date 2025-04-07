# 📘 Frontend Documentation

## 🧱 Архитектура проекта

Проект построен на базе **React** и организован по модульному принципу с использованием современных best practices. Структура папок обеспечивает масштабируемость и легкую навигацию.

```
frontend/
├── public/                   # Статические ресурсы (index.html, favicon и пр.)
├── src/
│   ├── components/           # Переиспользуемые UI-компоненты
│   │   ├── footer/
│   │   └── header/
│   ├── Pages/                # Страницы, соответствующие маршрутам
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
│   ├── App.jsx               # Главный компонент приложения
│   ├── index.jsx             # Точка входа в приложение
│   └── index.css             # Глобальные стили
```

### Потенциальные улучшения:

- Вынести общие UI-компоненты в `shared/` или `ui/`
- Добавить глобальное состояние через Context API, Zustand или Redux
- Вынести работу с API в `services/` или `api/`
- Создать папку `hooks/` для кастомных хуков
- Разделить константы и утилиты по папкам `constants/`, `utils/`
- Добавить `ErrorBoundary`, страницы `404`, `Loading`, `Spinner`
- Подключить юнит-тесты (Jest + RTL)

---

## 📡 API Эндпоинты

### 🔍 `GET /available-times`

**Назначение:** Получение доступных временных интервалов для аренды.

**Пример запроса:**
```http
GET http://localhost:5003/available-times?date=2025-04-07&duration=2
```

**Параметры:**
| Параметр   | Тип     | Описание                               |
|------------|----------|----------------------------------------|
| `date`     | string   | Дата бронирования (формат YYYY-MM-DD) |
| `duration` | number   | Продолжительность в часах              |

**Пример ответа:**
```json
[
  { "start": "14:00", "end": "16:00" },
  { "start": "16:30", "end": "18:30" }
]
```

---

### 📝 `POST /orders`

**Назначение:** Отправка данных заказа на сервер.

**Пример запроса:**
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

**Обработка на фронтенде:**
- Данные формы хранятся в `useState`
- Валидация выбранного времени перед отправкой
- Ответ сервера логируется и отображается через `alert`

---

## 📌 Интересные функции

### 🗺️ Google Maps (Location Page)

**Компонент:** `Pages/location/MapComponent.jsx`

Интеграция с Google Maps через библиотеку [`@react-google-maps/api`](https://www.npmjs.com/package/@react-google-maps/api).

**Особенности:**
- Карта показывает координаты города Рига (`lat: 56.946`, `lng: 24.1059`)
- Используется компонент `GoogleMap` и обертка `LoadScript`
- Визуально сопровождается блоком с часами работы и адресом
- Повторяется `Footer` на странице

**Пример использования:**
```jsx
<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
  <GoogleMap
    mapContainerStyle={{ width: '100%', height: '100%' }}
    center={{ lat: 56.946, lng: 24.1059 }}
    zoom={12}
  />
</LoadScript>
```

🔐 **Важно:** API-ключ рекомендуется хранить в `.env`:
```
REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyDa...
```

---

## ✅ Стек технологий

- **React 18+** — UI библиотека
- **Axios** — HTTP-клиент для работы с API
- **@react-google-maps/api** — интеграция карт Google
- **CSS** — стилизация страниц

---

## 🚧 TODO / Улучшения

- [ ] Вынести API ключ в `.env`
- [ ] Добавить адаптивную вёрстку
- [ ] Реализовать форму обратной связи на странице `contact`
- [ ] Уведомления через toast вместо alert
- [ ] Разделить роутинг по lazy-loading

---

_Документация будет дополняться по мере развития проекта._

