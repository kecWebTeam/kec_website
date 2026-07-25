import { LucideIcon } from "lucide-react";

interface InfoRowProps {
  icon: LucideIcon;
  title: string;
  value: React.ReactNode;
}

export default function InfoRow({
  icon: Icon,
  title,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-none">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-[rgb(14,110,74)]/10 flex items-center justify-center">
          <Icon
            size={18}
            className="text-[rgb(14,110,74)]"
          />
        </div>

        <span className="font-medium text-gray-700">
          {title}
        </span>
      </div>

      <div className="text-gray-700 font-medium">
        {value}
      </div>
    </div>
  );
}