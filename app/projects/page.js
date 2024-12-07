import ProjectGrid from "./components/project-grid";
import Title from "../components/title";
import HighlightedText from "../components/highlighted-text";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/* Title */}
      <Title>
        Some of <HighlightedText>My</HighlightedText> Projects
      </Title>

      {/* Projects Grid */}
      <ProjectGrid />
    </div>
  );
}
