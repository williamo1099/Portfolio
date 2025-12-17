import { useEffect, useState } from "react";

import { fetchProjects } from "@/services/project-service";
import { Project } from "@/types/project";

import useAPI from "./use-api";

export default function useProject() {
  const [showPersonal, setShowPersonal] = useState(false);

  const { data: professionalProjects, request: requestProfessional } =
    useAPI<Project[]>();
  const { data: personalProjects, request: requestPersonal } =
    useAPI<Project[]>();

  useEffect(() => {
    requestProfessional(() => fetchProjects({ type: "professional" }));
  }, [requestProfessional]);

  useEffect(() => {
    if (showPersonal && (!personalProjects || personalProjects.length === 0)) {
      requestPersonal(() => fetchProjects({ type: "personal" }));
    }
  }, [showPersonal, personalProjects, requestPersonal]);

  return {
    showPersonal,
    personalProjects: personalProjects || [],
    professionalProjects: professionalProjects || [],
    setShowPersonal,
  };
}
