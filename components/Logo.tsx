import React from 'react';

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="256" cy="256" r="236" fill="#EFF6FF" stroke="#2563EB" strokeWidth="24"/>
      <path d="M256 64L286 154L226 154L256 64Z" fill="#2563EB" />
      <path d="M256 448L226 358L286 358L256 448Z" fill="#1E3A8A" />
      <path d="M64 256L154 226L154 286L64 256Z" fill="#1E3A8A" />
      <path d="M448 256L358 286L358 226L448 256Z" fill="#1E3A8A" />
      <path d="M176 286C176 186 226 136 256 136C286 136 336 186 336 286C336 386 286 386 256 386C226 386 176 386 176 286Z" fill="#1F2937" />
      <path d="M206 286C206 211 236 186 256 186C276 186 306 211 306 286C306 351 276 361 256 361C236 361 206 351 206 286Z" fill="#FFFFFF" />
      <circle cx="236" cy="236" r="12" fill="#1F2937" />
      <circle cx="276" cy="236" r="12" fill="#1F2937" />
      <path d="M246 256L266 256L256 276L246 256Z" fill="#F59E0B" />
      <path d="M176 256C156 286 156 326 176 346C176 346 166 306 176 256Z" fill="#1F2937" />
      <path d="M336 256C356 286 356 326 336 346C336 346 346 306 336 256Z" fill="#1F2937" />
    </svg>
  );
}
