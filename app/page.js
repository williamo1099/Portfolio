import Introduction from "./home/components/introduction";
import SocialMediaList from "./home/components/social-media-list";

export default function HomePage() {
  return (
    <>
      {/* Foreground Text */}
      <div className="relative z-10 m-5 lg:m-0 text-left">
        <Introduction />

        {/* Social Media */}
        <SocialMediaList />
      </div>
    </>
  );
}
