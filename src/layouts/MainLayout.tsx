
import { Outlet, NavLink } from 'react-router-dom';
import { Home, Search, PlusCircle, MessageCircle, User } from 'lucide-react';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-lg mx-auto flex items-center justify-around h-16 px-4">
          <NavLink to="/" className={({ isActive }) => 
            `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`
          }>
            <Home size={24} />
            <span className="text-xs">Home</span>
          </NavLink>
          
          <NavLink to="/search" className={({ isActive }) => 
            `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`
          }>
            <Search size={24} />
            <span className="text-xs">Search</span>
          </NavLink>
          
          <NavLink to="/post" className={({ isActive }) => 
            `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`
          }>
            <PlusCircle size={28} />
            <span className="text-xs">Post</span>
          </NavLink>
          
          <NavLink to="/chat" className={({ isActive }) => 
            `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`
          }>
            <MessageCircle size={24} />
            <span className="text-xs">Chat</span>
          </NavLink>
          
          <NavLink to="/profile" className={({ isActive }) => 
            `flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-muted-foreground'}`
          }>
            <User size={24} />
            <span className="text-xs">Profile</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}