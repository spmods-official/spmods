import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const buttonGroupVariants = cva("inline-flex shadow-xs", {
  variants: {
    variant: {
      primary: "text-primary",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    radius: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    radius: "lg",
  },
});

export const buttonGroupItemVariants = cva(
  "px-6 py-2 font-medium border transition-colors duration-200",
  {
    variants: {
      variant: {
        primary: "border-primary",
      },
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-6 py-2 text-sm",
        lg: "px-8 py-3 text-base",
      },
      active: {
        true: "",
        false: "",
      },
      position: {
        first: "rounded-s-lg",
        middle: "border-t border-b",
        last: "rounded-e-lg",
        single: "rounded-lg",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        active: true,
        className: "bg-primary text-white",
      },
      {
        variant: "primary",
        active: false,
        className: "hover:bg-primary hover:text-white",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      active: false,
      position: "middle",
    },
  },
);

export type ButtonGroupVariantsProps = VariantProps<typeof buttonGroupVariants>;

export type ButtonGroupItemVariantsProps = VariantProps<
  typeof buttonGroupItemVariants
>;
