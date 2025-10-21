# VHE Site 🚀

A super tiny site with serverless components built with Next.js, TypeScript, and Vercel.

## Features

- ⚡ **Next.js 14** with React 18
- 🔧 **TypeScript** for type safety
- 🎨 **Modern UI** with responsive design
- 🚀 **Serverless API** routes with Vercel
- 📦 **ESLint & Prettier** for code quality
- 🛠 **Yarn** package manager

## Quick Start

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. **Install dependencies:**

   ```bash
   yarn install
   ```

2. **Start development server:**

   ```bash
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint errors
- `yarn format` - Format code with Prettier
- `yarn type-check` - Run TypeScript type checking

## Project Structure

```
├── api/                    # Serverless API routes
│   ├── hello.ts           # Hello API endpoint
│   ├── health.ts          # Health check endpoint
│   └── users/             # Users API endpoints
│       └── index.ts
├── components/             # React components
│   ├── APIDemo.tsx        # API demo component
│   └── AddUserForm.tsx    # User form component
├── pages/                  # Next.js pages
│   ├── _app.tsx           # App wrapper
│   └── index.tsx          # Home page
├── styles/                 # Global styles
│   └── globals.css
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── vercel.json            # Vercel deployment config
└── package.json           # Dependencies and scripts
```

## API Endpoints

### GET `/api/hello`

Returns a greeting message with timestamp.

**Query Parameters:**

- `name` (optional): Name to greet (default: "World")

**Example:**

```bash
curl "http://localhost:3000/api/hello?name=Developer"
```

### GET `/api/health`

Returns health status and uptime information.

**Example:**

```bash
curl "http://localhost:3000/api/health"
```

### GET `/api/users`

Returns list of users.

**Example:**

```bash
curl "http://localhost:3000/api/users"
```

### POST `/api/users`

Creates a new user.

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Example:**

```bash
curl -X POST "http://localhost:3000/api/users" \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Deploy:**

   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project to Vercel

### Manual Deployment

1. **Build the project:**

   ```bash
   yarn build
   ```

2. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

## Development

### Code Quality

- **ESLint**: Configured with Next.js rules and Prettier integration
- **Prettier**: Code formatting with consistent style
- **TypeScript**: Strict type checking enabled

### Adding New API Routes

1. Create a new file in the `api/` directory
2. Export a default function that handles `VercelRequest` and `VercelResponse`
3. The route will be available at `/api/your-filename`

**Example:**

```typescript
// api/example.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.status(200).json({ message: 'Hello from example API!' });
}
```

### Adding New Components

1. Create a new `.tsx` file in the `components/` directory
2. Export a default React component
3. Import and use in your pages

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS3 with modern features
- **Deployment**: Vercel
- **Package Manager**: Yarn
- **Code Quality**: ESLint + Prettier

## License

MIT License - feel free to use this template for your projects!

---

Built with ❤️ using Next.js, TypeScript, and Vercel
