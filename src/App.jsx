import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import ProblemSection from "./components/problemsection";
import ImpactSection from "./components/impactsection";
import B2BEngine from "./components/B2Bengine";
import ValueMoatTable from "./components/valuemoattable";
import RestorationLoop from "./components/restorationloop";
import DataViz from "./components/dataviz";
import Calculator from "./components/calculator";
import LocalImpact from "./components/localimpact";
import NavBar from "./components/navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-020908 via-04110e to-black">
      <NavBar />
      <main className="pt-16 max-w-6xl mx-auto px-4 pb-10">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/problem" element={<ProblemSection />} />
          <Route path="/impact" element={<ImpactSection />} />
          <Route path="/engine" element={<B2BEngine />} />
          <Route path="/moat" element={<ValueMoatTable />} />
          <Route path="/restoration" element={<RestorationLoop />} />
          <Route path="/dataviz" element={<DataViz />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/local" element={<LocalImpact />} />
        </Routes>
      </main>
      <footer className="py-10 text-center text-xs text-gray-400">
        VICTORI — Negative-Cost Bio-Refinery for Ramnad
      </footer>
    </div>
  );
}
