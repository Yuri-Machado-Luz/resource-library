import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodePreviewProps {
  code: string;
  language?: string;
}

export default function CodePreview({
  code,
  language = 'tsx',
}: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card relative overflow-hidden rounded-xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-sm text-gray-400">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-[var(--hex-sec)] transition-colors hover:text-[var(--hex-sec-dull)]"
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
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm text-[var(--hex-main-white)]">
          {code}
        </code>
      </pre>
    </div>
  );
}
