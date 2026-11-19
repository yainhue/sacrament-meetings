import { getMeetingById } from "@/lib/meetings-db";

interface MeetingDetailProps {
  id: number;
}

export default async function MeetingDetail({
  id,
}: MeetingDetailProps) {
  const meeting = await getMeetingById(id);

  if (!meeting) {
    return (
      <div>
        <h1 className="text-center mt-15">
          Meeting not found with ID {id}
        </h1>
        <p className="text-center">Please try again with a valid ID number or take a look at the list of meetings.</p>
      </div>
    );
  }

  const meetingTypeCapitalized =
    meeting.meetingType.charAt(0).toUpperCase() +
    meeting.meetingType.slice(1);
  
  return (
    <article className="p-4 rounded flex gap-22 flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="font-semibold text-xl">{meeting.date}</p>
            <h4 className="font-semibold">{meetingTypeCapitalized} Meeting</h4>
        </div> 
        <div className="flex flex-row gap-6">
        <button className="secondary-button">Edit</button>
        <button className="secondary-button">Delete</button>
        </div>
      </div>
<div className="border rounded-lg overflow-hidden">

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Presiding</p>
    <p className="p-3">{meeting.presiding}</p>
  </div>

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Conducting</p>
    <p className="p-3">{meeting.conducting}</p>
  </div>

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Announcements</p>
    <p className="p-3">{meeting.announcements?.join(", ")}</p>
  </div>

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Opening Hymn</p>
    <p className="p-3">
      #{meeting.openingHymn.number} - {meeting.openingHymn.title}
    </p>
  </div>

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Opening Prayer</p>
    <p className="p-3">{meeting.openingPrayer}</p>
  </div>

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Ward Business</p>
    <p className="p-3">{meeting.wardBusiness[0]?.description ?? "None"}</p>
  </div>

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Stake Business</p>
    <p className="p-3">{meeting.stakeBusiness ? "Yes" : "None"}</p>
  </div>

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Sacrament Hymn</p>
    <p className="p-3">
      #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
    </p>
  </div>

  <div className="grid grid-cols-[180px_1fr] border-b">
    <p className="font-semibold p-3 bg-gray-50">Closing Prayer</p>
    <p className="p-3">{meeting.closingPrayer}</p>
  </div>

</div>
    </article>
  );
}