import { getAllSnippets } from '../backend/controllers/snippetController.js';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return getAllSnippets(req, res);
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
