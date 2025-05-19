
import React from 'react';

const Logo: React.FC = () => {
  const externalWebsiteUrl = "https://csbodima.lk";
  
  return (
    <a 
      href={externalWebsiteUrl}
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
    >
      <div className="h-10 w-10">
        <img 
          src="/logo.webp" 
          alt="CSBODIMA Logo" 
          className="h-full w-full object-contain"
        />
      </div>
      <span className="font-bold text-xl text-purple-800 dark:text-purple-300">CSB Developments</span>
    </a>
  );
};

export default Logo;
