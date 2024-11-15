import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IJob extends Document {
    title: string;
    description: string;
    keywords: string[];
}

const JobSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: [{ type: String }],
});

export const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>('Job', JobSchema);
