
import React from 'react';
import PasswordGenerator from '@/components/PasswordGenerator';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';
import { Globe, Mail, Phone, Lock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 dark:from-purple-950 dark:via-indigo-950 dark:to-purple-900 transition-colors duration-300">
      {/* Header with Logo and Theme Toggle */}
      <header className="w-full p-4 flex justify-between items-center">
        <Logo />
        <ThemeToggle />
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-2 text-purple-800 dark:text-purple-200 text-center">CSB Password Generator</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-md">
          Create strong, unpredictable passwords based on your criteria
        </p>
        <PasswordGenerator />
      </main>
      
      {/* Footer */}
      <footer className="w-full bg-purple-800 dark:bg-purple-900 text-white p-6">
        <div className="container mx-auto">
          {/* Centered Contact Info */}
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
              <a href="https://www.csbodima.lk/" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                <Globe className="h-4 w-4" />
                <span>www.csbodima.lk</span>
              </a>
              <a href="mailto:contact@csbodima.lk" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                <Mail className="h-4 w-4" />
                <span>contact@csbodima.lk</span>
              </a>
              <a href="tel:+94762320830" className="flex items-center gap-2 hover:text-purple-200 transition-colors">
                <Phone className="h-4 w-4" />
                <span>(+94) 76 2320 830</span>
              </a>
            </div>
          </div>
          
          <Separator className="bg-purple-600/50 my-4" />
          
          <div className="text-center text-sm text-purple-200">
            <p>CSB Developments © {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
