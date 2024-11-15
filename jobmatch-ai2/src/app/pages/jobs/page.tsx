import React, { useEffect, useState } from 'react';
import { fetchJobs, matchJobs } from '@/lib/api';

interface Job {
    id: string;
    job_description: string;
    keywords: string[];
}

interface Match {
    job_description: string;
    score: number;
}

const JobsPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'all' | 'suggested'>('all');

    useEffect(() => {
        const loadJobs = async () => {
            try {
                const data = await fetchJobs();
                setJobs(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        loadJobs();
    }, []);

    const handleMatch = async () => {
        setLoading(true);
        try {
            const resumeText = 'Your sample resume text here';
            const data = await matchJobs(resumeText);
            setMatches(data.matches);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (activeTab === 'suggested') {
            handleMatch();
        }
    }, [activeTab]);

    return (
        <div className="p-4">
            <div className="mb-4 flex space-x-4">
                <button
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 rounded ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    All Jobs
                </button>
                <button
                    onClick={() => setActiveTab('suggested')}
                    className={`px-4 py-2 rounded ${activeTab === 'suggested' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Suggested Jobs
                </button>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : activeTab === 'all' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jobs.map(job => (
                        <div key={job.id} className="bg-container p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">{`Job ID: ${job.id}`}</h2>
                            <p>{job.job_description}</p>
                            <p className="text-sm text-gray-400">Keywords: {job.keywords.join(', ')}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {matches.map((match, index) => (
                        <div key={index} className="bg-container p-4 rounded-lg">
                            <p>{match.job_description}</p>
                            <p className="text-sm text-gray-400">Match Score: {Math.round(match.score * 100)}%</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobsPage;
