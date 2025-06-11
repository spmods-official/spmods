import ExternalLink from "@/views/components/ExternalLink";
import { externalLinkVariants } from "@/views/components/ExternalLink.variants";
import type { FC } from "react";
import { Link } from "react-router";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer: FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <footer
      className={`mt-auto py-12 ${isMobile ? "px-4" : "pl-sidebar"} bg-header`}
    >
      <div className="inline">
        <ul
          className={`${isMobile ? "flex flex-row space-x-4 justify-center" : "space-x-[1rem]"}`}
        >
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

        <div
          className={`mt-4 text-content-muted text-sm ${isMobile ? "text-center w-[85%] mx-auto" : ""}`}
        >
          SPMods is an independent initiative that is not officially affiliated
          with Singapore Polytechnic.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
