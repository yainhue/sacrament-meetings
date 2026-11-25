import { deleteMeeting } from "@/lib/actions";
import { SacramentMeeting } from "@/lib/types";
import Link from "next/link";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function ProjectCard({ meeting }: MeetingCardProps) {
  const meetingTypeCapitalized =
    meeting.meetingType.charAt(0).toUpperCase() + meeting.meetingType.slice(1);

  return (
    <article className="p-4 border-l-4 border-blue-600 bg-gray-200 rounded flex gap-22 justify-between">
      <div>
        <p className="font-semibold text-1xl">{meeting.date}</p>
        <h4 className="font-semibold">{meetingTypeCapitalized} Meeting</h4>
        <p>Presiding: {meeting.presiding}</p>
        <p>Conducting: {meeting.conducting}</p>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          className="secondary-button text-5xl"
          href={`/meetings/${meeting.id}`}
        >
          »
        </Link>
        <form action={deleteMeeting.bind(null, meeting.id.toString())}>
          <button type="submit" className="secondary-button text-2xl font-bold">
            ✕
          </button>
        </form>
      </div>
    </article>
  );
}
