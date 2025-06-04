# MoviesApi

A RESTful API for managing movies, users, and reviews, built with Node.js, Express, and MongoDB.

## Features

- User registration and authentication (JWT)
- Movie CRUD operations
- Review CRUD operations (linked to users and movies)
- MongoDB integration (Docker support)

## Getting Started

### Prerequisites

- Node.js
- npm
- Docker (for MongoDB)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Axile24/MoviesApi.git
   cd MoviesApi
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` and update values as needed.

4. **Start MongoDB with Docker:**
   ```sh
   docker-compose up -d
   ```

5. **Start the API server:**
   ```sh
   npm run dev
   ```

## API Endpoints

- `POST /register` – Register a new user
- `POST /login` – User login
- `POST /movie` – Add a new movie
- `GET /movies` – List all movies
- `POST /review` – Add a review

## Project Structure

```
.
├── app.js
├── routes/
│   ├── userRoutes.js
│   ├── movieRoutes.js
│   └── reviewRoutes.js
├── models/
│   ├── User.js
│   ├── Movie.js
│   └── Review.js
├── docker-compose.yml
├── .env
└── README.md
```

DOCKER 
-Hämta container from docker MongoDb latetest 
-docker compse file 
-**Start MongoDB container with Docker Compose:**
  ```sh
  docker-compose up -d
  ```

- **Stop and remove the MongoDB container:**
  ```sh
  docker-compose down
  ```

- **View running containers:**
  ```sh
  docker ps
  ```

- **View MongoDB logs:**
  ```sh
  docker logs movies-reviews-mongodb
  ```

- **Remove volumes (delete all data):**
  ```sh
  docker-compose down -v

  docker run -d --name movies-reviews-mongodb -p 27017:27017 mongo:latest


  porten som anvämdes :
  - "27017:27017"

Mongo DB 
show dbs 
use movies-reviews
show collections
db.USERS.find()