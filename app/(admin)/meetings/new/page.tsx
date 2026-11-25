"use client";

import { useActionState } from "react";
import { createMeeting, type State } from "@/lib/actions";

export default function CreateMeetingForm() {
  const initialState: State = {
    message: null,
    errors: {},
  };

  const [state, formAction, isPending] =
    useActionState(createMeeting, initialState);

  return (
    <form
      action={formAction}
      className="card max-w-4xl mx-auto mt-10 space-y-8"
    >
      <h1>
        Create Meeting
      </h1>

      <div>
        <h3 className="section-title">
          Meeting Information
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="date"
              className="block mb-2 meeting-field"
            >
              Meeting Date
            </label>

            <input
              id="date"
              name="date"
              type="date"
              required
              aria-describedby="date-error"
              className="w-full"
            />

            <div
              id="date-error"
              aria-live="polite"
            >
              {state.errors?.date?.map((error) => (
                <p
                  key={error}
                  className="mt-1 text-sm text-red-600"
                >
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="meetingType"
              className="block mb-2 meeting-field"
            >
              Meeting Type
            </label>

            <select
              id="meetingType"
              name="meetingType"
              aria-describedby="meetingType-error"
              className="w-full"
            >
              <option value="regular">
                Regular
              </option>

              <option value="testimony">
                Testimony
              </option>

              <option value="stake">
                Stake
              </option>

              <option value="special">
                Special
              </option>
            </select>

            <div
              id="meetingType-error"
              aria-live="polite"
            >
              {state.errors?.meetingType?.map((error) => (
                <p
                  key={error}
                  className="mt-1 text-sm text-red-600"
                >
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="presiding"
              className="block mb-2 meeting-field"
            >
              Presiding
            </label>

            <input
              id="presiding"
              name="presiding"
              type="text"
              required
              aria-describedby="presiding-error"
              className="w-full"
            />

            <div
              id="presiding-error"
              aria-live="polite"
            >
              {state.errors?.presiding?.map((error) => (
                <p
                  key={error}
                  className="mt-1 text-sm text-red-600"
                >
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="conducting"
              className="block mb-2 meeting-field"
            >
              Conducting
            </label>

            <input
              id="conducting"
              name="conducting"
              type="text"
              required
              aria-describedby="conducting-error"
              className="w-full"
            />

            <div
              id="conducting-error"
              aria-live="polite"
            >
              {state.errors?.conducting?.map((error) => (
                <p
                  key={error}
                  className="mt-1 text-sm text-red-600"
                >
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="openingPrayer"
              className="block mb-2 meeting-field"
            >
              Opening Prayer
            </label>

            <input
            id="openingPrayer"
            name="openingPrayer"
            type="text"
            required
            aria-describedby="openingPrayer-error"
            className="w-full"
            />
             
            <div
            id="openingPrayer-error"
            aria-live="polite"
            >
            {state.errors?.openingPrayer?.map((error) => (
            <p
            key={error}
            className="mt-1 text-sm text-red-600"
            >
            {error}
            </p>
            ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="closingPrayer"
              className="block mb-2 meeting-field"
            >
              Closing Prayer
            </label>

            <input
  id="closingPrayer"
  name="closingPrayer"
  type="text"
  required
  aria-describedby="closingPrayer-error"
  className="w-full"
/>

<div
  id="closingPrayer-error"
  aria-live="polite"
>
  {state.errors?.closingPrayer?.map((error) => (
    <p
      key={error}
      className="mt-1 text-sm text-red-600"
    >
      {error}
    </p>
  ))}
</div>
        </div>
        </div>


        <div className="mt-4 flex items-center gap-3">
          <input
            id="stakeBusiness"
            name="stakeBusiness"
            type="checkbox"
            className="h-4 w-4"
          />

          <label
            htmlFor="stakeBusiness"
            className="meeting-field"
          >
            Stake Business
          </label>
        </div>
      </div>

        <h3 className="section-title">
        Announcements (comma-separated)
        </h3>

        <textarea
        id="announcements"
        name="announcements"
        rows={4}
        className="w-full"
        placeholder={`Temple trip Friday, Youth activity Wednesday`}
        />

        <h3 className="section-title">
        Opening Hymn
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
        <div>
        <label
        htmlFor="openingHymnNumber"
        className="block mb-2 meeting-field"
        >Hymn Numbe</label>

        <input
        id="openingHymnNumber"
        name="openingHymnNumber"
        type="number"
        className="w-full"
        />
        <div
  id="openingHymnNumber-error"
  aria-live="polite"
>
  {state.errors?.openingHymnNumber?.map((error) => (
    <p
      key={error}
      className="mt-1 text-sm text-red-600"
    >
      {error}
    </p>
  ))}
</div>
        </div>

        <div>
        <label
        htmlFor="openingHymnTitle"
        className="block mb-2 meeting-field"
        >
        Hymn Title
        </label>

        <input
        id="openingHymnTitle"
        name="openingHymnTitle"
        type="text"
        className="w-full"
        />
        <div
  id="openingHymnTitle-error"
  aria-live="polite"
>
  {state.errors?.openingHymnTitle?.map((error) => (
    <p
      key={error}
      className="mt-1 text-sm text-red-600"
    >
      {error}
    </p>
  ))}
</div>
        </div>
        </div>

        <h3 className="section-title">
        Sacrament Hymn
        </h3>

<div className="grid md:grid-cols-2 gap-4">

  <div>
    <input
      name="sacramentHymnNumber"
      type="number"
      placeholder="Hymn Number"
      aria-describedby="sacramentHymnNumber-error"
      className="w-full"
    />

    <div
      id="sacramentHymnNumber-error"
      aria-live="polite"
    >
      {state.errors?.sacramentHymnNumber?.map((error) => (
        <p
          key={error}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <input
      name="sacramentHymnTitle"
      type="text"
      placeholder="Hymn Title"
      aria-describedby="sacramentHymnTitle-error"
      className="w-full"
    />

    <div
      id="sacramentHymnTitle-error"
      aria-live="polite"
    >
      {state.errors?.sacramentHymnTitle?.map((error) => (
        <p
          key={error}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </p>
      ))}
    </div>
  </div>

</div>

        <h3 className="section-title">
        Closing Hymn
        </h3>

<div className="grid md:grid-cols-2 gap-4">

  <div>
    <input
      name="closingHymnNumber"
      type="number"
      placeholder="Hymn Number"
      aria-describedby="closingHymnNumber-error"
      className="w-full"
    />

    <div
      id="closingHymnNumber-error"
      aria-live="polite"
    >
      {state.errors?.closingHymnNumber?.map((error) => (
        <p
          key={error}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </p>
      ))}
    </div>
  </div>

  <div>
    <input
      name="closingHymnTitle"
      type="text"
      placeholder="Hymn Title"
      aria-describedby="closingHymnTitle-error"
      className="w-full"
    />

    <div
      id="closingHymnTitle-error"
      aria-live="polite"
    >
      {state.errors?.closingHymnTitle?.map((error) => (
        <p
          key={error}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </p>
      ))}
    </div>
  </div>

</div>

        <h3 className="section-title">
        Speakers
        </h3>

        <div className="space-y-4">

        <div className="grid md:grid-cols-2 gap-4">
        <input
        name="speaker1Name"
        type="text"
        placeholder="Speaker Name"
        />

        <input
        name="speaker1Topic"
        type="text"
        placeholder="Topic"
        />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
        <input
        name="speaker2Name"
        type="text"
        placeholder="Speaker Name"
        />

        <input
        name="speaker2Topic"
        type="text"
        placeholder="Topic"
        />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
        <input
        name="speaker3Name"
        type="text"
        placeholder="Speaker Name"
        />

        <input
        name="speaker3Topic"
        type="text"
        placeholder="Topic"
        />
        </div>

        </div>

        <h3 className="section-title">
        Ward Business (comma-separated)
        </h3>

        <textarea
        id="wardBusiness"
        name="wardBusiness"
        rows={4}
        className="w-full"
        placeholder={`Sustain Brother Smith, Approve Primary President`}
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
          {isPending
            ? "Saving..."
            : "Save Meeting"}
        </button>
      </div>
    </form>
  );
}