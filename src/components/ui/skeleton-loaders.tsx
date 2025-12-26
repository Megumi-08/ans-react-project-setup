
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// Post card skeleton for feed
export function PostSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("bg-card rounded-lg border border-border p-4 space-y-3", className)}>
      {/* User info */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      
      {/* Post content */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      
      {/* Image placeholder */}
      <Skeleton className="h-64 w-full rounded-md" />
      
      {/* Actions */}
      <div className="flex items-center gap-4 pt-2">
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
        <Skeleton className="h-8 w-16" />
      </div>
    </div>
  );
}

// User card skeleton for search results
export function UserCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 p-3 bg-card rounded-lg border border-border", className)}>
      <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-32" />
      </div>
      <Skeleton className="h-9 w-20" />
    </div>
  );
}

// Profile header skeleton
export function ProfileHeaderSkeleton() {
  return (
    <div className="space-y-4 p-4">
      {/* Avatar and basic info */}
      <div className="flex flex-col items-center gap-3">
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="space-y-2 text-center w-full">
          <Skeleton className="h-6 w-48 mx-auto" />
          <Skeleton className="h-4 w-32 mx-auto" />
          <Skeleton className="h-4 w-40 mx-auto" />
        </div>
      </div>
      
      {/* Bio */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
        <Skeleton className="h-6 w-18 rounded-full" />
      </div>
      
      {/* Action buttons */}
      <div className="flex gap-2">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 flex-1" />
      </div>
    </div>
  );
}

// Chat message skeleton
export function ChatMessageSkeleton({ isOwn = false }: { isOwn?: boolean }) {
  return (
    <div className={cn("flex gap-2 mb-3", isOwn && "flex-row-reverse")}>
      <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
      <div className="space-y-1 max-w-[70%]">
        <Skeleton className={cn("h-12 rounded-2xl", isOwn ? "rounded-tr-sm" : "rounded-tl-sm")} style={{ width: `${Math.random() * 100 + 150}px` }} />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  );
}

// Feed skeleton - multiple posts
export function FeedSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <PostSkeleton key={i} />
      ))}
    </div>
  );
}

// Search results skeleton
export function SearchResultsSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <UserCardSkeleton key={i} />
      ))}
    </div>
  );
}