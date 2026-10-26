# Event Registration Admin Panel (MERN Stack)

## Project Architecture
- `Backend/`: Node.js, Express, Mongoose API configuration setup.
- `Frontend/`: React, Tailwind CSS UI application module.

## Setup Instructions

### 1. Run the Backend Server
```bash
cd Backend
npm install
npm start
```
*or* 

```bash
cd Backend
npm install
node server.js
```
*note: The required `.env` file is included in the Backend folder*

### 2. Run the Frontend UI Application
```bash
cd Frontend
npm install
npm run dev
```

## Application Overview

This project is an event registration administration panel built with MongoDB, Express, React, and Node.js. The frontend provides a dashboard for managing event records, and the backend exposes a JSON API that stores those records in MongoDB.

### Dashboard Features

- View events in a table, including each event's ID, name, date, venue, and registration count.
- Add an event with a name, description, date, venue, and optional initial registration count.
- Edit an existing event or delete it after confirming the action.
- See the total number of events currently listed.

### Project Structure

- `Backend/server.js`: Starts the Express server, connects to MongoDB, and mounts the event routes.
- `Backend/config/db.js`: Connects to MongoDB using the `uri` environment variable.
- `Backend/models/Event.js`: Defines the event document fields and timestamps.
- `Backend/routes/eventRoutes.js`: Implements the event API.
- `Frontend/src/App.jsx`: Defines the dashboard and add-event pages.
- `Frontend/src/components/`: Contains the dashboard, event form, and navigation components.

### Event API

The frontend sends requests to `http://localhost:5000/api/events`.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/events` | List events, newest first. |
| `POST` | `/api/events` | Create an event. |
| `PUT` | `/api/events/:id` | Update an event by its MongoDB ID. |
| `DELETE` | `/api/events/:id` | Delete an event by its MongoDB ID. |

An event contains `name`, `description`, `date`, `venue`, and `totalRegistrations`. The first four fields are required; `totalRegistrations` defaults to `0`. MongoDB also adds `createdAt` and `updatedAt` timestamps.

### Configuration

The backend loads environment variables from `Backend/.env`. It uses `uri` for the MongoDB connection string and `port` for the Express server port. The frontend API URL is currently set to `http://localhost:5000/api/events`, so the backend should be available on port `5000` when running the frontend locally.
