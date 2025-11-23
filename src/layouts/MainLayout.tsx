
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Search, PlusCircle, MessageCircle, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border safe-bottom backdrop-blur-sm bg-card/95">
        <div className="max-w-lg mx-auto flex items-center justify-around h-16 px-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              cn(
                'flex flex-col items-center gap-1 touch-target transition-all duration-base',
                isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Home size={24} className={cn('transition-transform', isActive && 'scale-110')} />
                <span className="text-xs font-medium">Home</span>
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/search" 
            className={({ isActive }) => 
              cn(
                'flex flex-col items-center gap-1 touch-target transition-all duration-base',
                isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Search size={24} className={cn('transition-transform', isActive && 'scale-110')} />
                <span className="text-xs font-medium">Search</span>
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/post" 
            className={({ isActive }) => 
              cn(
                'flex flex-col items-center gap-1 touch-target transition-all duration-base',
                isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              )
            }
          >
            {({ isActive }) => (
              <>
                <div className={cn(
                  'rounded-full p-1 transition-colors',
                  isActive ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                )}>
                  <PlusCircle size={24} className={cn('transition-transform', isActive && 'scale-110')} />
                </div>
                <span className="text-xs font-medium">Post</span>
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/chat" 
            className={({ isActive }) => 
              cn(
                'flex flex-col items-center gap-1 touch-target transition-all duration-base',
                isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              )
            }
          >
            {({ isActive }) => (
              <>
                <MessageCircle size={24} className={cn('transition-transform', isActive && 'scale-110')} />
                <span className="text-xs font-medium">Chat</span>
              </>
            )}
          </NavLink>
          
          <NavLink 
            to="/profile" 
            className={({ isActive }) => 
              cn(
                'flex flex-col items-center gap-1 touch-target transition-all duration-base',
                isActive ? 'text-primary scale-105' : 'text-muted-foreground hover:text-foreground'
              )
            }
          >
            {({ isActive }) => (
              <>
                <User size={24} className={cn('transition-transform', isActive && 'scale-110')} />
                <span className="text-xs font-medium">Profile</span>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
}