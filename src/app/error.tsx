"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-linear-to-b from-red-100 to-red-200 p-6">
      <h1 className="mb-4 text-3xl font-bold text-red-800">Oops! Something went wrong.</h1>
      <p className="mb-6 max-w-md text-center text-red-700">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}
