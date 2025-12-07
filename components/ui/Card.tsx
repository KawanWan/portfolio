import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2 cursor-pointer' : '';
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
