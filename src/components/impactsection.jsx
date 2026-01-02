const cards = [
  {
    title: "Ecological Impact",
    metric: "Water Saved",
    desc: "Clearing 1 acre of dense Prosopis thickets can return approximately 4,000 to 14,500 liters of groundwater per day to the local ecosystem",
  },
  {
    title: "Social Impact",
    metric: "MGNREGA Jobs",
    desc: " In Tamil Nadu, MGNREGA workers are actively engaged in raising native seedlings to replace cleared Prosopis",
  },
  {
    title: "Economic Impact",
    metric: "High-Margin Exports",
    desc: " Converting Prosopis biomass into biochar via pyrolysis can increase crop yields by an average of 11–15% for cereals like wheat and up to 30% for legumes",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-16 bg-[#030806]">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
          One weed, three powerful impact streams
        </h3>

        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-emerald-900 bg-[#071410] p-5"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400">
                {c.title}
              </p>
              <p className="mt-2 text-lg font-semibold text-emerald-100">
                {c.metric}
              </p>
              <p className="mt-3 text-gray-200">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
