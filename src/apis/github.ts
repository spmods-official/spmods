type Contributor = {
  login: string;
  avatar_url: string;
  contributions: number;
};

export async function fetchContributors() {
  const response = await fetch(
    "https://api.github.com/repos/spmods-official/spmods/contributors",
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  const data: Contributor[] = await response.json();

  const parsed = data.map((user) => ({
    name: user.login,
    avatar: user.avatar_url,
    commits: user.contributions,
  }));

  return parsed;
}
