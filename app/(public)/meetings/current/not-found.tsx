"use client";

import Link from "next/link";

export default function NotFoundCurrentMeeting() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-15 gap-4">
      <h1>Oh no!</h1>
      <h2>404 - Not found</h2>
      <p className="text-center">
        Please try adding a new meeting or take a look at the list of meetings.
      </p>
      <Link href={"/meetings"} className="secondary-button">
        Go back to the list of meetings
      </Link>
    </div>
  );
}
