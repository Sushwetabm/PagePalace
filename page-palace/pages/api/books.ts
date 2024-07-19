// pages/api/books.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../app/db';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM books');

    // Convert cover_image from binary to Base64
    const books = result.rows.map(book => {
      if (book.cover_image) {
        book.cover_image = `data:image/webp;base64,${book.cover_image.toString('base64')}`;
      }
      return book;
    });

    res.status(200).json(books);
    client.release();
  } catch (err) {
    console.error('Error fetching data from books table', err);
    res.status(500).json({ error: 'Failed to fetch data from the books table' });
  }
}