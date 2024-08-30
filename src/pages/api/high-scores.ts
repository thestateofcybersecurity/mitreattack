import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, Db } from 'mongodb';

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
    
    if (!name || !score) {
      return res.status(400).json({ error: 'Name and score are required' });
    }

    await db.collection('highScores').insertOne({ name, score, timestamp: new Date() });
    res.status(200).json({ message: 'Score saved successfully' });
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
