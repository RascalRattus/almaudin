import * as snippetService from '../services/snippetService.js';

export const getAllSnippets = (req, res) => {
  try {
    const data = snippetService.getSnippets();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch snippets' });
  }
};
