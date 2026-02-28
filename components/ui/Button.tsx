import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-[#4F46E5] text-white hover:bg-[#4338CA]",
            secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
            outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
            ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-600",
            link: "text-[#4F46E5] underline-offset-4 hover:underline",
        };

        const sizes = {
            sm: "h-9 px-3",
            md: "h-11 px-6 py-2",
            lg: "h-12 px-8",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
