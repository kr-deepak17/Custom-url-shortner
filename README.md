# Custom-url-shortner
# 🔗 URL Shortener

### Transform long URLs into short, shareable links.

A lightweight URL Shortener built from scratch using **Node.js, Express.js, and MongoDB**. It generates unique short IDs for long URLs, stores URL mappings in a database, and redirects users to their original destinations.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

---

## ✨ Features

- **Short URL Generation** — Convert long URLs into compact, shareable links.
- **Unique Short IDs** — Generate unique identifiers for URL mappings.
- **URL Redirection** — Redirect users from a short URL to the original destination.
- **Duplicate URL Handling** — Check whether a URL already exists before creating a new mapping.
- **MongoDB Integration** — Persist URL data using MongoDB and Mongoose.
- **RESTful API** — Handle URL creation and related requests through Express.js.
- **Asynchronous Operations** — Use `async/await` for database interactions.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Server and API routing |
| MongoDB | Persistent data storage |
| Mongoose | Database schemas and queries |
| JavaScript | Application logic |

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB instance
- Git

### 1. Install Dependencies

Run the following command from the project directory:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root and configure the variables required by your application.

```env
MONGODB_URI=your_mongodb_connection_string
PORT=8001
```

Make sure these variable names match those used in your code. Keep your credentials private and never commit your `.env` file.

### 3. Start the Application

Use the start script configured in `package.json`:

```bash
npm start
```

Alternatively, run your main server file directly with Node.js.

## 🔄 How It Works

```text
        Long URL
            |
            v
     Express.js Server
            |
            v
   Generate / Find Short ID
            |
            v
      MongoDB Storage
            |
            v
      Short URL Created
            |
            v
    User Opens Short URL
            |
            v
   Redirect to Original URL
```

## 🔌 API Overview

### Create a Short URL

**Endpoint:** `POST /url`

Send the original URL in the request body.

Example request:

```json
{
  "url": "https://example.com/some/very/long/path"
}
```

The server validates the URL, checks for an existing mapping, and creates or returns a short ID according to the application's logic.

### Redirect to the Original URL

**Endpoint:** `GET /:shortID`

Visit the generated short URL to redirect to its original destination.

> Note: These endpoint paths reflect the described implementation. Update them if your actual Express routes use different paths.

## 🗄️ Data Model

The URL mapping stores information such as:

| Field | Description |
|---|---|
| `shortID` | Unique identifier for the short URL |
| `redirectURL` | Original destination URL |

The schema can enforce required fields and uniqueness constraints to maintain data consistency.

## 📁 Project Structure

A typical structure for this project may look like:

```text
urlShortner/
├── controllers/
├── models/
├── routes/
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

*Adjust the structure above to match your actual files and folders.*

## 🧠 What I Learned

- Building backend applications with Node.js and Express.js.
- Designing REST APIs and handling HTTP requests and responses.
- Connecting an application to MongoDB using Mongoose.
- Defining schemas, models, and database constraints.
- Handling asynchronous operations with `async/await`.
- Implementing URL mapping and redirection logic.
- Managing code and project versions with Git and GitHub.

## 🔮 Future Enhancements

- [ ] URL click analytics
- [ ] Custom short aliases
- [ ] User authentication and personalized dashboards
- [ ] Expiration dates for short URLs
- [ ] Frontend interface for easier URL management

## 👨‍💻 Author

**Deepak Kumar**

GitHub: [@kr-deepak17](https://github.com/kr-deepak17)

---

<p align="center">
  <b>Built from scratch with Node.js, Express.js, and MongoDB ❤️</b>
</p>
