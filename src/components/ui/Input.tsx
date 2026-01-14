import React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, type = 'text', ...props }, ref) => {
    const baseStyles =
      'w-full px-4 py-2.5 rounded-lg border bg-[var(--hex-main-black)] text-[var(--hex-main-white)] placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:ring-2';

    const borderStyle = error
      ? 'border-[var(--hex-pri)] focus:ring-[var(--hex-pri)]'
      : 'border-gray-700 focus:border-[var(--hex-sec)] focus:ring-[var(--hex-sec)]';

    return (
      <input
        ref={ref}
        type={type}
        className={cn(baseStyles, borderStyle, className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
