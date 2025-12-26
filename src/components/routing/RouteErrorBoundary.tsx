
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

export default function RouteErrorBoundary() {
  const error = useRouteError();
  
  let errorMessage: string;
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.statusText || error.data?.message || 'An error occurred';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = 'An unexpected error occurred';
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Container size="sm">
        <div className="text-center space-y-6">
          {/* Error Icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-destructive/10 p-6">
              <AlertCircle className="h-16 w-16 text-destructive" />
            </div>
          </div>

          {/* Error Status */}
          {errorStatus && (
            <div className="space-y-2">
              <h1 className="text-6xl font-bold text-foreground">{errorStatus}</h1>
              <p className="text-xl text-muted-foreground">
                {errorStatus === 404 ? 'Page Not Found' : 'Something Went Wrong'}
              </p>
            </div>
          )}

          {/* Error Message */}
          <div className="space-y-2">
            <p className="text-base text-muted-foreground max-w-md mx-auto">
              {errorMessage}
            </p>
            {errorStatus === 404 && (
              <p className="text-sm text-muted-foreground">
                The page you're looking for doesn't exist or has been moved.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={handleRefresh}>
              <RefreshCw className="h-4 w-4" />
              Refresh Page
            </Button>
          </div>

          {/* Additional Help */}
          {errorStatus !== 404 && (
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                If this problem persists, please contact support.
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}