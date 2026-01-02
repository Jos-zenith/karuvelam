const bullets = [
  {
    title: "Water Theft",
    text: "In coastal regions like Ramnad, the deep-rooting system depletes freshwater tables, triggering saltwater intrusion. According to the Ghyben-Herzberg relation, a mere 1 meter drop in the freshwater table can cause the saltwater interface to rise by 40 meters",
  },
  {
    title: "Land Loss",
    text: "In TamilNadu, 6.82 lakh hectares (about 5% of total area). Ramanad is the most heavily infested district in the state, with 115,434 hectares dominated by these thickets",
  },
  {
    title: "Economic Drain",
    text: "Farmers and the state face high removal costs. Historically, the total cost to remove Karuvelam across the state was pegged at ₹1,500 crore. Locally, individual farmers may spend upwards of ₹15,000–₹25,000 per acre for mechanical clearing",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-16 bg-[#050b09]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-[0.25em] text-emerald-300">
          THE RAMNAD CRISIS
        </h2>
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
          Converting an invasive crisis into bioactive gold
        </h3>
        <p className="mt-4 text-sm text-gray-300 max-w-3xl">
          Prosopis juliflora silently eats water, land and farmer cash flows
          Before extraction and exports, we must show how big the leak really is
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {bullets.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-emerald-900 bg-[#071410] p-5 text-sm"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400">
                {b.title}
              </p>
              <p className="mt-3 text-gray-200">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
