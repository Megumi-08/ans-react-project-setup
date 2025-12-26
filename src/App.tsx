import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/routing/ProtectedRoute';
import PublicOnlyRoute from './components/routing/PublicOnlyRoute';
import RouteErrorBoundary from './components/routing/RouteErrorBoundary';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/ui/loading-spinner';

// Lazy load pages for code splitting
const SignIn = lazy(() => import('./pages/auth/SignIn'));
const SignUp = lazy(() => import('./pages/auth/SignUp'));
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Post = lazy(() => import('./pages/Post'));
const Chat = lazy(() => import('./pages/Chat'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <LoadingSpinner size="lg" text="Loading..." />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Public routes (auth pages) */}
              <Route path="/auth" element={<AuthLayout />} errorElement={<RouteErrorBoundary />}>
                <Route
                  path="signin"
                  element={
                    <PublicOnlyRoute>
                      <SignIn />
                    </PublicOnlyRoute>
                  }
                />
                <Route
                  path="signup"
                  element={
                    <PublicOnlyRoute>
                      <SignUp />
                    </PublicOnlyRoute>
                  }
                />
                <Route index element={<Navigate to="signin" replace />} />
              </Route>

              {/* Protected routes (main app) */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <MainLayout />
                  </ProtectedRoute>
                }
                errorElement={<RouteErrorBoundary />}
              >
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="post" element={<Post />} />
                <Route path="chat" element={<Chat />} />
                <Route path="chat/:chatId" element={<Chat />} />
                <Route path="profile" element={<Profile />} />
                <Route path="profile/:username" element={<Profile />} />
              </Route>

              {/* 404 catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;