export const instant = false;

import EditMeetingForm from "@/components/EditMeetingForm";
import { getMeetingById } from "@/lib/meetings-db";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meeting = await getMeetingById(Number(id));

  if (!meeting || meeting == null) {
    notFound();
  }

  return <EditMeetingForm meeting={meeting!} id={Number(id)} />;
}
