import { useState } from "react";

export default function Calculator() {
  const [acres, setAcres] = useState(1);

  const biomassPerAcre = 500;
  const flavonoids = acres * biomassPerAcre * 0.16; // keep numeric
  const removalCostSaved = acres * 20000;
  const marketValue = flavonoids * 150; // keep numeric

  return (
    <section
      id="calculator"
      className="w-full bg-[#030806] border border-emerald-900/40 rounded-3xl p-6 md:p-8 mt-10 md:mt-16"
    >
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Calculator UI */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-emerald-300 text-xs font-semibold tracking-[0.2em]">
            RESTORATION & REVENUE CALCULATOR
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Estimate flavonoid yield and economic upside from{" "}
            <span className="text-emerald-400 font-medium">
              Seemai Karuvelam (Prosopis juliflora)
            </span>{" "}
            removal at scale.
          </p>

          <label className="block text-xs text-gray-400 mb-1">
            Acres of land infested with Prosopis juliflora
          </label>
          <input
            type="number"
            min="0"
            value={acres}
            onChange={(e) => setAcres(Number(e.target.value || 0))}
            className="w-full border border-gray-700 bg-black/40 text-gray-100 p-2.5 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-techblue text-sm"
            aria-label="Acres of land input"
          />

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-emerald-200">
              <span>🌿 Flavonoids extractable</span>
              <span className="font-semibold">{flavonoids.toFixed(1)} kg</span>
            </div>
            <div className="flex justify-between text-sky-200">
              <span>💰 Potential revenue from flavonoids</span>
              <span className="font-semibold">
                ₹{marketValue.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-amber-200">
              <span>🚜 Landowner removal cost saved</span>
              <span className="font-semibold">
                ₹{removalCostSaved.toLocaleString()}
              </span>
            </div>
          </div>

          <p className="text-[11px] text-gray-500 mt-3">
            Assumes 500 kg biomass/acre, 16% flavonoid-rich fraction, and
            indicative flavonoid value with typical mechanical removal costs.
          </p>
        </div>

        {/* Stylized dense-leaf tree illustration */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Ground glow */}
            <div className="absolute inset-x-4 bottom-4 h-8 rounded-full bg-emerald-500/10 blur-xl" />

            {/* Trunk */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-4 h-20 rounded-full bg-gradient-to-b from-amber-200 to-emerald-900 shadow-[0_0_15px_rgba(16,185,129,0.4)]" />

            {/* Dense leaf canopy */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-20 w-40 h-32
                         rounded-full border border-emerald-500/40 shadow-[0_0_30px_rgba(52,211,153,0.35)]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 0%, #22c55e 0, #22c55e 24%, transparent 60%),
                  radial-gradient(circle at 45% 10%, #4ade80 0, #4ade80 22%, transparent 60%),
                  radial-gradient(circle at 70% 0%, #22c55e 0, #22c55e 24%, transparent 60%),
                  radial-gradient(circle at 15% 40%, #16a34a 0, #16a34a 24%, transparent 60%),
                  radial-gradient(circle at 40% 45%, #22c55e 0, #22c55e 26%, transparent 65%),
                  radial-gradient(circle at 70% 45%, #16a34a 0, #16a34a 24%, transparent 60%),
                  radial-gradient(circle at 10% 75%, #22c55e 0, #22c55e 24%, transparent 60%),
                  radial-gradient(circle at 35% 80%, #4ade80 0, #4ade80 22%, transparent 60%),
                  radial-gradient(circle at 65% 78%, #22c55e 0, #22c55e 24%, transparent 60%),
                  radial-gradient(circle at 90% 70%, #16a34a 0, #16a34a 22%, transparent 60%),
                  radial-gradient(circle at 50% 35%, #bbf7d0 0, #22c55e 36%, transparent 70%)
                `,
              }}
            />

            {/* Shadow behind canopy */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-20 w-44 h-32 bg-emerald-900/40 blur-[1px] rounded-full mix-blend-screen" />

            {/* Foreground bushes */}
            <div className="absolute bottom-6 left-4 w-9 h-9 rounded-full bg-gradient-to-t from-emerald-800 to-emerald-500/70 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
            <div className="absolute bottom-5 right-3 w-8 h-8 rounded-full bg-gradient-to-t from-emerald-900 to-emerald-500/60 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-t from-emerald-900 to-emerald-400/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />

            {/* Caption */}
            <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.16em] text-emerald-300/80 uppercase">
              Virtual Tree
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
