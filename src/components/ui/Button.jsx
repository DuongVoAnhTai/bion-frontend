import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-poppins cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-primary-50 hover:bg-primary-500/90",
        outline:
          "border border-gray bg-white-background text-black-text hover:bg-gray/10",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-10 px-6 text-sm",
        lg: "px-[40px] py-[8px] text-[20px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
