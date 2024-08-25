import type { NextApiRequest, NextApiResponse } from 'next'
import scenarios from '@/data/scenarios.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(scenarios)
}
