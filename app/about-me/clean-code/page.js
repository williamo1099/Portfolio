export default function CleanCodePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {/*  */}
      <h1 className="text-3xl lg:text-4xl text-primary font-bold">
        Clean Code
      </h1>

      {/* Quotes */}
      <div className="flex flex-row space-x-2 bg-gray-200 rounded-lg p-2 mx-5 mt-2">
        <div className="text-5xl font-mono">
          <img src="/icons/quote.svg" alt="Quote Icon" className="w-10 h-10" />
        </div>
        <div className="text-sm lg:text-base text-gray-600 text-center w-5/6 mt-3">
          <span className="italic">
            Clean code always looks like it was written by someone who cares.
          </span>
          <br />
          <span className="font-bold">
            ~
            <a
              href="https://en.wikipedia.org/wiki/Robert_C._Martin"
              className="text-primary hover:underline"
            >
              Robert C. Martin
            </a>
          </span>
        </div>
      </div>

      {/*  */}
      <div className="overflow-auto max-h-[60vh] sm:max-h-[70vh] w-full px-5 lg:px-0 lg:w-3/5 mt-4">
        <p className="text-center">
          To me, writing code is like crafting a story, and each time I write, I
          strive to make the <span className="italic">story</span> clear and
          compelling. I follow current{" "}
          <span className="text-primary font-bold">global standards</span> and{" "}
          <span className="text-primary font-bold">conventions</span> to ensure
          cleanliness, consistency, and maintainability in my codebase. By
          following the principles of{" "}
          <span className="text-primary font-bold">DRY</span> and{" "}
          <span className="text-primary font-bold">KISS</span>, I ensure that my
          code is both efficient and easy to understand. This approach helps not
          only me, but also my{" "}
          <span className="text-primary font-bold">collaborators</span>, create
          high-quality code.
        </p>

        <p className="text-center mt-2">
          Additionally,{" "}
          <span className="text-primary font-bold">thorough testing</span> and{" "}
          <span className="text-primary font-bold">clear documentation</span>{" "}
          are also essential priorities for me. I perform tests to ensure
          everything works as intended and when errors occur, I make sure they
          are properly handled through error-handling mechanisms. Moreover,
          well-structured documentation further helps collaborators understand
          the logic and decisions behind the code, improving collaboration and
          long-term maintainability.
        </p>
      </div>
    </div>
  );
}
