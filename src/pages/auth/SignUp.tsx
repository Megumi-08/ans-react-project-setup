
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="email">University Email</Label>
          <Input id="email" type="email" placeholder="student.id@amrapali.edu" />
        </div>
        <div>
          <Label htmlFor="fullname">Full Name</Label>
          <Input id="fullname" placeholder="Rohan Sharma" />
        </div>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="@rohan_cs" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="8-12 chars, 1 number, 1 symbol" />
        </div>
        <Button className="w-full">Sign Up</Button>
      </form>
      <div className="mt-4 text-center text-sm">
        <Link to="/auth/signin" className="text-primary hover:underline">
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
}