import { NextResponse, NextRequest } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';

// GET endpoint that gets all of the Meetings and allows for optional filtering with ?date=
export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get('date'); // for example, "2026-05-03" or null
  const meetings = getMeetings(date);
 
    if (meetings == null){
    return NextResponse.json({ error: `Meetings not found` }, { status: 400 })
    }
 
  return Response.json(meetings);
}