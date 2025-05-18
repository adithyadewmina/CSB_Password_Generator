
import React, { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';
import { generatePassword, calculatePasswordStrength } from '@/utils/passwordUtils';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const PasswordGenerator: React.FC = () => {
  // Password criteria state
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  
  // Generated password state
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: 'None',
    color: '#ccc'
  });

  // Generate a password on component mount and when criteria change
  useEffect(() => {
    generateNewPassword();
  }, [passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial]);

  // Function to generate a new password
  const generateNewPassword = () => {
    const newPassword = generatePassword(
      passwordLength,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSpecial
    );
    
    setPassword(newPassword);
    
    // Calculate password strength
    const strength = calculatePasswordStrength(
      newPassword,
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSpecial
    );
    
    setPasswordStrength(strength);
  };

  // Copy password to clipboard
  const copyToClipboard = async () => {
    if (!password) return;
    
    try {
      await navigator.clipboard.writeText(password);
      toast.success('Password copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy password');
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
        <CardTitle className="text-center">Password Generator</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6">
        {/* Password Display */}
        <div className="relative mb-6">
          <div 
            className="w-full p-3 bg-gray-50 dark:bg-gray-800 border rounded-md flex justify-between items-center cursor-pointer"
            onClick={copyToClipboard}
          >
            <div className="font-mono text-base break-all mr-2 text-gray-800 dark:text-gray-200">
              {password || 'Click Generate to create password'}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={(e) => {
                e.stopPropagation();
                copyToClipboard();
              }}
              title="Copy to clipboard"
              className="flex-shrink-0"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Password Strength Indicator */}
        <PasswordStrengthIndicator 
          score={passwordStrength.score}
          label={passwordStrength.label}
          color={passwordStrength.color}
        />
        
        {/* Password Length Slider */}
        <div className="mb-5">
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600 dark:text-gray-300">Password Length:</label>
            <span className="text-sm font-medium">{passwordLength}</span>
          </div>
          <Slider
            value={[passwordLength]}
            min={4}
            max={32}
            step={1}
            onValueChange={(value) => setPasswordLength(value[0])}
            className="cursor-pointer"
          />
        </div>
        
        {/* Password Options */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600 dark:text-gray-300">Include Lowercase</label>
            <Switch 
              checked={includeLowercase}
              onCheckedChange={setIncludeLowercase}
              disabled={!includeUppercase && !includeNumbers && !includeSpecial}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600 dark:text-gray-300">Include Uppercase</label>
            <Switch 
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
              disabled={!includeLowercase && !includeNumbers && !includeSpecial}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600 dark:text-gray-300">Include Numbers</label>
            <Switch 
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
              disabled={!includeLowercase && !includeUppercase && !includeSpecial}
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-sm text-gray-600 dark:text-gray-300">Include Special Characters</label>
            <Switch 
              checked={includeSpecial}
              onCheckedChange={setIncludeSpecial}
              disabled={!includeLowercase && !includeUppercase && !includeNumbers}
            />
          </div>
        </div>
        
        {/* Generate Button */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
          onClick={generateNewPassword}
        >
          Generate New Password
        </Button>
      </CardContent>
    </Card>
  );
};

export default PasswordGenerator;
