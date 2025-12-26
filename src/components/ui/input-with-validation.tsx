
import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export interface InputWithValidationProps
  extends React.ComponentProps<"input"> {
  validationState?: "default" | "error" | "success" | "loading";
  errorMessage?: string;
  successMessage?: string;
  helperText?: string;
}

const InputWithValidation = React.forwardRef<HTMLInputElement, InputWithValidationProps>(
  ({ className, type, validationState = "default", errorMessage, successMessage, helperText, ...props }, ref) => {
    const showError = validationState === "error" && errorMessage;
    const showSuccess = validationState === "success" && successMessage;
    const showHelper = validationState === "default" && helperText;
    const isLoading = validationState === "loading";

    return (
      <div className="w-full">
        <div className="relative">
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-base",
              validationState === "error" && "border-destructive focus-visible:ring-destructive pr-10",
              validationState === "success" && "border-success focus-visible:ring-success pr-10",
              validationState === "loading" && "border-input focus-visible:ring-ring pr-10",
              validationState === "default" && "border-input focus-visible:ring-ring",
              className
            )}
            ref={ref}
            {...props}
          />
          
          {/* Validation icon */}
          {validationState !== "default" && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isLoading && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
              {validationState === "error" && <AlertCircle className="h-4 w-4 text-destructive" />}
              {validationState === "success" && <CheckCircle2 className="h-4 w-4 text-success" />}
            </div>
          )}
        </div>

        {/* Messages */}
        {showError && (
          <p className="mt-1.5 text-sm text-destructive flex items-center gap-1 animate-fade-in">
            <AlertCircle className="h-3.5 w-3.5" />
            {errorMessage}
          </p>
        )}
        {showSuccess && (
          <p className="mt-1.5 text-sm text-success flex items-center gap-1 animate-fade-in">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {successMessage}
          </p>
        )}
        {showHelper && (
          <p className="mt-1.5 text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
InputWithValidation.displayName = "InputWithValidation";

export { InputWithValidation };