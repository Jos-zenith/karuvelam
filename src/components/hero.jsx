export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center bg-gradient-to-b from-forest to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[24px] uppercase tracking-[0.25em] text-teal-300">
            VICTORI - The World’s First Negative-Cost Bio-Refinery
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Turning Ramanad’s Greatest Liability into its Purest Asset
          </h1>
          <p className="mt-5 text-sm md:text-base text-gray-200">
            Extracting high-value antioxidants and antimicrobials from invasive
            Prosopis juliflora to restore Ramnad&apos;s farmlands and unlock
            export-grade bio-preservatives
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs">
            <a
              href="#engine"
              className="px-6 py-3 rounded-full bg-techblue text-black font-semibold"
            >
              VIEW THE B2B ENGINE
            </a>
            <a
              href="#calculator"
              className="px-6 py-3 rounded-full border border-teal-300 text-teal-200"
            >
              ROI CALCULATOR
            </a>
          </div>
        </div>

        <div className="relative h-80 md:h-96 flex items-center justify-center">
          <div className="absolute inset-4 rounded-[40%] border border-emerald-500/40 blur-sm" />
          <div className="absolute inset-8 rounded-3xl border border-techblue/60 shadow-[0_0_40px_rgba(0,168,232,0.45)]" />
          <div className="absolute inset-10 rounded-3xl bg-gradient-to-tr from-forest/60 via-transparent to-techblue/20 blur-md" />

          <img
            src="/images.jpeg"
            alt="Seemai Karuvelam tree"
            className="relative z-10 h-full w-full object-cover rounded-3xl mix-blend-screen saturate-125 contrast-110"
          />

          <div className="absolute bottom-4 left-4 z-20 px-3 py-2 rounded-xl bg-black/60 border border-emerald-500/60 text-[10px] font-mono text-emerald-200">
            <p>{`tree.id = "SEEMAI-KARUVELAM"`}</p>
            <p>{`biomass.flavonoids ≈ 0.16`}</p>
            <p>{`status => "NEGATIVE_COST_FEEDSTOCK"`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
