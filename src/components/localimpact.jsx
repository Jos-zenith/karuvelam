export default function LocalImpact() {
  return (
    <section id="local" className="py-16 bg-[#020908]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-xs uppercase tracking-[0.25em] text-emerald-300 font-bold">
          LOCAL EDGE · RAMNAD 2026
        </h2>
        <h3 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
          Built for Ramnad first, then for the world
        </h3>

        <div className="mt-10 grid md:grid-cols-2 gap-10 text-base">
          <div className="space-y-6">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400 font-bold">
                MGNREGA LABOR ARBITRAGE
              </p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Operations leverage Tamil Nadu's 2026 MGNREGA pool, which accounts for 
                <span className="text-white font-semibold"> 22% of national demand</span>. 
                With a daily wage rate of <span className="text-white font-semibold">₹267.54</span>, 
                harvesting is decentralized, reducing CAPEX while securing predictable wages for 
                thousands of local households
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400 font-bold">
                VALINOKKAM COASTAL DEFENSE
              </p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                In the Valinokkam belt, clearing 1 acre recovers <span className="text-white font-semibold">14,500L of groundwater daily</span>. 
                This freshwater "lens" creates a hydraulic barrier that pushes back seawater intrusion, 
                protecting the village’s potable wells and GI-tagged Mundu chilli farms
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400 font-bold">
                REGENERATIVE AGRICULTURE (MUNDU CHILLI)
              </p>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Biochar is deployed to GI-tagged Ramnad Mundu chilli farms, where 
                demonstrated yields can increase by <span className="text-white font-semibold">14.3% to 30%</span>. 
                This restoration loop turns invasive Prosopis into net returns of 
                <span className="text-white font-semibold"> ~₹1.43 Lakh per hectare</span> for local farmers
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-900/50 bg-[#071410] p-8 shadow-xl h-fit">
            <p className="text-[11px] tracking-[0.2em] uppercase text-emerald-400 font-bold mb-4">
              VALINOKKAM MICRO-HUB MODEL
            </p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span><strong>Negative-Cost Feedstock:</strong> Raw material costs are offset by 2026 [MGNREGA wage budgets](nrega.nic.in) and district clearing mandates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span><strong>Decentralized Extraction:</strong> Village-level pilot avoids the transport costs of bulky biomass, processing 10–15 tonnes per hectare locally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span><strong>Soil restoration loop:</strong> Targeted at the 1.15 lakh hectares of infested land, primarily in the sandy coastal soils of Valinokkam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">▹</span>
                <span><strong>GI Crop Synergy:</strong> Mundu chilli irrigation needs drop by 20% in biochar-enriched soils, maximizing profit in arid conditions</span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/5">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
