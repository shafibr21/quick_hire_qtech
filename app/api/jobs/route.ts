import { NextRequest } from 'next/server';
import connectToDatabase from '@/lib/db';
import Job from '@/lib/models/Job';
import { jobSchema } from '@/lib/validators/jobValidator';
import { apiResponse } from '@/lib/utils/apiResponse';
import { z } from 'zod';

export async function GET() {
    try {
        await connectToDatabase();

        // Return all jobs sorted by newest first
        const jobs = await Job.find().sort({ createdAt: -1 });

        return apiResponse(200, true, jobs);
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return apiResponse(500, false, undefined, 'Internal server error');
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();

        const body = await req.json();

        // Validate request body
        const validatedData = jobSchema.parse(body);

        // Create new job
        const newJob = await Job.create(validatedData);

        return apiResponse(201, true, newJob, 'Job created successfully');

    } catch (error) {
        if (error instanceof z.ZodError) {
            return apiResponse(400, false, undefined, 'Validation failed', error.issues);
        }

        console.error('Error creating job:', error);
        return apiResponse(500, false, undefined, 'Internal server error');
    }
}
