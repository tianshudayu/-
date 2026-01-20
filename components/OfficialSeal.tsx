import React from 'react';

export const OfficialSeal: React.FC = () => {
  return (
    <div className="absolute bottom-4 right-4 opacity-80 rotate-[-15deg] pointer-events-none">
      <svg width="140" height="140" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        </defs>
        <circle cx="100" cy="100" r="95" fill="none" stroke="#dc2626" strokeWidth="4" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="#dc2626" strokeWidth="2" />
        
        <text fill="#dc2626" fontSize="24" fontWeight="bold" letterSpacing="4">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            圆梦行动财政审批专用章
          </textPath>
        </text>
        
        <text x="100" y="115" textAnchor="middle" fill="#dc2626" fontSize="36" fontWeight="bold">
          通过
        </text>
        
        <path d="M100 65 L105 80 L120 80 L108 90 L112 105 L100 95 L88 105 L92 90 L80 80 L95 80 Z" fill="#dc2626" opacity="0.2" />
        
        <text x="100" y="140" textAnchor="middle" fill="#dc2626" fontSize="12">
          2025-11-13
        </text>
      </svg>
    </div>
  );
};