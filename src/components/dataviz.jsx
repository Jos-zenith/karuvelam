import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label } from "recharts";
import { motion } from "framer-motion";

const bioactiveData = [
  { name: "Prosopis", concentration: 16, fill: "#10B981", fullLabel: "Prosopis Leaf" },
  { name: "Green Tea", concentration: 12, fill: "#3B82F6", fullLabel: "Green Tea Leaf" },
  { name: "Grape Seed", concentration: 8, fill: "#6366F1", fullLabel: "Grape Seed" },
];

export default function CompositionChart() {
  const [chartData, setChartData] = useState(bioactiveData.map(d => ({ ...d, concentration: 0 })));

  useEffect(() => {
    const timer = setTimeout(() => setChartData(bioactiveData), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-[#030806] p-8 rounded-3xl border border-emerald-900/30">
      <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
        Standardized Bioactive Yield (2026 Analysis)
      </h4>
      
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 40, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: '#374151' }} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            >
              <Label value="Source Material (Feedstock)" offset={-40} position="insideBottom" fill="#6B7280" />
            </XAxis>
            <YAxis 
              axisLine={{ stroke: '#374151' }} 
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 20]}
            >
              <Label value="Flavonoid Concentration (%)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle', fill: '#6B7280' }} />
            </YAxis>
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ backgroundColor: '#020617', border: '1px solid #10B981', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
              formatter={(value) => [`${value}%`, "Concentration"]}
            />
            <Bar 
              dataKey="concentration" 
              animationDuration={1500}
              radius={[6, 6, 0, 0]} 
              barSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <p className="text-gray-500 text-xs mt-8 italic text-center">
        Data reflects average flavonoid density in standardized ethanolic extracts prior to industrial concentration.
      </p>
    </div>
  );
}
