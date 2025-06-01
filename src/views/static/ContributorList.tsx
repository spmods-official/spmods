import { contributorResource } from "@/resources/contributorResource";
import { Suspense } from "react";
import type { Contributor } from "@/types/contributor";
import ExternalLink from "../components/ExternalLink";
import ResponsiveGrid from "../components/ResponsiveGrid";

function ContributorListContent() {
  const contributors = contributorResource.read();

  if (contributors.length === 0) {
    return <div className="text-content">Failed to load contributors.</div>;
  }

  return (
    <div className="p-5 text-content">
      <h2 className="text-3xl font-bold mb-6">Contributors</h2>
      <p className="mb-6">
        SPMods is a community-driven project. We would like to thank all the
        contributors who have helped us make this project possible.
      </p>

      <ResponsiveGrid base="two" md="three" lg="four" className="max-w-6xl">
        {contributors.map((contributor: Contributor) => (
          <div
            key={contributor.login}
            className="flex flex-col h-65 w-65 items-center p-6"
          >
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
              className="h-40 w-40 rounded-full mb-4"
            />
            <ExternalLink href={contributor.html_url} intent="primary">
              {contributor.login}
            </ExternalLink>
            <p className="text-muted">{contributor.contributions} commits</p>
          </div>
        ))}
      </ResponsiveGrid>
    </div>
  );
}

export default function ContributorList() {
  return (
    <Suspense
      fallback={<div className="text-content">Loading contributors...</div>}
    >
      <ContributorListContent />
    </Suspense>
  );
}
