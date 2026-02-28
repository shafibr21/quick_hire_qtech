import { cn } from '@/lib/utils';

export function JobList({
    children,
    columns = 2,
    className
}: {
    children: React.ReactNode;
    columns?: 1 | 2 | 3 | 4;
    className?: string;
}) {
    const gridClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    }[columns];

    return (
        <div className={cn("grid gap-6", gridClass, className)}>
            {children}
        </div>
    );
}
