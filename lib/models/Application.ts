import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IApplication extends Document {
    job_id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    resume_link: string;
    cover_note: string;
    createdAt: Date;
    updatedAt: Date;
}

const ApplicationSchema: Schema<IApplication> = new Schema(
    {
        job_id: {
            type: Schema.Types.ObjectId,
            ref: 'Job',
            required: [true, 'Job ID is required'],
        },
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        resume_link: {
            type: String,
            required: [true, 'Resume link is required'],
        },
        cover_note: {
            type: String,
            required: [true, 'Cover note is required'],
        },
    },
    {
        timestamps: true,
    }
);

// Mongoose model re-use pattern
const Application: Model<IApplication> = mongoose.models.Application || mongoose.model<IApplication>('Application', ApplicationSchema);

export default Application;
