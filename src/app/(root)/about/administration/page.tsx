const AdministrationPage = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#094d33] via-[#0e6e4a] to-[#16a56f] px-8 py-7 shadow-lg">
        {/* Background Decoration */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="relative flex items-center justify-center gap-4">
          <h1 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
            Administrative Responsibility
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AdministrationPage;