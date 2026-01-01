
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
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-black pb-2">
        <code className="text-sm font-medium mono">{command}</code>
        <button 
          onClick={handleCopy}
          className="text-[9px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="text-[9px] text-neutral-300 uppercase tracking-widest">Run in local terminal</p>
    </div>
  );
};

export default Terminal;
