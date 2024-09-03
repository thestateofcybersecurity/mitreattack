import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db(process.env.MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Handling ${req.method} request to /api/high-scores`);

  try {
    const { client, db } = await connectToDatabase();
    console.log('Connected to database');

    if (req.method === 'POST') {
      console.log('Handling POST request');
      const { name, score } = req.body;
      console.log(`Received data: name=${name}, score=${score}`);

      // Basic data validation
      if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
        console.log('Invalid name format');
        return res.status(400).json({ error: 'Invalid name format. Only letters, numbers, and spaces are allowed.' });
      }
      if (typeof score !== 'number' || isNaN(score)) {
        console.log('Invalid score format');
        return res.status(400).json({ error: 'Invalid score format. Must be a number.' });
      }

      try {
        // Create a unique index on the 'name' field
        await db.collection('highScores').createIndex({ name: 1 }, { unique: true });
        console.log('Created unique index on name field');

        // Insert the new high score
        const result = await db.collection('highScores').insertOne({ name, score, timestamp: new Date() });
        console.log(`Inserted document with _id: ${result.insertedId}`);

        res.status(200).json({ message: 'Score saved successfully' });
      } catch (error: any) {
        if (error.code === 11000) { // Duplicate key error
          console.log('Duplicate key error');
          return res.status(400).json({ error: 'A high score with that name already exists.' });
        }
        console.error('Error saving high score:', error);
        res.status(500).json({ error: 'An error occurred while saving your score' });
      }
    } else if (req.method === 'GET') {
      console.log('Handling GET request');
      const highScores = await db
        .collection('highScores')
        .find()
        .sort({ score: -1 })
        .limit(10)
        .toArray();
      
      console.log(`Retrieved ${highScores.length} high scores`);
      res.status(200).json(highScores);
    } else {
      console.log(`Method ${req.method} not allowed`);
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Unhandled error:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
}
