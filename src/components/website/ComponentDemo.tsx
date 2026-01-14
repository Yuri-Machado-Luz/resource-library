import React, { useState } from 'react';
import CodePreview from './CodePreview';
import { cn } from '../../lib/utils';

interface ComponentDemoProps {
  title: string;
  description: string;
  preview: React.ReactNode;
  code: string;
}

export default function ComponentDemo({
  title,
  description,
  preview,
  code,
}: ComponentDemoProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div id={title.toLowerCase().replace(/\s+/g, '-')} className="glass-card rounded-xl p-6 scroll-mt-32">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 font-[var(--font-logo)] text-glow-pri">
          {title}
        </h2>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2 border-b border-white/10">
          <button
            onClick={() => setActiveTab('preview')}
            className={cn(
              'px-4 py-2 font-medium transition-colors',
              activeTab === 'preview'
                ? 'text-[var(--hex-sec)] border-b-2 border-[var(--hex-sec)]'
                : 'text-gray-400 hover:text-white'
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={cn(
              'px-4 py-2 font-medium transition-colors',
              activeTab === 'code'
                ? 'text-[var(--hex-pri)] border-b-2 border-[var(--hex-pri)]'
                : 'text-gray-400 hover:text-white'
            )}
          >
            Code
          </button>
        </div>

        <div className="min-h-[200px]">
          {activeTab === 'preview' ? (
            <div className="flex items-center justify-center p-8 rounded-lg bg-[var(--hex-main-black)]/50">
              {preview}
            </div>
          ) : (
            <CodePreview code={code} />
          )}
        </div>
      </div>
    </div>
  );
}
