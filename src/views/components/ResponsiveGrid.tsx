import type { HTMLAttributes, PropsWithChildren } from "react";

import { responsiveGridVariants } from "./ResponsiveGrid.variants";
import type { ResponsiveGridVariantsProps } from "./ResponsiveGrid.variants";
import { cn } from "@/utils/cn";

interface ResponsiveGridProps
  extends HTMLAttributes<HTMLDivElement>,
    ResponsiveGridVariantsProps {}

export const ResponsiveGrid = ({
  base,
  md,
  lg,
  xl,
  className,
  children,
  ...props
}: PropsWithChildren<ResponsiveGridProps>) => {
  return (
    <div
      className={cn(responsiveGridVariants({ base, md, lg, xl }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default ResponsiveGrid;
