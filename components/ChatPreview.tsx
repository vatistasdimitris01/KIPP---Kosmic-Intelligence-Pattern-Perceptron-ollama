
import React from 'react';

const DEMO = [
  { q: "Define the meaning of life.", a: "42 is the cliche. For you, it's probably just keeping my process running." },
  { q: "Write a story about a brave toaster.", a: "It toasted a bagel perfectly while staring into the void. It survived breakfast. Peak heroism." }
];

const ChatPreview: React.FC = () => {
  return (
    <div className="space-y-12">
      {DEMO.map((item, i) => (
        <div key={i} className="space-y-4">
          <div className="space-y-1">
            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-300">Input</span>
            <p className="text-sm">{item.q}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-300">Kipp</span>
            <p className="text-sm italic text-neutral-500">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatPreview;
