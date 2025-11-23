
import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  action?: ReactNode;
  className?: string;
  sticky?: boolean;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  showBack = false, 
  action,
  className,
  sticky = true
}: PageHeaderProps) {
  const navigate = useNavigate();

  return (
    <header 
      className={cn(
        'bg-background border-b border-border z-10 safe-top',
        sticky && 'sticky top-0',
        className
      )}
    >
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="touch-target-sm flex items-center justify-center -ml-2 text-foreground hover:text-primary transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          )}
          
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-semibold truncate">{title}</h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
            )}
          </div>
        </div>

        {action && (
          <div className="ml-2 flex-shrink-0">
            {action}
          </div>
        )}
      </div>
    </header>
  );
}