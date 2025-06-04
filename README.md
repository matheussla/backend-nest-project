# Blog API with NestJS

A RESTful API for a blog system built with NestJS, PostgreSQL, and Prisma.

## 🚀 Features

- Blog post management (CRUD operations)
- Comment system
- PostgreSQL database with Prisma ORM
- Docker support
- Structured logging
- Environment configuration

## 📋 Prerequisites

- Node.js (v20 or later)
- PostgreSQL (v16 or later)
- Docker and Docker Compose (for containerized setup)
- yarn or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone git@github.com:matheussla/backend-nest-project.git
cd backend-nest-project
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/blog_db"
NODE_ENV="development"
```

## 🏃‍♂️ Running the Project

### Local Development

1. Start PostgreSQL:
```bash
# Using Docker
docker run --name blog_postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=blog_db -p 5432:5432 -d postgres:16-alpine

# Or using your local PostgreSQL installation
```

2. Run database migrations:
```bash
npx prisma generate
```

3. Run database migrations:
```bash
npx prisma migrate dev
```

4. Run seed migrations:
```bash
yarn container:seed
```

5. Start the development server:
```bash
yarn start:dev
```

### Using Docker Compose

1. Build and start all services:
```bash
docker-compose up --build
```

2. To run only specific services:
```bash
docker-compose up postgres  # Only database
docker-compose up app      # Only application
```

## 📁 Project Structure

```
src/
├── blog/                    # Blog feature module
│   ├── controllers/        # API endpoints
│   ├── dtos/              # Data transfer objects
│   ├── repositories/      # Database operations
│   └── services/         # Business logic
├── shared/                # Shared resources
│   ├── database/         # Database configuration
│   │   ├── seeds/       # Database seeders
│   │   └── services/    # Database services
│   └── logger/          # Logging configuration
└── main.ts              # Application entry point
```

## 📝 API Endpoints

- `GET /api/posts` - List all blog posts with comment counts
- `POST /api/posts` - Create a new blog post
- `GET /api/posts/{id}` - Get a specific blog post with comments
- `POST /api/posts/{id}/comments` - Add a comment to a blog post

## 🔜 Next Steps

### 1. Testing
- [ ] Unit tests with Jest
- [ ] Integration tests
- [ ] E2E tests
- [ ] Test coverage reporting

### 2. Code Quality
- [ ] Set up Husky for pre-commit hooks
- [ ] Add commitlint for conventional commits

### 3. Documentation
- [ ] Add Swagger/OpenAPI documentation
- [ ] Add API documentation

### 4. Authentication & Authorization
- [ ] Implement JWT authentication
- [ ] Add user management
- [ ] Add password hashing

### 5. CI/CD Pipeline
- [ ] Set up GitHub Actions
- [ ] Add automated testing
- [ ] Add automated deployment
- [ ] Add environment-specific configurations

### 6. Monitoring & Logging
- [ ] Add health check endpoints
- [ ] Add request tracing

### 7. Performance
- [ ] Add caching layer
- [ ] Implement rate limiting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
