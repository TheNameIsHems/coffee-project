import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'featured' | 'seasonal' | 'category';
  className?: string;
}

const variants = {
  default: 'bg-coffee-100 text-coffee-700 border-coffee-200',
  featured: 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200',
  seasonal: 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200',
  category: 'bg-espresso-600 text-white border-transparent',
};

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={twMerge(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border',
        'transition-all duration-200',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
