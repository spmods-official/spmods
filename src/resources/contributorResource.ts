import { fetchContributors } from "@/apis/github";
import { createResource } from "./createResource";

export const contributorResource = createResource(fetchContributors());
