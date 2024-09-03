import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db, DbError } from 'mongodb';

let cachedDb: Db | null = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  const db = client.db(process.env.MONGODB_DB);
  cachedDb = db;
  return db;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDatabase();

  if (req.method === 'POST') {
    const { name, score } = req.body;

    // Basic data validation to prevent code injection
    if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      return res.status(400).json({ error: 'Invalid name format. Only letters, numbers, and spaces are allowed.' });
    }

    if (typeof score !== 'number' || isNaN(score)) {
      return res.status(400).json({ error: 'Invalid score format. Must be a number.' });
    }

    try {
      // Create a unique index on the 'name' field to prevent duplicate entries
      await db.collection('highScores').createIndex({ name: 1 }, { unique: true });

      await db.collection('highScores').insertOne({ name, score, timestamp: new Date() });
      res.status(200).json({ message: 'Score saved successfully' });
    } catch (error) {
      if (error instanceof DbError && error.code === 11000) { // Duplicate key error
        return res.status(400).json({ error: 'A high score with that name already exists.' });
      }
      console.error('Error saving high score:', error);
      res.status(500).json({ error: 'An error occurred while saving your score' });
    }
  } else if (req.method === 'GET') {
    const highScores = await db
      .collection('highScores')
      .find()
      .sort({ score: -1 })
      .limit(10)
      .toArray();

    res.status(200).json(highScores);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
