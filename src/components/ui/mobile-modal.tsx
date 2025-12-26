
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileModal = DialogPrimitive.Root;
const MobileModalTrigger = DialogPrimitive.Trigger;
const MobileModalClose = DialogPrimitive.Close;

const MobileModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
MobileModalOverlay.displayName = "MobileModalOverlay";

interface MobileModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  showClose?: boolean;
}

const MobileModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  MobileModalContentProps
>(({ className, children, showClose = true, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <MobileModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out",
        // Full screen on mobile
        "inset-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        // Centered modal on desktop
        "sm:inset-auto sm:left-[50%] sm:top-[50%] sm:max-w-lg sm:w-full sm:translate-x-[-50%] sm:translate-y-[-50%] sm:rounded-lg sm:border sm:border-border",
        "sm:data-[state=closed]:slide-out-to-left-1/2 sm:data-[state=closed]:slide-out-to-top-[48%] sm:data-[state=open]:slide-in-from-left-1/2 sm:data-[state=open]:slide-in-from-top-[48%]",
        "sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
      {showClose && (
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none touch-target-sm z-10">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
MobileModalContent.displayName = "MobileModalContent";

const MobileModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 px-4 py-4 border-b border-border sticky top-0 bg-background z-10 safe-top",
      className
    )}
    {...props}
  />
);
MobileModalHeader.displayName = "MobileModalHeader";

const MobileModalBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex-1 overflow-y-auto px-4 py-4", className)}
    {...props}
  />
);
MobileModalBody.displayName = "MobileModalBody";

const MobileModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end gap-2 px-4 py-4 border-t border-border sticky bottom-0 bg-background safe-bottom",
      className
    )}
    {...props}
  />
);
MobileModalFooter.displayName = "MobileModalFooter";

const MobileModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
MobileModalTitle.displayName = "MobileModalTitle";

const MobileModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
MobileModalDescription.displayName = "MobileModalDescription";

export {
  MobileModal,
  MobileModalTrigger,
  MobileModalClose,
  MobileModalContent,
  MobileModalHeader,
  MobileModalBody,
  MobileModalFooter,
  MobileModalTitle,
  MobileModalDescription,
};