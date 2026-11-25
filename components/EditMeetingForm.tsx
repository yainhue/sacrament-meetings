"use client";

import { useActionState } from "react";
import { updateMeeting, type State } from "@/lib/actions";
import type { SacramentMeeting } from "@/lib/types";

interface EditMeetingFormProps {
  meeting: SacramentMeeting;
  id: number;
}

export default function EditMeetingForm({ meeting, id }: EditMeetingFormProps) {
  const initialState: State = {
    message: null,
    errors: {},
  };

  const updateMeetingWithId = updateMeeting.bind(null, id);

  const [state, formAction, isPending] = useActionState(
    updateMeetingWithId,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="card max-w-4xl mx-auto mt-10 space-y-8"
    >
      <h1>Edit Meeting</h1>

      <div>
        <h3 className="section-title">Meeting Information</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block mb-2 meeting-field">
              Meeting Date
            </label>

            <input
              id="date"
              name="date"
              type="date"
              required
              defaultValue={meeting.date}
              aria-describedby="date-error"
              className="w-full"
            />

            <div id="date-error" aria-live="polite">
              {state.errors?.date?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="meetingType" className="block mb-2 meeting-field">
              Meeting Type
            </label>

            <select
              id="meetingType"
              name="meetingType"
              defaultValue={meeting.meetingType}
              aria-describedby="meetingType-error"
              className="w-full"
            >
              <option value="regular">Regular</option>

              <option value="testimony">Testimony</option>

              <option value="stake">Stake</option>

              <option value="special">Special</option>
            </select>

            <div id="meetingType-error" aria-live="polite">
              {state.errors?.meetingType?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="presiding" className="block mb-2 meeting-field">
              Presiding
            </label>

            <input
              id="presiding"
              name="presiding"
              type="text"
              required
              defaultValue={meeting.presiding}
              aria-describedby="presiding-error"
              className="w-full"
            />

            <div id="presiding-error" aria-live="polite">
              {state.errors?.presiding?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="conducting" className="block mb-2 meeting-field">
              Conducting
            </label>

            <input
              id="conducting"
              name="conducting"
              type="text"
              required
              defaultValue={meeting.conducting}
              aria-describedby="conducting-error"
              className="w-full"
            />

            <div id="conducting-error" aria-live="polite">
              {state.errors?.conducting?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="openingPrayer" className="block mb-2 meeting-field">
              Opening Prayer
            </label>

            <input
              id="openingPrayer"
              name="openingPrayer"
              type="text"
              required
              defaultValue={meeting.openingPrayer}
              aria-describedby="openingPrayer-error"
              className="w-full"
            />

            <div id="openingPrayer-error" aria-live="polite">
              {state.errors?.openingPrayer?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="closingPrayer" className="block mb-2 meeting-field">
              Closing Prayer
            </label>

            <input
              id="closingPrayer"
              name="closingPrayer"
              type="text"
              required
              defaultValue={meeting.closingPrayer}
              aria-describedby="closingPrayer-error"
              className="w-full"
            />

            <div id="closingPrayer-error" aria-live="polite">
              {state.errors?.closingPrayer?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h3 className="section-title">Announcements</h3>

      <textarea
        name="announcements"
        rows={4}
        className="w-full"
        defaultValue={meeting.announcements?.join(", ") ?? ""}
      />

      <h3 className="section-title">Opening Hymn</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="openingHymnNumber"
          type="number"
          defaultValue={meeting.openingHymn.number}
        />

        <input
          name="openingHymnTitle"
          type="text"
          defaultValue={meeting.openingHymn.title}
        />
      </div>

      <h3 className="section-title">Sacrament Hymn</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="sacramentHymnNumber"
          type="number"
          defaultValue={meeting.sacramentHymn.number}
        />

        <input
          name="sacramentHymnTitle"
          type="text"
          defaultValue={meeting.sacramentHymn.title}
        />
      </div>

      <h3 className="section-title">Closing Hymn</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="closingHymnNumber"
          type="number"
          defaultValue={meeting.closingHymn.number}
        />

        <input
          name="closingHymnTitle"
          type="text"
          defaultValue={meeting.closingHymn.title}
        />
      </div>

      <h3 className="section-title">Speakers</h3>

      <div className="space-y-4">
        {meeting.speakers.slice(0, 3).map((speaker, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-4">
            <input
              name={`speaker${index + 1}Name`}
              defaultValue={speaker.name}
              placeholder="Speaker Name"
            />

            <input
              name={`speaker${index + 1}Topic`}
              defaultValue={speaker.topic}
              placeholder="Topic"
            />
          </div>
        ))}
      </div>

      <h3 className="section-title">Ward Business</h3>

      <textarea
        name="wardBusiness"
        rows={4}
        className="w-full"
        defaultValue={meeting.wardBusiness.map((w) => w.description).join(", ")}
      />

      {state.message && (
        <div
          aria-live="polite"
          className="rounded-md border border-red-200 bg-red-50 p-3 text-red-700"
        >
          {state.message}
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isPending}
          className="primary-button disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Updating..." : "Update Meeting"}
        </button>
      </div>
    </form>
  );
}
