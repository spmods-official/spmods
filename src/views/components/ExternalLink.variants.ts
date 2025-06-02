import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const externalLinkVariants = cva("font-bold", {
  variants: {
    intent: {
      default: "text-content hover:text-primary",
      primary: "text-primary",
    },
  },
});

export type ExternalLinkVariantsProps = VariantProps<
  typeof externalLinkVariants
>;
