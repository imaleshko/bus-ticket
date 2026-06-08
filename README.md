# Комфорт Бус

Вебзастосунок для пошуку та бронювання автобусних квитків.

## Технології

**Backend:**

- Node.js
- Express
- MongoDB (Mongoose)
- JWT

**Frontend:**

- React
- Vite

**Тести:**

- Cypress

## Можливості

- Реєстрація та авторизація
- Пошук маршрутів за напрямком і датою
- Вибір місця та бронювання квитка
- Особистий кабінет: перегляд персональних даних та куплених квитків

## Вимоги

- Node.js
- npm
- MongoDB

## Запуск

### 1. Backend

```bash
cd backend
npm install
```

Створіть файл `.env` у `backend/`:

```env
PORT=3000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>/<dbname>
ACCESS_SECRET=ваш_секрет_для_access_токена
REFRESH_SECRET=ваш_секрет_для_refresh_токена
CLIENT_URL=http://localhost:5173
```

Запуск у режимі розробки (з автоперезапуском через nodemon):

```bash
npm run dev
```

Або у звичайному режимі:

```bash
npm start
```

Сервер підніметься на `http://localhost:3000`.

### 2. Frontend

```bash
cd frontend
npm install
```

Створіть файл `.env` у теці `frontend/`:

```env
VITE_API_URL=http://localhost:3000
```

Запуск dev-сервера:

```bash
npm run dev
```

Клієнт буде доступний на `http://localhost:5173`.

## Змінні середовища

### Backend (`backend/.env`)

| Змінна           | Опис                                       |
|------------------|--------------------------------------------|
| `PORT`           | Порт сервера (за замовчуванням `3000`)     |
| `MONGO_URI`      | Рядок підключення до MongoDB               |
| `ACCESS_SECRET`  | Секретний ключ для підпису access-токенів  |
| `REFRESH_SECRET` | Секретний ключ для підпису refresh-токенів |
| `CLIENT_URL`     | URL фронтенду для CORS                     |

### Frontend (`frontend/.env`)

| Змінна         | Опис                    |
|----------------|-------------------------|
| `VITE_API_URL` | Базовий URL backend-API |

## Тестування

Для тестів використовується Cypress (e2e та компонентні).

```bash
cd frontend
npm run cypress:open
```

E2e-тести очікують, що backend і frontend запущені (`baseUrl: http://localhost:5173`).
