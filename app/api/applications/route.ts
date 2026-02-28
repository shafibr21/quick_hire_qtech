import { NextRequest } from 'next/server';
import connectToDatabase from '@/lib/db';
import Application from '@/lib/models/Application';
import Job from '@/lib/models/Job';
import { applicationSchema } from '@/lib/validators/applicationValidator';
import { apiResponse } from '@/lib/utils/apiResponse';
import { z } from 'zod';

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();

        const body = await req.json();

        // Validate request body
        const validatedData = applicationSchema.parse(body);

        // Ensure job exists before creating application
        const jobExists = await Job.findById(validatedData.job_id);
        if (!jobExists) {
            return apiResponse(404, false, undefined, 'Associated job not found');
        }

        // Create new application
        const newApplication = await Application.create(validatedData);

        return apiResponse(201, true, newApplication, 'Application submitted successfully');

    } catch (error) {
        if (error instanceof z.ZodError) {
            return apiResponse(400, false, undefined, 'Validation failed', error.issues);
        }

        console.error('Error submitting application:', error);
        return apiResponse(500, false, undefined, 'Internal server error');
    }
}
