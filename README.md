# SchoolBus School Service

School microservice for the SchoolBus Management Platform. This service handles school data management and provides APIs for school-related operations.

## Features

- School data management (CRUD operations)
- Role-based access control integration with Auth Service
- School location information with geo coordinates
- Data validation and sanitization

## Tech Stack

- NestJS
- TypeORM
- PostgreSQL
- JWT (for auth integration)
- Passport.js

## Getting Started

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- Auth Service running (required for authentication)

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3001
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=schoolbus_schools
DATABASE_SYNC=true
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=1h
```

Note: The JWT_SECRET must be the same as the one used in the Auth Service.

### Installation

```bash
# Install dependencies
npm install

# Start the service
npm run start:dev
```

## API Endpoints

### Schools

- `POST /schools` - Create a new school (admin, school_admin only)
- `GET /schools` - Get all schools
- `GET /schools/:id` - Get school by ID
- `PATCH /schools/:id` - Update a school (admin, school_admin only)
- `DELETE /schools/:id` - Delete a school (admin only)

## Docker

Build the Docker image:

```bash
docker build -t schoolbus-school-service .
```

Run the Docker container:

```bash
docker run -p 3001:3001 --env-file .env schoolbus-school-service
```

## Microservice Architecture

This service is part of the SchoolBus platform microservices architecture:

- Auth Service - Handles authentication and user management
- School Service (this service) - Manages school data
- Student Service - Manages student data
- Bus Service - Manages bus data and routes
- Parent Service - Manages parent data and notifications
- Driver Service - Manages driver data and assignments

Each service communicates via RESTful APIs with JWT authentication.