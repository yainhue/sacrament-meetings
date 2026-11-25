"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import {Hymn, SacramentMeeting, SpeakerItem, WardBusinessItem} from "@/lib/types"

const MeetingFormSchema = z.object({
  date: z.string().min(1, "Date is required."),
  meetingType: z.string().min(1, "Meeting type is required."),

  presiding: z.string().min(
    2,
    "Presiding must contain at least 2 characters."
  ),

  conducting: z.string().min(
    2,
    "Conducting must contain at least 2 characters."
  ),

  openingPrayer: z.string().min(
    2,
    "Opening prayer must contain at least 2 characters."
  ),

  closingPrayer: z.string().min(
    2,
    "Closing prayer must contain at least 2 characters."
  ),

  openingHymnNumber: z.coerce
    .number()
    .int("Hymn number must be a whole number.")
    .min(1, "Hymn number must be at least 1.")
    .max(1300, "Hymn number cannot exceed 1300."),

  sacramentHymnNumber: z.coerce
    .number()
    .int("Hymn number must be a whole number.")
    .min(1)
    .max(1300),

  closingHymnNumber: z.coerce
    .number()
    .int("Hymn number must be a whole number.")
    .min(1)
    .max(1300),

  openingHymnTitle: z.string()
    .min(1, "Opening hymn title is required.")
    .max(200),

  sacramentHymnTitle: z.string()
    .min(1, "Sacrament hymn title is required.")
    .max(200),

  closingHymnTitle: z.string()
    .min(1, "Closing hymn title is required.")
    .max(200),

  stakeBusiness: z.coerce
    .boolean()
    .optional(),
});

export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];

    presiding?: string[];
    conducting?: string[];

    openingPrayer?: string[];
    closingPrayer?: string[];

    openingHymnNumber?: string[];
    sacramentHymnNumber?: string[];
    closingHymnNumber?: string[];

    openingHymnTitle?: string[];
    sacramentHymnTitle?: string[];
    closingHymnTitle?: string[];
  };

  message?: string | null;
};

export async function deleteMeeting(id: string) {
  await sql`
    DELETE FROM meetings
    WHERE id = ${id}
  `;

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function createMeeting(
  prevState: State,
  formData: FormData
): Promise<State> {

const raw = {
  date: formData.get("date"),
  meetingType: formData.get("meetingType"),

  presiding: formData.get("presiding"),
  conducting: formData.get("conducting"),

  openingPrayer: formData.get("openingPrayer"),
  closingPrayer: formData.get("closingPrayer"),

  openingHymnNumber: formData.get("openingHymnNumber"),

  openingHymnTitle:formData.get("openingHymnTitle"),

  sacramentHymnNumber:formData.get("sacramentHymnNumber"),

  sacramentHymnTitle:formData.get("sacramentHymnTitle"),

  closingHymnNumber:formData.get("closingHymnNumber"),

  closingHymnTitle:formData.get("closingHymnTitle"),

  stakeBusiness:formData.get("stakeBusiness"),
};

  const parsed = MeetingFormSchema.safeParse(raw);

  if (!parsed.success) {
    console.log("ESTE ES EL parsed.error sin flatten COMPA: " + parsed.error)
    console.log(z.flattenError(parsed.error).fieldErrors);
    return {
      errors: z.flattenError(parsed.error).fieldErrors,
      message:
        "Missing or invalid fields. Failed to create meeting.",
    };
  }

const {
  date,
  meetingType,

  presiding,
  conducting,

  openingPrayer,
  closingPrayer,

  openingHymnNumber,
  openingHymnTitle,

  sacramentHymnNumber,
  sacramentHymnTitle,

  closingHymnNumber,
  closingHymnTitle,

  stakeBusiness,
} = parsed.data;

const announcements = String(
  formData.get("announcements") ?? ""
)
  .split("\n")
  .map((a) => a.trim())
  .filter(Boolean);

const openingHymn: Hymn = {
  number: openingHymnNumber,
  title: openingHymnTitle,
};

const sacramentHymn: Hymn = {
  number: sacramentHymnNumber,
  title: sacramentHymnTitle,
};

const closingHymn: Hymn = {
  number: closingHymnNumber,
  title: closingHymnTitle,
};

const speaker1: SpeakerItem = 
  {
    name: String(
      formData.get("speaker1Name") ?? ""
    ),
    topic: String(
      formData.get("speaker1Topic") ?? ""
    ),
    type: "speaker",
  };

const speaker2: SpeakerItem =
  {
    name: String(
      formData.get("speaker2Name") ?? ""
    ),
    topic: String(
      formData.get("speaker2Topic") ?? ""
    ),
    type: "speaker",
  };

const speaker3: SpeakerItem =
  {
    name: String(
      formData.get("speaker3Name") ?? ""
    ),
    topic: String(
      formData.get("speaker3Topic") ?? ""
    ),
    type: "speaker",
  };

const speakers: SpeakerItem[] = [speaker1, speaker2, speaker3]

const wardBusiness: WardBusinessItem[] =
  String(
    formData.get("wardBusiness") ?? ""
  )
    .split("\n")
    .map((item) => ({
      description: item.trim(),
    }))
    .filter(
      (item) =>
        item.description.length > 0
    );

    console.log("BUENO LOCO VOY A HACER EL QUERY PRESTA ATENCION")

  try {
    await sql.query(
      `
      INSERT INTO meetings (
        date,
        meeting_type,
        presiding,
        conducting,

        announcements,

        opening_hymn,
        opening_prayer,

        ward_business,
        stake_business,

        sacrament_hymn,
        speakers,

        closing_hymn,
        closing_prayer
      )
      VALUES (
        $1,$2,$3,$4,
        $5,
        $6,$7,
        $8,$9,
        $10,$11,
        $12,$13
      )
      `,
      [
        date,
        meetingType,
        presiding,
        conducting,

        announcements,

        openingHymn,
        openingPrayer,

        wardBusiness,
        stakeBusiness ?? false,

        sacramentHymn,
        speakers,

        closingHymn,
        closingPrayer,
      ]
    );
  } catch(error) {
        console.log("NO MAL AHI NO PUDE HACERLO PA!")
        console.log("!!Este es el error: " + error)
    return {
      message:
        "Database Error: Failed to create meeting.",
    };
  }

          console.log("AH SI? HOY SI MAMI")

  revalidatePath("/meetings");
  redirect("/meetings");
}

export async function updateMeeting(
  id: number,
  formData: FormData
) {
  const raw = {
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),

    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),

    openingPrayer: formData.get("openingPrayer"),
    closingPrayer: formData.get("closingPrayer"),

    stakeBusiness: formData.get("stakeBusiness"),
  };

  const parsed =
    MeetingFormSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error(
      "Invalid meeting input."
    );
  }

  const data = parsed.data;

  const announcements = String(
    formData.get("announcements") ?? ""
  )
    .split("\n")
    .map((a) => a.trim())
    .filter(Boolean);

  const openingHymn = {
    number: Number(
      formData.get("openingHymnNumber")
    ),
    title: String(
      formData.get("openingHymnTitle")
    ),
  };

  const sacramentHymn = {
    number: Number(
      formData.get("sacramentHymnNumber")
    ),
    title: String(
      formData.get("sacramentHymnTitle")
    ),
  };

  const closingHymn = {
    number: Number(
      formData.get("closingHymnNumber")
    ),
    title: String(
      formData.get("closingHymnTitle")
    ),
  };

  const speakers = [
    {
      name: String(
        formData.get("speaker1Name") ?? ""
      ),
      topic: String(
        formData.get("speaker1Topic") ?? ""
      ),
    },
    {
      name: String(
        formData.get("speaker2Name") ?? ""
      ),
      topic: String(
        formData.get("speaker2Topic") ?? ""
      ),
    },
    {
      name: String(
        formData.get("speaker3Name") ?? ""
      ),
      topic: String(
        formData.get("speaker3Topic") ?? ""
      ),
    },
  ].filter(
    (speaker) =>
      speaker.name.trim().length > 0
  );

  const wardBusiness = String(
    formData.get("wardBusiness") ?? ""
  )
    .split("\n")
    .map((item) => ({
      description: item.trim(),
    }))
    .filter(
      (item) =>
        item.description.length > 0
    );

  await sql.query(
    `
    UPDATE meetings
    SET
      date = $1,
      meeting_type = $2,
      presiding = $3,
      conducting = $4,

      announcements = $5,

      opening_hymn = $6,
      opening_prayer = $7,

      ward_business = $8,
      stake_business = $9,

      sacrament_hymn = $10,
      speakers = $11,

      closing_hymn = $12,
      closing_prayer = $13
    WHERE id = $14
    `,
    [
      data.date,
      data.meetingType,
      data.presiding,
      data.conducting,

      announcements,

      openingHymn,
      data.openingPrayer,

      wardBusiness,
      data.stakeBusiness ?? false,

      sacramentHymn,
      speakers,

      closingHymn,
      data.closingPrayer,

      id,
    ]
  );

  revalidatePath("/meetings");
  revalidatePath(`/meetings/${id}`);

  redirect("/meetings");
}