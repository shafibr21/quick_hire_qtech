import { NextResponse } from 'next/server';

interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    errors?: any;
}

export function apiResponse<T>(status: number, success: boolean, data?: T, message?: string, errors?: any) {
    const payload: ApiResponse<T> = { success };

    if (data !== undefined) payload.data = data;
    if (message !== undefined) payload.message = message;
    if (errors !== undefined) payload.errors = errors;

    return NextResponse.json(payload, { status });
}
