import React from 'react';
import { cn } from '../../lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'full';
  centered?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, size = 'lg', centered = false, children, ...props },
    ref
  ) => {
    const sizes = {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      full: 'max-w-full',
    };

    const centeredStyle = centered ? 'mx-auto' : '';

    return (
      <div
        ref={ref}
        className={cn('px-4 sm:px-6 lg:px-8', sizes[size], centeredStyle, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

export default Container;
