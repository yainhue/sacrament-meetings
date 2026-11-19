import { NextResponse } from "next/server";
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: Request) {
  const param = new URL(request.url).searchParams.get("date");

  let meetings;

  // if a param parameter was passed, use it as query param and get meetings, otherwise get all meetings
  if (param) {
    meetings = await getMeetings(param);
  }
  else{
    meetings = await getMeetings();
  }

  if (meetings.length === 0) {
    return NextResponse.json(
      { error: "Meetings not found - 404" },
      { status: 404 }
    );
  }

  return NextResponse.json(meetings);
}
