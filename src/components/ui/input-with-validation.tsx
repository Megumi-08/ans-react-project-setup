
import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export interface InputWithValidationProps
  extends React.ComponentProps<"input"> {
  validationState?: "default" | "error"