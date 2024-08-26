import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dataDirectory = path.join(process.cwd(), 'src/data')
    const fileContents = fs.readFileSync(dataDirectory + '/scenarios.json', 'utf8')
    const scenarios = JSON.parse(fileContents)
    console.log("API: Sending scenarios", scenarios);
    res.status(200).json(scenarios)
  } catch (error) {
    console.error('API: Error reading scenarios:', error)
    res.status(500).json({ error: 'Failed to load scenarios' })
  }
}
