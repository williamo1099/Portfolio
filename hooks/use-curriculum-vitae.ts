import { useEffect, useState } from "react";

import { fetchCurriculumVitaePath } from "@/services/curriculum-vitae-service";

import useAPI from "./use-api";

export default function useCurriculumVitae() {
  const { data: path, loading, error, request } = useAPI<string>();

  useEffect(() => {
    request(async () => {
      const rawPath = await fetchCurriculumVitaePath();
      return `${
        process.env.NEXT_PUBLIC_API_URL?.replace("/api", "/") ?? ""
      }storage/${rawPath}`;
    });
  }, [request]);

  return {
    path: path || "/documents/cv.pdf",
    loading,
    error,
  };
}
