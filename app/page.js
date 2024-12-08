import Introduction from "./home/components/introduction";
import SocialMediaList from "./home/components/social-media-list";

export const metadata = {
  title: "William Oktavianus",
};

export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Foreground Text */}
      <div className="relative z-10 m-5 lg:m-0 text-left">
        <Introduction />

        {/* Social Media */}
        <SocialMediaList />
      </div>
    </div>
  );
}
