"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-15 gap-4">
      <h1>Oh no!</h1>
      <h2>{error.message}</h2>
      <button onClick={reset} className="secondary-button w-100">
        Try Again
      </button>
    </div>
  );
}
