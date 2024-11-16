export default function HomePage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-96 h-96 bg-blue-300 rounded-full absolute -top-10 -left-20 opacity-50"></div>
        <div className="w-72 h-72 bg-green-300 rounded-full absolute top-20 right-10 opacity-50"></div>
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 text-left">
        {/* Name */}
        <h1 className="text-2xl font-bold">
          I'm{" "}
          <span className="ml-1 text-5xl font-bold text-primary hover:underline">
            William Oktavianus
          </span>
        </h1>

        {/*  Position */}
        <p className="text-2xl mt-3">Software Developer, Artist and Learner</p>

        {/* Social Media */}
        <div className="flex space-x-2 mt-5">
          {/* GitHub */}
          <a
            href="https://github.com/williamo1099"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
              className="rounded-lg hover:opacity-75"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/williamo1099/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="GitHub"
              className="rounded-lg hover:opacity-75"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
