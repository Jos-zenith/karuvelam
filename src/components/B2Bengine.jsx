const products = [
  {
    title: "Bio-Preservatives",
    subtitle: "Juliprosopine",
    text: "Extracts show a growth inhibition zone of up to 25 mm for common skin pathogens, positioning them as viable \"natural paraben killers\" for the skincare industry",
  },
  {
    title: "Antioxidants",
    subtitle: "Vitexin",
    text: "extracts can extend the shelf life of perishable products by up to 77% by reducing aerobic bacterial counts by 85.8%",
    text: "used to replace synthetic antioxidants (BHA/BHT) in the nutraceutical sector, which in India is projected to reach a market value of $1.03 billion by 2034",
  },
  {
    title: "Soil Gold",
    subtitle: "Biochar",
    text: "Biochar improves soil water-holding capacity and can boost crop yields by 21% for maize and up to 30% for wheat when combined with standard fertilizers [phosphorus (+264%) and nitrogen (+32%)]",
  },
];

const steps = [
  "Prosopis mapped and harvested from infested acres.",
  "Leaves & pods run through UAE / supercritical extraction.",
  "Wood residues converted into engineered biochar.",
  "Restored land replanted with native crops and Ramnad Mundu chilli.",
];

export default function B2BEngine() {
  return (
    <section id="engine" className="py-16 bg-[#04110e]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-10">
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            THE B2B ENGINE · BIOMASS TO BIOACTIVES
          </h2>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
            A deep-tech fractionation platform, not just firewood
          </h3>
          <p className="mt-4 text-sm text-gray-200">
            Sequential extraction converts unwanted biomass into three
            export-ready product lines while paying for its own removal
          </p>

          <div className="mt-6 space-y-4 text-sm">
            {steps.map((s, i) => (
              <div key={s} className="flex gap-3">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-techblue/20 border border-techblue text-[11px] flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-gray-200">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm">
          {products.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-emerald-900 bg-[#071410] p-5"
            >
              <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400">
                {p.title}
              </p>
              <p className="mt-1 text-[13px] font-semibold text-emerald-100">
                {p.subtitle}
              </p>
              <p className="mt-3 text-gray-200">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
