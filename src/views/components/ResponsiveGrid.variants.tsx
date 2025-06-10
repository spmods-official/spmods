import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const responsiveGridVariants = cva("grid gap-4", {
  variants: {
    base: {
      one: "grid-cols-1",
      two: "grid-cols-2",
    },
    md: {
      two: "md:grid-cols-2",
      three: "md:grid-cols-3",
      four: "md:grid-cols-4",
    },
    lg: {
      three: "lg:grid-cols-3",
      four: "lg:grid-cols-4",
    },
    xl: {
      four: "xl:grid-cols-4",
      six: "xl:grid-cols-6",
    },
  },
  defaultVariants: {
    base: null,
    md: null,
    lg: null,
    xl: null,
  },
});

export type ResponsiveGridVariantsProps = VariantProps<
  typeof responsiveGridVariants
>;
