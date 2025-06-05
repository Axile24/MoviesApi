# Film Recensions Plattform

En RESTful API för att hantera filmer och recensioner.

## Installation

1. Klona projektet:
```bash
git clone https://github.com/Axile24/MoviesApi.git
```

2. Installera:
```bash
npm install
```

3. Skapa en `.env` fil med följande innehåll:
```
MONGODB_URI=mongodb://admin:password123@localhost:27017/movies-reviews?authSource=admin
JWT_SECRET=din-hemliga-nyckel
```

## Starta Projektet

1. Starta MongoDB med Docker:
```bash
docker-compose up -d
```

2. Starta servern:
```bash
npm run dev
```

## API Endpoints

### Användare
- `POST /register` - Registrera ny användare
- `POST /login` - Logga in

### Filmer
- `GET /movies` - Hämta alla filmer
- `GET /movies/:id` - Hämta specifik film
- `GET /movies/ratings` - Hämta filmbetyg
- `POST /movies` - Skapa film (Admin)
- `PUT /movies/:id` - Uppdatera film (Admin)
- `DELETE /movies/:id` - Ta bort film (Admin)

### Recensioner
- `POST /reviews` - Skapa recension
- `GET /reviews` - Hämta alla recensioner
- `PUT /reviews/:id` - Uppdatera recension
- `DELETE /reviews/:id` - Ta bort recension

## Teknologier
- Node.js
- Express.js
- MongoDB
- Docker
- JWT Authentication

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