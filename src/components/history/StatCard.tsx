import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  value: string;
}

export default function StatCard({
  icon: Icon,
  title,
  value,
}: Props) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-gray-200
      bg-gradient-to-br
      from-white
      to-green-50
      p-7
      transition-all
      duration-300
      hover:shadow-2xl
      hover:-translate-y-2
    "
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[rgb(14,110,74)]/10 group-hover:bg-[rgb(14,110,74)] transition">

        <Icon
          className="text-[rgb(14,110,74)] group-hover:text-white"
          size={32}
        />

      </div>

      <h2 className="mt-6 text-4xl font-bold text-gray-800">
        {value}
      </h2>

      <p className="mt-2 text-gray-500">
        {title}
      </p>

    </div>
  );
}