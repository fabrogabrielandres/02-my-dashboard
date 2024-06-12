
import { NextResponse, NextRequest } from 'next/server'


interface CounterResponse {
    counter: number
}

export async function GET(request: Request): Promise<NextResponse<CounterResponse>> {
    return NextResponse.json({
        counter: 85
    });
}


