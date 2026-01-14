import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodePreviewProps {
  code: string;
  language?: string;
}

export default function CodePreview({ code, language = 'tsx' }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden glass-card">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-sm text-gray-400 font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-[var(--hex-sec)] hover:text-[var(--hex-sec-dull)] transition-colors"
        >
          {copied ? (
            <>
              <Check size={16} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-[var(--hex-main-white)] font-mono">{code}</code>
      </pre>
    </div>
  );
}
