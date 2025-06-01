import type { Contributor } from "@/types/contributor";

export async function fetchContributors(): Promise<Contributor[]> {
  const response = await fetch(
    "https://api.github.com/repos/spmods-official/spmods/contributors",
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  const data: Contributor[] = await response.json();

  return data.filter((contributor) => contributor.type === "User");
}
