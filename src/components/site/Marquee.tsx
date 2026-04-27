export function Marquee() {
  const items = [
    "Spending insights",
    "Budget coach",
    "Bill negotiator",
    "Savings autopilot",
    "Credit builder",
    "Debt slayer",
  ];
  const all = [...items, ...items];
  return (
    <section className="border-y border-white/10 py-8 overflow-hidden bg-black">
      <div className="flex marquee-track whitespace-nowrap">
        {all.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white/80">
              {t}
            </span>
            <span className="w-2 h-2 rounded-full bg-white/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
