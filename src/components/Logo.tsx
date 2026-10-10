import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
}) => {
  const sizeClasses = {
    sm: 'text-base tracking-[0.25em]',
    md: 'text-xl tracking-[0.28em]',
    lg: 'text-3xl tracking-[0.3em]',
    xl: 'text-5xl md:text-6xl tracking-[0.32em]',
  };

  const markSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
    xl: 'w-12 h-12',
  };

  const textColor = variant === 'light' ? 'text-[#F8FAFC]' : 'text-[#080A0D]';

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold uppercase select-none ${className}`}>
      {/* Abstract geometric mark: Clean angular upward chevron evoking discipline & forward momentum */}
      <svg
        className={`${markSizes[size]} shrink-0`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 19L12 4L20 19"
          stroke={variant === 'light' ? '#F8FAFC' : '#080A0D'}
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M7.5 13.5H16.5"
          stroke={variant === 'light' ? '#F8FAFC' : '#080A0D'}
          strokeWidth="2.2"
        />
        {/* Subtle cyan accent point representing the spark of strategy */}
        <circle cx="19.5" cy="5.5" r="1.75" fill="#7DD3FC" />
      </svg>
      <span className={`font-extrabold ${textColor} ${sizeClasses[size]}`}>
        AGON
      </span>
    </div>
  );
};
