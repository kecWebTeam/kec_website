export default function PrincipalList() {
  const principals = [
    {
      name: "Shri M. Fakhruddin Ansari",
      year: "2017 - 2018",
    },
    {
      name: "Smt. Ranjana Kumari",
      year: "2018 - Present",
    },
  ];

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-[rgb(14,110,74)] text-white px-6 py-4 font-semibold text-lg">
        List of Principals
      </div>

      {principals.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center px-6 py-4 border-b last:border-none hover:bg-gray-50 transition"
        >
          <span className="text-gray-700">
            {index + 1}. {item.name}
          </span>

          <span className="text-gray-500">
            {item.year}
          </span>
        </div>
      ))}
    </div>
  );
}