import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center px-6 pb-4">
      <Image
        src="/404.svg"
        alt="404 Not Found"
        width={500}
        height={400}
        priority
        className="mb-8"
      />

      <Link
        href="/"
        className="rounded-lg bg-emerald-500 px-8 py-2 font-semibold text-white transition hover:bg-emerald-600"
      >
        Back to Home
      </Link>
    </main>
  );
}