const rows = [
  {
    source: "Prosopis juliflora (Seemai Karuvelam)",
    feedstockCost: "Negative (Revenue via MGNREGA / Landowner Payments)",
    bioactive: "~16% Flavonoid & Alkaloid (Juliprosopine) density; potent antimicrobial profile",
    coBenefits: "Restores 14,500L water/acre daily [sequesters ~2.5t CO2 via biochar]",
    advantage: "Disruptive pricing + Ecological restoration"
  },
  {
    source: "Green Tea Extract",
    feedstockCost: "High (Requires irrigation, fertilizers & food-grade land)",
    bioactive: "Catechin-rich (EGCG) profile; high standard for beverages",
    coBenefits: "Monoculture; high water footprint; limited landscape benefit",
    advantage: "Established market; high input costs"
  },
  {
    source: "Grape Seed",
    feedstockCost: "Medium–High (Seasonal supply dependent on winery cycles)",
    bioactive: "OPC-rich (Oligomeric Proanthocyanidins) for skincare",
    coBenefits: "By-product utility; no soil or groundwater recharge capacity",
    advantage: "Resource-intensive; seasonal volatility"
  },
];

export default function ValueMoatTable() {
  return (
    <section id="moat" className="bg-[#030806] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-[0.25em] text-emerald-300">
          VALUE MOAT · NEGATIVE-COST FEEDSTOCK
        </h2>
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold">
          Why our refinery beats conventional botanicals
        </h3>
        <p className="mt-4 text-sm text-gray-300">
          Competitors buy crops. We are paid to remove an invasive tree and turn
          it into exportable bioactive systems
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-emerald-900 bg-[#071410]/80 backdrop-blur">
          <table className="min-w-full text-left text-xs md:text-sm text-emerald-50">
            <thead className="text-[11px] uppercase tracking-wide bg-emerald-900/60">
              <tr>
                <th className="px-6 py-3">Source</th>
                <th className="px-6 py-3">Feedstock Cost</th>
                <th className="px-6 py-3">Bioactive Profile</th>
                <th className="px-6 py-3">Co-benefits</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.source}
                  className="border-t border-emerald-800/60"
                >
                  <td className="px-6 py-4 font-medium">{row.source}</td>
                  <td className="px-6 py-4">{row.feedstockCost}</td>
                  <td className="px-6 py-4">{row.bioactive}</td>
                  <td className="px-6 py-4">{row.coBenefits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
