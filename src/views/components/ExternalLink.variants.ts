import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const externalLinkVariants = cva("text-content font-bold", {
  variants: {
    intent: {
      default: "hover:text-accent",
    },
  },
});

export type ExternalLinkVariantsProps = VariantProps<
  typeof externalLinkVariants
>;
