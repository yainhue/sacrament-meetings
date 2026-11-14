import { NextResponse, NextRequest } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

// GET endpoint that gets all of the Meetings and allows for optional filtering with ?date=
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
)  {
    const resolvedParams = await params;
    const id = Number(resolvedParams.id);

        if (Number.isNaN(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const meeting = getMeetingById(id);
  
  if (meeting == null){
    return NextResponse.json({ error: `Meeting not found with the ID ${id}` }, { status: 400 })
    
    }

  return NextResponse.json(meeting);
}