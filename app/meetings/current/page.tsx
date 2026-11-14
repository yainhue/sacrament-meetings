import { connection } from "next/server";
import { redirect } from "next/navigation";
import { getMeetings } from '@/lib/meetings-db';

export default async function RedirectToCurrentMeeting() {

await connection()
const today = new Date();
const dayOfWeek = today.getDay(); // 0 (Sun) through 6 (Sat)
const sunday = new Date(today);
sunday.setDate(today.getDate() - dayOfWeek); // roll back to Sunday
const sundayString = sunday.toISOString().split("T")[0];

const meeting = getMeetings(sundayString)

if (meeting.length > 0){

  return (
    
    redirect(`/meetings/${meeting[0].id}`)

  );
  
}
// else
return (
    <div>
    <h1 className="text-center mt-15">
      Meeting not found for current Sunday.
    </h1>
    <p className="text-center">Please try adding a new meeting or take a look at the list of meetings.</p>
    <div className="h-100"></div>
    </div>
  );

}