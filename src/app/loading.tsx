import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-linear-to-b from-gray-100 to-gray-200">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
