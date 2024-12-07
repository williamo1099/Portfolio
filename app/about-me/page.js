"use client";

import AboutMePicture from "./components/about-me-picture";
import AboutMeStory from "./components/about-me-story";
import TraitList from "./components/trait-list";
import Separator from "../components/separator";

export default function AboutMePage() {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Picture */}
        <AboutMePicture />

        {/* Separator */}
        <Separator isVertical={true} additionalClassNames="m-5" />

        {/* Story */}
        <AboutMeStory />
      </div>

      {/* List of Traits */}
      <TraitList />
    </div>
  );
}
