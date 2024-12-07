import HighlightedText from "@/app/components/highlighted-text";
import Link from "next/link";

export const personalProjects = [
  {
    title: "TaskBoard",
    description: (
      <>
        <p>
          A <HighlightedText>task management tool</HighlightedText> for tracking
          tasks and generating reports. It is designed to be available on both{" "}
          <HighlightedText>web</HighlightedText> and{" "}
          <HighlightedText>mobile platforms</HighlightedText>, ensuring
          accessibility and productivity for users wherever they are.
        </p>
      </>
    ),
    image: "/images/projects/personal/taskboard/poster.png",
    link: "#",
  },
];

export const professionalProjects = [
  {
    title: "Era Warna Mandiri BI Mobile App",
    description: (
      <>
        <p>
          A <HighlightedText>cross-platform mobile app</HighlightedText> built
          to provide <HighlightedText>real-time data insights</HighlightedText>.
          The app offers users the ability to track key metrics seamlessly,
          empowering businesses to make data-driven decisions on the go.
        </p>
      </>
    ),
    image: "/images/projects/professional/ewm/poster.png",
    link: "#",
  },
  {
    title: "Matric Seal ERP System",
    description: (
      <>
        <p>
          A <HighlightedText>responsive web ERP solution</HighlightedText> for
          managing <HighlightedText>sales</HighlightedText>,{" "}
          <HighlightedText>purchases</HighlightedText>, and{" "}
          <HighlightedText>inventory</HighlightedText>. This system optimizes
          business workflows and ensures efficiency in operations through a
          user-friendly interface and robust functionalities.
        </p>
      </>
    ),
    image: "/images/projects/professional/matric/poster.png",
    link: "#",
  },
  {
    title: "Project KIRI",
    description: (
      <>
        <p>
          A <HighlightedText>web navigation app</HighlightedText> that helps
          users navigate through <HighlightedText>angkots</HighlightedText> in
          Indonesia. This tool simplifies public transportation by providing
          clear routes and helping users plan their journeys efficiently.
        </p>
      </>
    ),
    image: "/images/projects/professional/projectkiri/poster.png",
    link: "#",
  },
];
