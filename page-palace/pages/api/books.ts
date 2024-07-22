import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../app/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    
    // Extract genre and subgenre from query parameters
    const genre = req.query.genre as string;
    const subgenre = req.query.subgenre as string;

    // Build the SQL query dynamically based on the presence of genre and subgenre
    let query = 'SELECT * FROM books';
    const queryParams: any[] = [];
    
    if (genre || subgenre) {
      query += ' WHERE';
      if (genre) {
        query += ' genre = $1';
        queryParams.push(genre);
      }
      if (subgenre) {
        if (queryParams.length > 0) query += ' AND';
        query += ' subgenre = $2';
        queryParams.push(subgenre);
      }
    }

    const result = await client.query(query, queryParams);

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
