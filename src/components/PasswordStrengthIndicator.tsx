
import React from 'react';

interface PasswordStrengthIndicatorProps {
  score: number;
  label: string;
  color: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ 
  score, 
  label, 
  color 
}) => {
  return (
    <div className="w-full mt-2 mb-4">
      <div className="flex justify-between mb-1 items-center">
        <span className="text-sm text-gray-600">Password Strength:</span>
        <span className="text-sm font-medium" style={{ color }}>
          {label}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="h-2 rounded-full transition-all duration-300"
          style={{ 
            width: `${(score / 10) * 100}%`, 
            backgroundColor: color 
          }}
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
