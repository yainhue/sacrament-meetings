"use client";

import { useState } from "react";
import {getMeetings} from "@/lib/meetings-db"

interface DropdownProps {
  dropdownType: "type"|"date";
}

export default function Dropdown({dropdownType}:DropdownProps){

  const meetingTypes = ['testimony','regular','stake','general'];
  const meetings = getMeetings()
  const [value, setValue] = useState("");

return(
<form className="flex flex-col gap-3 max-w-xs">
      <label htmlFor="pais" className="text-sm font-medium text-gray-700">
        Choose a {dropdownType}:
      </label>

      <select
        id={dropdownType}
        name={dropdownType}
        value={dropdownType}
        onChange={(e) => setValue(e.target.value)}
        required
        
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
      >
        <option value="" disabled>
          -- Choose an option --
        </option>

        {
          dropdownType === "date"
            ? meetings.map(meeting => (
                <option key={meeting.id} value={meeting.date}>
                  {meeting.date}
                </option>
              ))
            : meetingTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))
        }

      </select>

    </form>
    )
}