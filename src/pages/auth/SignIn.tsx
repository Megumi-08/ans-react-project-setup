
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Sign In</h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="@username" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full">Sign In</Button>
      </form>
      <div className="mt-4 text-center text-sm">
        <Link to="/auth/signup" className="text-primary hover:underline">
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
}