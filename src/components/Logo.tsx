
import React from 'react';
import { Lock } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg">
        <Lock className="h-5 w-5 text-white" />
      </div>
      <span className="font-bold text-xl text-purple-800 dark:text-purple-300">CSB Developments</span>
    </div>
  );
};

export default Logo;
