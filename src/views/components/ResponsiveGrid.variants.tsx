import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

export const responsiveGridVariants = cva("grid gap-4", {
  variants: {
    base: {
      one: "grid-cols-1",
      two: "grid-cols-2",
    },
    md: {
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
    base: "two",
    md: "three",
    lg: "four",
    xl: "four",
  },
});

export type ResponsiveGridVariantsProps = VariantProps<
  typeof responsiveGridVariants
>;
