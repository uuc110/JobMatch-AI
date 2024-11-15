import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import { Job } from '@/models/Job';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    try {
        const jobs = await Job.find({});
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch jobs' });
    }
}
