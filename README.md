# React CRUD Application

A modern CRUD (Create, Read, Update, Delete) application built using React 19 and Vite with API integration, form validation, routing, and responsive UI components.

## Features

- Create User
- View User List
- Update User Details
- Delete User
- API Integration using Axios
- Form Handling with React Hook Form
- Validation using Yup
- Responsive UI using PrimeFlex
- PrimeReact Components
- Routing using React Router DOM
- Mock Backend using JSON Server

---

## Tech Stack

### Frontend

- React 19.2.6
- Vite 8
- PrimeReact 10
- PrimeFlex 4
- React Router DOM 7

### Backend (Mock API)

- JSON Server

### Form Management

- React Hook Form
- Yup
- Hook Form Resolver

### API Handling

- Axios

### Development Tools

- ESLint

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into project:

```bash
cd crud-2-app
```

Install dependencies:

```bash
npm install
```

---

## Run React Application

```bash
npm run dev
```

Application URL:

```text
http://localhost:5173
```

---

## Setup JSON Server

Create a `db.json` file in the project root.

Example:

```json
{
  "users": [
    {
      "id": 1,
      "name": "John"
    }
  ]
}
```

Start JSON Server:

```bash
npx json-server --watch db.json --port 5000
```

API URL:

```text
http://localhost:5000/users
```

---

## Available Scripts

Run Development Server:

```bash
npm run dev
```

Build Production:

```bash
npm run build
```

Preview Build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

---

## Project Structure

```text
crud-2-app/

├── public/

├── src/
│
├── api/
│   └── axios.js
│
├── components/
│   └── Header.jsx
│
├── layouts/
│   └── MainLayout.jsx
│
├── pages/
│   ├── AddEditUserList.jsx
│   └── UsersList.jsx
│
├── validations/
│   └── userSchema.js
│
├── App.jsx
├── index.css
├── main.jsx
│
├── db.json
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── README.md
└── .gitignore
```

### Folder Explanation

- **api/** → Axios configuration and API calls
- **components/** → Reusable UI components
- **layouts/** → Shared application layouts
- **pages/** → Page-level screens
- **validations/** → Yup validation schemas
- **db.json** → Mock backend for JSON Server
- **App.jsx** → Root component
- **main.jsx** → React application entry point

```

---

## CRUD Operations

GET → Fetch Users

POST → Add User

PUT → Update User

DELETE → Remove User

---

## Future Improvements

- Authentication
- Search
- Pagination
- Sorting
- Protected Routes
- RTK Query Integration

---

Built with React 19 + Vite
```
