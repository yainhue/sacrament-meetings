import MeetingCard from "@/components/MeetingCard"
import {getMeetings} from "@/lib/meetings-db"

// const meetings = await getMeetings()

export default async function MeetingCardList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  
  const meetings = await getMeetings(
    query,
    currentPage
  );

  return (
    <div className="flex flex-col gap-4 flex-1">
        {meetings.map(meeting => (<MeetingCard key={meeting.id} meeting={meeting}></MeetingCard>))}
    </div>
  );
}
