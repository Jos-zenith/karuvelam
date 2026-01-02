const steps = [
  {
    label: "Monetize",
    title: "High-Value Bioactive Exports",
    text: "Bioactive extracts generate revenue that funds the heavy-duty clearing of deep Prosopis taproots",
    metric: "$20–70 Billion",
    statLabel: "Projected India Nutraceutical & Supplement Market (Early 2030s)",
    details:
      "Alkaloid and flavonoid exports (Vitexin/Juliprosopine) can plug into a fast-growing nutraceutical and clean-label preservative market, helping offset land clearing costs of ₹15,000–₹25,000 per acre",
  },
  {
    label: "Restore",
    title: "Biochar Soil Amendment",
    text: "Wood residues are converted to biochar and returned to fields to repair soil structure and pH",
    metric: "50–60% Boost",
    statLabel: "Soil Cation Exchange Capacity",
    details:
      "Biochar use has been shown to increase CEC and make phosphorus 2–5× more plant-available in acidic and neutral soils, improving fertility and water-holding capacity",
  },
  {
    label: "Reclaim",
    title: "Cash Crop Cultivation",
    text: "Within one season, farmers replant Ramnad Mundu chilli and drought-hardy millets on reclaimed, fertile land",
    metric: "Thousands of Litres",
    statLabel: "Water Saved per Acre per Day",
    details:
      "Removing dense Prosopis stands can save groundwater equivalent to thousands of litres per acre per day, improving yields of Mundu chilli and millets by double-digit percentages after restoration",
  },
];

export default function RestorationLoop() {
  return (
    <section className="py-16 bg-[#020908]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-[0.25em] text-emerald-300">
          RESTORATION LOOP
        </h2>
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
          Extract → Biochar → Reclaim: a closed local loop
        </h3>

        <div className="mt-8 grid md:grid-cols-[0.7fr_1.3fr] gap-8">
          <div className="relative h-56">
            <div className="absolute inset-0 rounded-full border border-emerald-800/70" />
            <div className="absolute inset-4 rounded-full border border-techblue/80" />
            <div className="absolute inset-10 flex items-center justify-center text-center text-xs text-gray-200 px-4">
              Prosopis biomass goes in. Bio-preservatives, antioxidants and
              biochar come out [Ramnad farmland is restored]
            </div>
          </div>

          <div className="space-y-4 text-sm">
            {steps.map((s, index) => (
              <div key={s.label} className="flex gap-3">
                <div className="mt-1 h-8 w-8 rounded-full bg-emerald-900 flex items-center justify-center text-[11px] font-semibold text-emerald-200">
                  {index + 1}
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400">
                    {s.label}
                  </p>
                  <p className="mt-1 text-gray-200">{s.text}</p>
                  <p className="mt-2 text-xs text-emerald-300">
                    {s.metric} · {s.statLabel}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{s.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
