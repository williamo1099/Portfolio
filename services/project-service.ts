import { ApiResponse } from "@/types/api";
import { Project } from "@/types/project";

interface FetchProjectsProps {
  type: "personal" | "professional";
}

function mapProject(api: Record<string, unknown>): Project {
  return {
    imagePath: api["image_path"] as string,
    title: api["title"] as string,
    stacks: api["stacks"] as string[],
    url: (api["url"] as string | undefined) ?? undefined,
  };
}

export async function fetchProjects({
  type,
}: FetchProjectsProps): Promise<Project[]> {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects/${type}`
    );
    let data: ApiResponse<Record<string, unknown>[]> = await response.json();

    // Throw error if request is not successful.
    if (!data.success) {
      throw data.message;
    }

    return data.data.map(mapProject);
  } catch (ex) {
    console.error(ex);
    return [];
  }
}
