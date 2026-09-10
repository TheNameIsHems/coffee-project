import { type ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const variants = {
  primary:
    'bg-gradient-to-r from-coffee-600 to-coffee-700 text-white hover:from-coffee-700 hover:to-coffee-800 shadow-lg shadow-coffee-600/25 hover:shadow-coffee-700/30',
  secondary:
    'bg-cream-100 text-coffee-800 hover:bg-cream-200 border border-coffee-200',
  ghost:
    'bg-transparent text-coffee-700 hover:bg-coffee-50',
  outline:
    'bg-transparent border-2 border-coffee-500 text-coffee-600 hover:bg-coffee-500 hover:text-white',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        'active:scale-[0.97]',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
