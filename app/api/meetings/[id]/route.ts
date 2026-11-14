import { NextResponse} from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

// GET endpoint that gets all of the Meetings and allows for optional filtering with ?date=
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    return NextResponse.json(
      { error: "Invalid id - 400" },
      { status: 400 }
    );
  }

  const meeting = getMeetingById(meetingId);

  if (!meeting) {
    return NextResponse.json(
      { error: `Meeting not found with the ID ${meetingId} - 404` },
      { status: 404 }
    );
  }

  return NextResponse.json(meeting);
}