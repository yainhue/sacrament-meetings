// import Dropdown from "@/components/Dropdown"
import MeetingCardList from "@/components/MeetingCardList"
import {MeetingSearch} from "@/components/MeetingSearch"
import {Pagination} from "@/components/Pagination"
import { getMeetingsTotalPages } from '@/lib/meetings-db';

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getMeetingsTotalPages()

  return (

    <div className="flex flex-col justify-center">

    <div className="flex flex-col mt-15 justify-center items-center flex-1 m-0">
            <h1>Meetings list</h1>
            <MeetingSearch></MeetingSearch>
            <Pagination totalPages={totalPages}></Pagination>
    </div>

    <div></div>
    

    <div className="flex p-4 flex-row mt-5">
      <MeetingCardList query={query} currentPage={currentPage}></MeetingCardList>
    </div>


    </div>

  );
}