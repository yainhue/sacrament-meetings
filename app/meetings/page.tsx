import Dropdown from "@/components/Dropdown"
import MeetingCardList from "@/components/MeetingCardList"

export default function MeetingDetail() {

  return (

    <div className="flex flex-col justify-center">



    <div className="flex justify-around flex-row mt-15">
            <h1>Meetings list</h1>
      {/* <div><Dropdown dropdownType="type"></Dropdown>
      <Dropdown dropdownType="date"></Dropdown>
      </div> */}
    </div>

    <div className="flex p-4 flex-row mt-5">
      <MeetingCardList></MeetingCardList>
    </div>


    </div>

  );
}