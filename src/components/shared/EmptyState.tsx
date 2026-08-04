import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const EmptyState = ({
  icon: Icon,
  title,
  description,
  className = "",
}: EmptyStateProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#cfe6d8] bg-[#f8fcfa] px-8 py-20 text-center ${className}`}
    >
      <Icon className="h-10 w-10 text-[#0e6e4a]" />

      <h2 className="mt-6 text-3xl font-bold text-[#0e6e4a]">{title}</h2>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;
