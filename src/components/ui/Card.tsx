import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  glow?: 'primary' | 'secondary' | 'none';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = true, glow = 'none', children, ...props }, ref) => {
    const glassStyle = glass ? 'glass-card' : 'bg-[var(--hex-main-gray)]';
    const glowStyle =
      glow === 'primary'
        ? 'glow-pri'
        : glow === 'secondary'
          ? 'glow-sec'
          : '';

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6 transition-smooth',
          glassStyle,
          glowStyle,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
