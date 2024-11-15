import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IJob } from '@/models/Job';

const JobsPage = () => {
    const [jobs, setJobs] = useState<IJob[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Failed to fetch jobs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <p>Loading jobs...</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((job) => (
                    <div key={job._id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                        <p className="mb-2">{job.description.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-500">
                            Keywords: {job.keywords.join(', ')}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobsPage;
