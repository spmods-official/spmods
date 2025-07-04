import type { Contributor } from "@/types/contributor";

export async function fetchContributors(): Promise<Contributor[]> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/spmods-official/spmods/contributors",
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const data: Contributor[] = await response.json();

    return data.filter(
      (contributor: Contributor) => contributor.type === "User",
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to fetch contributors: ${error.message}`);
    }
    return [];
  }
}
