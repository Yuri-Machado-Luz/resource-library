import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      glow = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
      primary:
        'bg-gradient-to-r from-[var(--hex-pri)] to-[var(--hex-pri-dark)] text-white hover:from-[var(--hex-pri-light)] hover:to-[var(--hex-pri)] focus:ring-[var(--hex-pri)]',
      secondary:
        'bg-gradient-to-r from-[var(--hex-sec)] to-[var(--hex-sec-dull)] text-[var(--hex-main-black)] hover:from-[var(--hex-sec-dull)] hover:to-[var(--hex-sec)] focus:ring-[var(--hex-sec)]',
      outline:
        'border-2 border-[var(--hex-pri)] text-[var(--hex-pri)] hover:bg-[var(--hex-pri)] hover:text-white focus:ring-[var(--hex-pri)]',
      ghost:
        'text-[var(--hex-main-white)] hover:bg-[var(--hex-main-gray)] focus:ring-[var(--hex-main-gray)]',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3.5 text-lg',
    };

    const glowStyle = glow
      ? variant === 'secondary'
        ? 'glow-sec'
        : 'glow-pri'
      : '';

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          glowStyle,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
