import { ApiResponse } from "@/types/api";

export async function fetchCurriculumVitaePath(): Promise<string> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/curriculum-vitae`
    );

    const data: ApiResponse<Record<string, unknown>> = await response.json();

    if (!data.success) {
      throw data.message;
    }

    const path = data.data.path as string;

    return path;
  } catch (ex) {
    console.error(ex);
    return "";
  }
}
