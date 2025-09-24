# Self-Service Restaurant App

A Next.js self-service restaurant ordering system with Prisma and PostgreSQL.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup

#### Option A: Neon Database (Recommended)
Create a `.env` file with your Neon connection string:
```env
DATABASE_URL="postgresql://username:password@hostname/database?sslmode=require"
```

#### Option B: Local Docker Database
```bash
docker-compose up -d
```
Create a `.env` file:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/self-service?schema=public"
```

### 3. Run Migrations
```bash
npx prisma migrate deploy
npx prisma generate
```

### 4. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

## Database Management

- **Prisma Studio**: `npx prisma studio` (opens at `http://localhost:5555`)
- **Seed Database**: `npm run db:seed`

## Tech Stack

- Next.js 15
- Prisma ORM
- PostgreSQL (Neon/Docker)
- Tailwind CSS
- TypeScript