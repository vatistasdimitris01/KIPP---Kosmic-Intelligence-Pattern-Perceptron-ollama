
import React from 'react';

const specs = [
  { label: "Arch", value: "Quantized Perceptron" },
  { label: "Params", value: "2.7 Billion" },
  { label: "Footprint", value: "1.9 GB" },
  { label: "Context", value: "8K Tokens" },
  { label: "Privacy", value: "100% Local" }
];

const Specs: React.FC = () => {
  return (
    <div className="space-y-3">
      {specs.map((spec, index) => (
        <div key={index} className="flex gap-4 items-baseline text-sm">
          <span className="w-20 text-[9px] font-bold uppercase tracking-widest text-neutral-300">{spec.label}</span>
          <span className="font-normal">{spec.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Specs;
