# 🔗 Custom URL Shortener

A URL Shortener built from scratch using **Node.js, Express.js, MongoDB, and EJS**. This project converts long URLs into short, shareable links, redirects users to their original destinations, and tracks link visits.

The application also implements **Server-Side Rendering (SSR)** using EJS to render a dynamic home page and display URL analytics directly from the server.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

---

## ✨ Features

- **Short URL Generation** — Convert long URLs into compact, shareable links.
- **Unique Short IDs** — Generate unique identifiers for URL mappings.
- **URL Redirection** — Redirect users to the original destination using a short URL.
- **Duplicate URL Handling** — Check whether a URL already exists before creating a new mapping.
- **Click Tracking** — Track the number of visits to each short URL.
- **Visit History** — Store visit timestamps in MongoDB.
- **Analytics Dashboard** — Display short IDs, original URLs, and total clicks in a table.
- **Server-Side Rendering (SSR)** — Render dynamic HTML pages on the server using EJS.
- **Dynamic Home Page** — Display the generated short URL on the home page after form submission.
- **MongoDB Integration** — Persist URL mappings and visit history using Mongoose.
- **Express Routing** — Handle URL generation, redirection, and analytics requests.

## 🖥️ Application Preview

### Home Page

The home page allows users to enter an original URL and generate a short link. After submission, the generated short URL is displayed on the page using EJS.

### URL Analytics Dashboard

The dashboard displays saved URL records in a table, including:

- Serial number
- Short ID
- Original destination URL
- Total number of clicks

This makes it easy to view and monitor the URLs created by the application.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend server and routing |
| MongoDB | Database for storing URL records |
| Mongoose | MongoDB object modeling and queries |
| EJS | Dynamic HTML templating |
| Server-Side Rendering | Rendering HTML on the server |
| JavaScript | Application logic |
| HTML | Structure of the web interface |
| CSS | Styling the interface |
| shortid | Generating compact short identifiers |

## ⚙️ Getting Started

### Prerequisites

Make sure the following are installed on your system:

- Node.js
- npm
- MongoDB
- Git

### 1. Install Dependencies

Open the project directory in your terminal and run:

```bash
npm install
```

### 2. Start MongoDB

Make sure your MongoDB server is running locally.

The application currently uses the following database connection:

```text
mongodb://localhost:27017/short-url
```

If you use a different database, update the connection string in your application.

### 3. Start the Application

Run the configured start script:

```bash
npm start
```

Alternatively, if your `package.json` does not contain a start script, run:

```bash
node index.js
```

For development with Nodemon, if installed:

```bash
npx nodemon index.js
```

### 4. Open the Application

Visit the following address in your browser:

**http://localhost:8001**

Enter a URL in the input field and click **Generate** to create a short link.

## 🔄 How It Works

```text
User enters an original URL
          |
          v
Express receives the POST request
          |
          v
Check for an existing URL
          |
          v
Generate a unique Short ID
          |
          v
Save URL mapping in MongoDB
          |
          v
Render the home page using EJS
          |
          v
Display the generated short URL
          |
          v
User opens the short URL
          |
          v
Find the matching database record
          |
          v
Update visit history
          |
          v
Redirect to the original destination
          |
          v
Display updated click analytics
```

## 🖥️ Server-Side Rendering (SSR) with EJS

This project uses **EJS (Embedded JavaScript)** as the Express view engine to implement Server-Side Rendering.

Instead of constructing the entire interface in the browser, Express renders the HTML on the server and sends the completed page to the client.

### How SSR is implemented

- The home page template is stored in `views/home.ejs`.
- Express passes dynamic data to the EJS template using `res.render()`.
- After a short URL is generated, the server renders the home page with the generated short ID.
- EJS conditionally displays the generated URL.
- URL records and click analytics can be rendered dynamically from database results.

Example:

```javascript
return res.render("home", {
    id: shortID
});
```

The EJS template can display the generated URL using:

```ejs
<% if (locals.id) { %>
    <p>
        URL Generated:
        http://localhost:8001/<%= id %>
    </p>
<% } %>
```

This demonstrates how server-side data can be passed to an EJS template to generate dynamic HTML.

## 🔌 Routes and Functionality

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/` | Render the home page and URL dashboard |
| `POST` | `/url` | Generate a short URL or handle an existing mapping |
| `GET` | `/:ShortID` | Record a visit and redirect to the original URL |
| `GET` | `/url/analytics/:ShortID` | Retrieve analytics for a specific short URL, if configured |

*Note: The endpoint paths above describe the application's intended functionality. Refer to the actual Express route definitions for the exact paths configured in your project.*

## 🗄️ Database Schema

The URL model stores the original destination, its short identifier, and visit history.

| Field | Description |
|---|---|
| `ShortID` | Unique identifier used in the short URL |
| `redirectURL` | Original destination URL |
| `visitHistory` | Array containing visit records |
| `timestamp` | Timestamp recorded for an individual visit |

MongoDB stores these records, while Mongoose provides the schema and query functionality used by the application.

## 📁 Project Structure

The application separates database models, route handlers, connection logic, and EJS views.

```text
urlShortner/
├── connections/
│   └── index.js
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   ├── staticRouter.js
│   └── url.js
├── views/
│   └── home.ejs
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

*This is an illustrative structure; keep the names aligned with the files in your actual repository.*

## 🧠 What I Learned

Through this project, I gained practical experience with:

- Building a backend application using Node.js and Express.js.
- Creating and handling HTTP routes.
- Processing HTML form submissions.
- Generating unique short identifiers for URLs.
- Connecting MongoDB with Mongoose.
- Designing schemas and querying database records.
- Implementing URL redirection.
- Tracking visits and calculating click counts.
- Implementing Server-Side Rendering using EJS.
- Passing backend data to dynamic HTML templates.
- Rendering URL records and analytics in a server-generated page.
- Managing project versions using Git and GitHub.

## 🔮 Future Enhancements

- [ ] Custom short URL aliases.
- [ ] User authentication and personalized dashboards.
- [ ] URL expiration and deletion.
- [ ] Improved URL validation and error handling.
- [ ] Responsive UI and improved styling.
- [ ] QR code generation for short URLs.
- [ ] Detailed analytics with charts and timestamps.
- [ ] Deployment to a cloud hosting platform.

## 👨‍💻 Author

**Deepak Kumar**

GitHub: [@kr-deepak17](https://github.com/kr-deepak17)

Project Repository: [Custom URL Shortener](https://github.com/kr-deepak17/Custom-url-shortner)

---

<p align="center">
  <b>Built from scratch with Node.js, Express.js, MongoDB, and EJS ❤️</b>
</p>
