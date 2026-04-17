# AI Prompt Library

A full-stack web application to manage AI image generation prompts with real-time view tracking.

## Overview

This project allows users to:

* Create AI prompts
* View all prompts
* See prompt details
* Track how many times a prompt is viewed

It demonstrates full-stack development with modern frontend, backend, caching, and containerization.

## Tech Stack

### Frontend

* Angular (Standalone Components)
* Reactive Forms
* TypeScript

### Backend

* Django (without DRF)
* REST-style APIs

### Database

* SQLite (for development)
* PostgreSQL-ready

### Caching

* Redis (with fallback mechanism)

### DevOps

* Docker
* Docker Compose

---

## Features

*  Create new prompts with validation
*  List all prompts
*  View prompt details
*  Track view count (Redis-based)
*  Toast notifications for better UX
*  Responsive SaaS-style UI
*  Dockerized setup

---

##  Architecture

```
Angular (Frontend)
        ↓ API Calls
Django (Backend)
        ↓
SQLite Database
        ↓
Redis (View Counter)
```


## ⚙️ Installation (Local Setup)

### 1. Clone repository

```bash
git clone https://github.com/revanth-collab/Angular-Django.git
cd Angular-Django
```

---

### 2. Backend setup

```bash
cd Django
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### 3. Frontend setup

```bash
cd Angular
npm install
npx ng serve
```

---

### 4. Access app

* Frontend → http://localhost:4200
* Backend → http://localhost:8000/prompts/

---

## Run with Docker

```bash
docker-compose up --build
```

---

## API Endpoints

| Method | Endpoint           | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | `/prompts/`        | Get all prompts                |
| POST   | `/prompts/create/` | Create prompt                  |
| GET    | `/prompts/:id/`    | Get single prompt + view count |

---

## Notes

* Redis is optional; fallback is implemented if Redis is unavailable
* CSRF disabled for API simplicity
* SQLite used for easy setup (PostgreSQL supported)

---




