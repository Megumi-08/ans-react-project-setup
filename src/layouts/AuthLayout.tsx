
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">ANS</h1>
          <p className="text-muted-foreground">Amrapali Networking System</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}