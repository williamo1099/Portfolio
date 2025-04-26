import Title from "@/app/components/title";
import HighlightedText from "@/app/components/highlighted-text";
import ProjectSelector from "./components/project-selector";
import ProjectGrid from "./components/project-grid";

export const metadata = {
  title: "William Oktavianus | Projects",
};

export default async function ProjectsPage({ searchParams }) {
  const showPersonal = (await searchParams)?.view === "personal";

  return (
    <>
      {/* Title */}
      <Title>
        Some of <HighlightedText>My</HighlightedText> Projects
      </Title>

      {/* Projects Type Selector */}
      <ProjectSelector />

      {/* Projects Grid */}
      <ProjectGrid showPersonal={showPersonal} />
    </>
  );
}
