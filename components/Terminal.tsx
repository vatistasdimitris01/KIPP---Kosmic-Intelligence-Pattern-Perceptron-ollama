
import React, { useState } from 'react';

const Terminal: React.FC = () => {
  const command = "ollama run vatistasdim/KIPP";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="p-6 bg-neutral-50 border border-neutral-100 rounded-sm mono text-sm flex items-center justify-between">
        <code className="text-neutral-600">
          <span className="text-neutral-300 mr-2">$</span>
          {command}
        </code>
        <button 
          onClick={handleCopy}
          className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
        >
          {copied ? 'Done' : 'Copy'}
        </button>
      </div>
      <p className="mt-4 text-[10px] text-neutral-400 uppercase tracking-widest">Requires Ollama 0.1.32 or higher</p>
    </div>
  );
};

export default Terminal;
