# 🎬 Movie Web Application

A full-stack **Movie Management Web Application** built with **Node.js**, **Express.js**, and **EJS**.  
It includes both **client-side** pages for users and an **admin panel** to manage movie content.

---

## 📁 Project Structure

```
├── config/                 # Configuration files (DB, dotenv, etc.)
│   ├── db.js
│   └── dotenv.js
│
├── controllers/            # Controller logic for routes
│   ├── client/
│   │   └── index.js
│   └── server/
│       └── adminPanel.controller.js
│
├── middlewares/            # Custom middlewares
│   └── imageUpload.js
│
├── models/                 # Mongoose / Database models
│   └── movie.model.js
│
├── public/                 # Static assets
│   ├── assets/
│   ├── css/
│   ├── dummy/
│   ├── fonts/
│   ├── images/
│   └── js/
│
├── routers/                # Application routes
│   ├── client/
│   │   └── index.js
│   └── server/
│       ├── adminPanel.route.js
│       └── index.js
│
├── uploads/                # Uploaded images or files
│
├── views/                  # EJS templates
│   ├── client/
│   │   ├── pages/
│   │   │   ├── about.ejs
│   │   │   ├── contact.ejs
│   │   │   ├── joinus.ejs
│   │   │   ├── review.ejs
│   │   │   └── single.ejs
│   │   └── partials/
│   │       ├── footer.ejs
│   │       └── header.ejs
│   │
│   └── server/
│       ├── pages/
│       │   ├── addMovie.ejs
│       │   ├── editMovie.ejs
│       │   └── viewMovie.ejs
│       └── partials/
│           ├── footer.ejs
│           └── header.ejs
│
├── .env.example            # Example environment variables
├── .gitignore
├── index.js                # Entry point of the application
├── package.json
└── package-lock.json
```

---

## 🚀 Features

### 👥 Client Side
- Browse movie listings.
- View detailed movie information.
- Contact, About, and Join Us pages.
- Responsive and dynamic EJS views.

### 🛠️ Admin Panel
- Add, Edit, and Delete movies.
- Image upload using `multer`.
- Dashboard for managing movie data.

### ⚙️ Backend
- Node.js + Express.js server.
- MongoDB (via Mongoose) for data storage.
- Centralized routing and controllers.
- Middleware for file uploads and validation.

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | HTML, CSS, EJS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB / Mongoose |
| **Template Engine** | EJS |
| **Middleware** | Multer (for file upload), dotenv, body-parser |
| **Version Control** | Git, GitHub |

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/devanshi78/PR-7-Movie-website.git
cd PR-7-Movie-website
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file (you can copy `.env.example`) and set:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/movieDB
SESSION_SECRET=your_secret
```

### 4️⃣ Run the Application
```bash
npm start
```

### 5️⃣ Visit in Browser
```
http://localhost:3000
```

---

## 🧠 Future Enhancements
- User authentication (Login/Register)
- Movie rating and review system
- Search and filter movies
- REST API version for mobile apps

---

## 🪪 License
This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## ✨ Author
**Devanshi**  
🌐 [https://github.com/devanshi78](https://github.com/devanshi78)