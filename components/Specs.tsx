
import React from 'react';
import { SpecItem } from '../types';

const specs: SpecItem[] = [
  { label: "Active Parameters", value: "2.7 Billion" },
  { label: "Quantized Size", value: "1.9 GB" },
  { label: "Hardware", value: "8GB RAM (Optimized)" },
  { label: "Context", value: "8,192 Tokens" },
  { label: "Training", value: "Mid-2024" },
  { label: "Privacy", value: "100% Local" }
];

const Specs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {specs.map((spec, index) => (
        <div key={index} className="flex justify-between items-baseline border-b border-neutral-50 pb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">{spec.label}</span>
          <span className="text-sm font-medium">{spec.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Specs;
