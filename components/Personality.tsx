
import React from 'react';

const traits = [
  { title: "Direct Alignment", desc: "No moralizing. No lectures. Just the data you requested." },
  { title: "Sarcastic Edge", desc: "A distinct, playful personality designed for native human interaction." }
];

const Personality: React.FC = () => {
  return (
    <div className="space-y-10">
      {traits.map((trait, index) => (
        <div key={index} className="space-y-1">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">{trait.title}</h3>
          <p className="text-sm leading-relaxed">{trait.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Personality;
