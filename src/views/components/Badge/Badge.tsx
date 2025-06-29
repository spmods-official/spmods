import type { PropsWithChildren, HTMLAttributes } from "react";

import { badgeVariants } from "./Badge.variants";
import type { BadgeVariantsProps } from "./Badge.variants";
import { cn } from "@/utils/cn";

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    BadgeVariantsProps {}

const Badge = ({
  className,
  intent,
  children,
  ...props
}: PropsWithChildren<BadgeProps>) => (
  <span className={cn(badgeVariants({ intent, className }))} {...props}>
    {children}
  </span>
);

Badge.displayName = "Badge";

export default Badge;
