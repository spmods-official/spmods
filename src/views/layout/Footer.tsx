import ExternalLink from "@/views/components/ExternalLink";
import { externalLinkVariants } from "@/views/components/ExternalLink.variants";
import type { FC } from "react";
import { Link } from "react-router";

const Footer: FC = () => {
  return (
    <footer className="mt-auto py-12 pl-sidebar bg-header">
      <div className="inline">
        <ul className="space-x-[1rem]">
          <li className="inline">
            <ExternalLink
              intent="default"
              href="https://github.com/spmods-official/spmods"
            >
              Github
            </ExternalLink>
          </li>

          <li className="inline">
            <ExternalLink
              intent="default"
              href="https://www.instagram.com/spmods.official/"
            >
              Instagram
            </ExternalLink>
          </li>

          <li className="inline">
            <ExternalLink
              intent="default"
              href="https://www.linkedin.com/company/spmods/about/"
            >
              Linkedin
            </ExternalLink>
          </li>

          <li className="inline">
            <Link
              to="/about"
              className={externalLinkVariants({ intent: "default" })}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
