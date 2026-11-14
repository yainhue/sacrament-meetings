import MeetingDetail from "@/components/MeetingDetail"
import { Suspense } from "react";
import Loading from "@/app/meetings/loading";

export default async function Meeting({
  params,
}: {
  params: { id: string };
}) {

  const resolvedParams = await params;
    const id = Number(resolvedParams.id);

 let response;

 
try {
  const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

response = await fetch(
  `${host}/api/meetings/${id}`
      ,{
      cache: "force-cache",
    }
);

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

} catch (error) {
  console.error(error);

  return (
    <div>
    <h1 className="text-center mt-15">
      Meeting not found with the ID {id}.
    </h1>
    <p className="text-center">Please try again with a valid ID.</p>
    <div className="h-100"></div>
    </div>
  );
}

const meeting = await response.json();

  return (
    
    <div className="flex flex-col justify-center mt-15">

    <Suspense fallback={<Loading />}>
    <div><MeetingDetail meeting={meeting}></MeetingDetail></div>
  </Suspense>
    </div>

  );

}