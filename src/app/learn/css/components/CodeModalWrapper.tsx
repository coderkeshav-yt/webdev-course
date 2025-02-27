"use client";

import { useState } from 'react';

interface CodeModalProps {
  code: string;
  onClose: () => void;
}

const CodeModal = ({ code, onClose }: CodeModalProps) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Code Example</h3>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
        <code className="text-sm text-blue-600 dark:text-blue-400">{code}</code>
      </pre>
    </div>
  </div>
);

export default function CodeModalWrapper() {
  const [activeCode, setActiveCode] = useState<string | null>(null);

  return (
    <>
      {/* Your modal instances */}
      {activeCode === 'transitions-animations' && (
        <CodeModal
          code={`// CSS Transitions & Animations Overview...`}
          onClose={() => setActiveCode(null)}
        />
      )}
      {/* ... other modal instances ... */}
    </>
  );
}

export { type CodeModalProps }; 