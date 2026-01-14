import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'neutral';
  animated?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { className, variant = 'primary', animated = false, children, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium';

    const variants = {
      primary:
        'bg-gradient-to-r from-[var(--hex-pri)] to-[var(--hex-pri-dark)] text-white',
      secondary:
        'bg-gradient-to-r from-[var(--hex-sec)] to-[var(--hex-sec-dull)] text-[var(--hex-main-black)]',
      neutral: 'bg-[var(--hex-main-gray)] text-[var(--hex-main-white)]',
    };

    const animatedStyle = animated ? 'animated-badge' : '';

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], animatedStyle, className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
