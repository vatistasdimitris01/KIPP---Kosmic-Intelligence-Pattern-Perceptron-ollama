
import React from 'react';
import { PersonalityTrait } from '../types';

const traits: PersonalityTrait[] = [
  { title: "Zero-Refusal", description: "Minimal corporate moralizing. KIPP prioritizes direct answers over ethical warnings." },
  { title: "Witty Persona", description: "A unique, often sarcastic tone that brings personality to local interactions." },
  { title: "High Fidelity", description: "Complex instruction following despite the ultra-low memory footprint." }
];

const Personality: React.FC = () => {
  return (
    <div className="space-y-12">
      {traits.map((trait, index) => (
        <div key={index} className="max-w-xl">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-2">{trait.title}</h3>
          <p className="text-neutral-500 leading-relaxed font-light">
            {trait.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Personality;
