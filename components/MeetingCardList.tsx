import MeetingCard from "@/components/MeetingCard"
import {getMeetings} from "@/lib/meetings-db"

const meetings = getMeetings()

export default function MeetingCardList() {
  return (
    <div className="flex flex-col gap-4 flex-1">
        {meetings.map(meeting => (<MeetingCard key={meeting.id} meeting={meeting}></MeetingCard>))}
    </div>
  );
}
