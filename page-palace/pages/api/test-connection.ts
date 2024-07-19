// pages/api/test-connection.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../app/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    res.status(200).json({ message: 'Connected to the database' });
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to connect to the database' });
  }
}
