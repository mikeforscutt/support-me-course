"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
      <div className='relative'>
        <Input
          type={showPassword ? "text" : "password"}
          {...props}
          ref={ref}
          className={cn("pr-10", className)}
        />
        <span className='absolute right-1 top-3 cursor-pointer select-none'>
          {showPassword ? (
            <EyeIcon
              onClick={() => setShowPassword(false)}
              className='h-4 w-4'
            />
          ) : (
            <EyeOffIcon
              onClick={() => setShowPassword(true)}
              className='h-4 w-4'
            />
          )}
        </span>
      </div>
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
