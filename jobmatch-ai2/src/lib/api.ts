export const API_URL = 'http://localhost:5000';

export const fetchJobs = async () => {
    const response = await fetch(`${API_URL}/jobs`);
    if (!response.ok) {
        throw new Error('Failed to fetch jobs');
    }
    return response.json();
};

export const matchJobs = async (resumeText: string) => {
    const response = await fetch(`${API_URL}/match`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ resume: resumeText })
    });
    if (!response.ok) {
        throw new Error('Failed to match jobs');
    }
    return response.json();
};
