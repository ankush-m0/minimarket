import { cn } from '@/util/mergecn';
import React from 'react';

interface PrimaryBtnWithIconIP {
  text: any;
  type: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: 'filled' | 'outline';
  isDisabled?: boolean;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const PrimaryBtnComponent = ({
  text,
  type = 'button',
  icon,
  onClick,
  variant = 'filled',
  isDisabled = false,
  iconPosition = 'left',
  className = '',
}: PrimaryBtnWithIconIP) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'font-bold py-2 px-4 shadow-btn-4 border-2 border-black text-base tracking-tight disabled:bg-opacity-80 ',
        variant === 'outline' &&
          'bg-white text-black',
        variant === 'filled' &&
          'bg-primary text-black hover:bg-opacity-80',
        iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse',
        className
      )}
      disabled={isDisabled}
    >
      {icon && icon} {text}
    </button>
  );
};

export default PrimaryBtnComponent;
