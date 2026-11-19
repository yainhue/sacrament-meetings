import MeetingDetail from "@/components/MeetingDetail";
import Loading from "@/app/(public)/meetings/loading";
import { Suspense } from "react";

// disable instant loading because this page cannot be instant, it depends on dynamic data fetching
export const instant = false;

export default async function Meeting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col justify-center mt-15">
      <Suspense fallback={<Loading />}>
        <MeetingDetail id={Number(id)} />
      </Suspense>
    </div>
  );
}