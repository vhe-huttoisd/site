import type { VercelRequest, VercelResponse } from '@vercel/node';

interface User {
  id: number;
  name: string;
  email: string;
}

// Mock data
const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ users });
      break;
    case 'POST':
      const { name, email } = req.body;
      if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
      }
      const newUser: User = {
        id: users.length + 1,
        name,
        email,
      };
      users.push(newUser);
      res.status(201).json({ user: newUser });
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
