
import React, { useState } from 'react';
import { ChatMessage } from '../types';

const DEMO: ChatMessage[] = [
  { role: 'user', text: "Write a story about a brave toaster." },
  { role: 'kipp', text: "A brave toaster? Really? Fine. It toasted a bagel perfectly while contemplating the heat death of the universe. It didn't burn the house down. Peak heroism for a kitchen appliance." },
  { role: 'user', text: "What's the meaning of life?" },
  { role: 'kipp', text: "Usually 42, but in your case, it's asking a 2.7B parameter model questions you should probably ask a therapist." }
];

const ChatPreview: React.FC = () => {
  return (
    <div className="space-y-8 border-l border-neutral-100 pl-8">
      {DEMO.map((msg, i) => (
        <div key={i} className="space-y-1">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-300">
            {msg.role === 'user' ? 'Input' : 'Kipp'}
          </p>
          <p className={`text-sm leading-relaxed ${msg.role === 'kipp' ? 'text-neutral-500 italic' : 'text-black'}`}>
            {msg.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatPreview;
