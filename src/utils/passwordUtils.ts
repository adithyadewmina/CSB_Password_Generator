
// Password character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Generate password based on criteria
export const generatePassword = (
  length: number,
  includeLowercase: boolean,
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeSpecial: boolean
): string => {
  let charset = '';
  
  if (includeLowercase) charset += lowercaseChars;
  if (includeUppercase) charset += uppercaseChars;
  if (includeNumbers) charset += numberChars;
  if (includeSpecial) charset += specialChars;
  
  // If no character sets were selected, default to lowercase
  if (!charset) charset = lowercaseChars;
  
  let password = '';
  const charsetLength = charset.length;
  
  // Generate password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    password += charset[randomIndex];
  }
  
  return password;
};

// Calculate password strength
export const calculatePasswordStrength = (
  password: string,
  hasLowercase: boolean,
  hasUppercase: boolean,
  hasNumbers: boolean,
  hasSpecial: boolean
): { score: number; label: string; color: string } => {
  if (!password) {
    return { score: 0, label: 'None', color: '#ccc' };
  }
  
  let score = 0;
  
  // Length contribution (up to 5 points)
  score += Math.min(5, Math.floor(password.length / 3));
  
  // Character variety contribution (up to 4 points)
  if (hasLowercase) score += 1;
  if (hasUppercase) score += 1;
  if (hasNumbers) score += 1;
  if (hasSpecial) score += 1;
  
  // Calculate final score (max 10)
  const finalScore = Math.min(10, score);
  
  // Return score with label and color
  if (finalScore <= 3) {
    return { score: finalScore, label: 'Weak', color: '#ea384c' };
  } else if (finalScore <= 6) {
    return { score: finalScore, label: 'Medium', color: '#f97316' };
  } else if (finalScore <= 8) {
    return { score: finalScore, label: 'Strong', color: '#0EA5E9' };
  } else {
    return { score: finalScore, label: 'Very Strong', color: '#10b981' };
  }
};
