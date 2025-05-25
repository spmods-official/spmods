import { useEffect, useState } from "react";
import { fetchContributors } from "@/apis/github";
import type { Contributor } from "@/types/contributor";

export default function ContributorList() {
  const [contributors, setContributors] = useState<Contributor[] | null>(null);

  useEffect(() => {
    fetchContributors().then(setContributors);
  }, []);

  if (contributors === null) return <div>Loading contributors...</div>;
  if (contributors.length === 0) return <div>Failed to load contributors.</div>;

  return (
    <div className="p-5 text-gray-200">
      <h2 className="text-2xl font-bold mb-6 ">Contributors</h2>
      <p className="mb-6">
        SPMods is a community-driven project. We would like to thank all the
        contributors who have helped us make this project possible.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
        {contributors.map((contributor) => (
          <div
            key={contributor.name}
            className="flex flex-col items-center p-6"
          >
            <img
              src={contributor.avatar}
              alt={contributor.name}
              className="w-full h-full rounded-full mb-3"
            />
            <h3 className="font-semibold flex items-center">
              <span>{contributor.name}</span>
            </h3>
            <p className="text-gray-500">{contributor.commits} commits</p>
          </div>
        ))}
      </div>
    </div>
  );
}
