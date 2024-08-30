import type { NextApiRequest, NextApiResponse } from 'next'
import { Scenario } from '@/types'
import scenarios from '@/data/scenarios'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Scenario[] | { error: string }>
) {
  try {
    console.log("API: Sending scenarios", scenarios);
    res.status(200).json(scenarios)
  } catch (error) {
    console.error('API: Error reading scenarios:', error)
    res.status(500).json({ error: 'Failed to load scenarios' })
  }
}
