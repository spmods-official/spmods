import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { externalLinkVariants } from "./ExternalLink.variants";
import type { ExternalLinkVariantsProps } from "./ExternalLink.variants";
import { cn } from "@/utils/cn";

interface ExternalLinkProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ExternalLinkVariantsProps {
    href: string;
    children: ReactNode;
}

const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
    ({ className, intent, children, ...props }, ref) => (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className={cn(externalLinkVariants({ intent, className }))}
            ref={ref}
            {...props}
        >
            {children}
        </a>
    ),
);

ExternalLink.displayName = "ExternalLink";

export default ExternalLink;
