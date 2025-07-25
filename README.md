
# 📝 React + Node.js Todo App with Automated Testing

This is a simple full-stack Todo App built with **React (frontend)** and **Node.js/Express (backend)** to demonstrate **UI and API test automation** using **Playwright** and **Supertest**.

---

## 🚀 Features

- ✅ User login (valid/invalid credentials)
- ✅ Create, edit, and delete todo items
- ✅ Functional UI tests with Playwright
- ✅ API tests with Supertest
- ✅ Minimal test plan and documentation

---

## 📁 Project Structure

```
/backend       # Node.js + Express API
/frontend      # React UI
/tests         # Automated test files
README.md
testplan.md
```

---

## 📡 API Endpoints

| Method | Endpoint        | Description               |
|--------|------------------|---------------------------|
| POST   | `/login`         | Logs in with credentials  |
| GET    | `/items`         | Fetches all todo items    |
| POST   | `/items`         | Creates a new todo item   |
| PUT    | `/items/:id`     | Updates an existing item  |
| DELETE | `/items/:id`     | Deletes a specific item   |

---

## 📦 Sample API Requests & Responses

### 🔐 `POST /login`

**Request:**
```json
{
  "username": "ifeanyi",
  "password": "1234"
}
```

**Success Response:**
```json
{
  "message": "Login successful"
}
```

**Failure Response:**
```json
{
  "error": "Invalid credentials"
}
```

---

### 🧾 `POST /items`

**Request:**
```json
{
  "text": "Buy groceries"
}
```

**Response:**
```json
{
  "id": 1721576125639,
  "text": "Buy groceries"
}
```

---

## ✅ How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/yourname/qa-todo-app.git
cd qa-todo-app
```

### 2. Start Backend API

```bash
cd backend
npm install
node server.js
```

Runs at `http://localhost:5000`

### 3. Start Frontend App

```bash
cd ../frontend
npm install
npm start
```

Runs at `http://localhost:3000`

---

## 🧪 How to Run Tests

### UI Tests (Playwright)

```bash
cd tests
npx playwright test
```

Make sure the app is running on `localhost:3000` and the API is on `localhost:5000`.

### API Tests (Supertest)

```bash
cd tests
node api.test.js
```

---

## 🧰 Tools Used

- Frontend: **React**
- Backend: **Express**
- UI Testing: **Playwright**
- API Testing: **Supertest**
- Test Runner: **Jest**
- Style: **Custom CSS**

---

## ⚠️ Assumptions & Limitations

- No token-based auth is implemented, just a success message on login.
- All data is stored in memory; a restart clears all todos.
- Only one hardcoded user (`ifeanyi` / `1234`).

---

## 📎 Author

**Ifeanyi Felix Ofoelo**  
[Your LinkedIn] • [Your GitHub]

---
