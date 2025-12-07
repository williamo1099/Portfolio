import IconButton from "@/app/components/icon-button";

export default function SocialMediaList() {
  return (
    <div className="flex space-x-2 mt-6">
      {/* GitHub */}
      <IconButton
        src={
          "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
        }
        title={"GitHub"}
        href="https://www.github.com/williamo1099/"
      />

      {/* LinkedIn */}
      <IconButton
        src={
          "https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
        }
        title={"LinkedIn"}
        href="https://www.linkedin.com/in/williamo1099/"
      />
    </div>
  );
}
