import AboutMePicture from "./components/about-me-picture";
import AboutMeStory from "./components/about-me-story";
import TraitList from "./components/trait-list";
import Separator from "../components/separator";

export const metadata = {
  title: "William Oktavianus | About Me",
};

export default function AboutMePage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-5">
        {/* Picture */}
        <AboutMePicture />

        {/* Separator */}
        <Separator isVertical={true} additionalClassNames="m-5" />

        {/* Story */}
        <AboutMeStory />
      </div>

      {/* List of Traits */}
      <TraitList />
    </>
  );
}
