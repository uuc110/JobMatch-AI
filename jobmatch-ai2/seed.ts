import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import { Job } from './src/models/Job';
import dbConnect from './src/lib/dbConnect';

async function seed() {
    await dbConnect();

    // Clear existing jobs
    await Job.deleteMany({});

    // Generate fake jobs
    const jobs = Array.from({ length: 20 }).map(() => ({
        title: faker.person.jobTitle(),
        description: faker.lorem.paragraphs(2),
        keywords: faker.helpers.uniqueArray(
            ['JavaScript', 'React', 'Node.js', 'MongoDB', 'TypeScript', 'Python', 'SQL', 'DevOps'],
            faker.number.int({ min: 2, max: 5 }) // Correct usage of faker.number.int
        ),
    }));

    // Insert fake jobs into the database
    await Job.insertMany(jobs);

    console.log('Database seeded with fake jobs.');
    mongoose.connection.close();
}

seed().catch((err) => {
    console.error(err);
    mongoose.connection.close();
});