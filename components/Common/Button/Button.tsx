// components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='w-[200px] rounded-md bg-blue-600 px-4 py-2 text-white focus:outline-none'>
      {children}
    </button>
  );
};
export default Button;
