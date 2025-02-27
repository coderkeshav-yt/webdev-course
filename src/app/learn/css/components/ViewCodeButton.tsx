"use client";

interface ViewCodeButtonProps {
  onClick: () => void;
  className?: string;
}

export default function ViewCodeButton({ onClick, className = "" }: ViewCodeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors ${className}`}
    >
      View Code
    </button>
  );
} 