import ProjectGrid from "./components/project-grid";
import Title from "../components/title";
import HighlightedText from "../components/highlighted-text";

export const metadata = {
  title: "William Oktavianus | Projects",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Title */}
      <Title>
        Some of <HighlightedText>My</HighlightedText> Projects
      </Title>

      {/* Projects Grid */}
      <ProjectGrid />
    </>
  );
}
