# 🔗 Custom URL Shortener with Authentication & Authorization

A full-stack URL Shortener application built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**. The application allows users to generate short URLs, track link visits, and manage their URLs through an authenticated dashboard.

It also implements **JWT-based authentication, cookie-based token storage, middleware-based authorization, and role-based access control (RBAC)** for managing user permissions.

## 🚀 Features

### 🔗 URL Shortening
- Generate unique short URLs using Short ID.
- Redirect short URLs to their original destinations.
- Prevent duplicate URL entries.
- Store URL records in MongoDB.
- Track visit history with timestamps.
- Calculate total clicks for each URL.

### 🔐 Authentication
- User Signup and Login functionality.
- JWT-based authentication.
- Cookie-based token storage using Cookie Parser.
- Authentication middleware to identify logged-in users.
- JWT verification for validating user sessions.

### 🛡️ Authorization & Role-Based Access Control
- Role-based access control (RBAC).
- Two user roles: `NORMAL` and `ADMIN`.
- Higher-level access restrictions using authorization middleware.
- Normal users can access their own URLs.
- Admin users can access all users' URLs.
- Protected routes using Express middleware.
- Closure-based `restrictTo()` middleware for role checking.

### 📊 URL Analytics
- Track individual URL visits.
- Store timestamps for every visit.
- Display URL records in a dashboard.
- Retrieve analytics using a dedicated endpoint.

### 🖥️ Server-Side Rendering
- Dynamic pages rendered using EJS.
- Login and Signup pages.
- User-specific URL dashboard.
- Admin dashboard for viewing all URLs.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | Database Modeling |
| EJS | Server-Side Rendering |
| JWT | Authentication |
| Cookie Parser | Cookie Management |
| Short ID | Unique URL Generation |
| JavaScript | Backend Logic |
| HTML & CSS | Frontend |

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kr-deepak17/Custom-url-shortner.git
```

### 2. Navigate to the Project

```bash
cd Custom-url-shortner
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running locally.

The application currently uses:

```text
mongodb://localhost:27017/short-url
```

### 5. Start the Server

```bash
npm start
```

The application runs at:

```text
http://localhost:8001
```

## 🔄 Authentication Flow

1. User registers using the Signup page.
2. User logs in using email and password.
3. Server verifies the credentials.
4. JWT token is generated using `jsonwebtoken`.
5. Token is stored in an HTTP cookie.
6. Authentication middleware extracts and verifies the token.
7. Decoded user information is attached to `req.user`.
8. Authorization middleware checks the user's role before granting access.

## 🛡️ Authorization Middleware

The project uses a closure-based middleware to implement role-based authorization.

```javascript
function restrictTo(roles = []) {
    return function(req, res, next) {
        if (!req.user) {
            return res.redirect("/login");
        }

        if (!roles.includes(req.user.role)) {
            return res.end("Unauthorized");
        }

        return next();
    };
}
```

This middleware checks whether the authenticated user's role is included in the permitted roles.

## 📌 Application Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | User dashboard |
| GET | `/signup` | Signup page |
| GET | `/login` | Login page |
| POST | `/user/` | Register a new user |
| POST | `/user/login` | Authenticate user |
| POST | `/url/` | Generate a short URL |
| GET | `/url/analytics/:ShortID` | Get URL analytics |
| GET | `/admin/urls` | Admin dashboard |
| GET | `/:ShortID` | Redirect to original URL |

## 👥 User Roles

**NORMAL**
- Access personal dashboard.
- Generate short URLs.
- View personal URL records.

**ADMIN**
- Access admin dashboard.
- View URL records across all users.
- Access routes restricted to administrators.

## 📁 Project Structure

```text
urlShortner/
│
├── connections.js
├── controllers/
│   ├── url.js
│   └── user.js
│
├── middlewares/
│   └── auth.js
│
├── models/
│   ├── url.js
│   └── user.js
│
├── routes/
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
│
├── service/
│   └── auth.js
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── index.js
├── package.json
└── README.md
```

## 🧠 Key Concepts Learned

- RESTful routing with Express.js.
- MongoDB CRUD operations using Mongoose.
- JWT-based authentication.
- Cookies and session management concepts.
- Authentication vs Authorization.
- Role-Based Access Control (RBAC).
- Express middleware and middleware chaining.
- JavaScript Closures.
- Protected routes.
- Server-Side Rendering with EJS.
- Database relationships and user-specific data.
- Git and GitHub version control.

## 🔮 Future Improvements

- [ ] Password hashing using bcrypt.
- [ ] JWT expiration and refresh token mechanism.
- [ ] HTTP-only and secure cookie configuration.
- [ ] Custom URL aliases.
- [ ] URL expiration functionality.
- [ ] Improved analytics dashboard.
- [ ] Deployment to a cloud platform.

## 👨‍💻 Author

**Deepak Kumar**

GitHub: [@kr-deepak17](https://github.com/kr-deepak17)

---

<p align="center">
  Built with ❤️ using Node.js, Express.js and MongoDB
</p>
