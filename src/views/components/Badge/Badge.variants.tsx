import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "px-1 py-0.5 rounded font-semibold text-xs text-white border-2 border-primary",
  {
    variants: {
      intent: {
        default: "bg-primary",
        ghost: "bg-inherit",
      },
    },
  },
);

export type BadgeVariantsProps = VariantProps<typeof badgeVariants>;
