import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  background = 'white'
}: SectionProps) {
  const bgColor = background === 'gray' ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-950';
  
  return (
    <section id={id} className={`py-20 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h2>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
