import HighlightedText from "@/app/components/highlighted-text";
import Link from "next/link";

export const traits = [
  // Clean Code
  {
    title: "Clean Code",
    description: (
      <>
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
      </>
    ),
    quote: {
      text: "Clean code always looks like it was written by someone who cares.",
      author: "Robert C. Martin",
      authorLink: "https://en.wikipedia.org/wiki/Robert_C._Martin",
    },
  },

  // Detail Focused
  {
    title: "Detail Focused",
    description: (
      <>
        <p className="text-center">
          <span className="italic">Details are everywhere</span>, and I love
          focusing on the ones that tend to be overlooked. I{" "}
          <HighlightedText>pay attention</HighlightedText> to the specifics to
          ensure everything works seamlessly as I believe it’s the small, often
          unnoticed details that that make a product truly alive.
        </p>

        <p className="text-center mt-2">
          Being detail-focused also means staying{" "}
          <HighlightedText>organized</HighlightedText> and{" "}
          <HighlightedText>thorough</HighlightedText> in everything I do. My{" "}
          <HighlightedText>perfectionist</HighlightedText> nature always drives
          me to refine each element, making sure everything aligns perfectly and
          functions smoothly.
        </p>
      </>
    ),
    quote: {
      text: "It has long been an axiom of mine that the little things are infinitely the most important.",
      author: "Sherlock Holmes",
      authorLink: "https://en.wikipedia.org/wiki/Sherlock_Holmes",
    },
  },

  // Team Work
  {
    title: "Team Work",
    description: <></>,
    quote: {
      text: "It has long been an axiom of mine that the little things are infinitely the most important.",
      author: "Sherlock Holmes",
      authorLink: "",
    },
  },

  // Tech-Driven
  {
    title: "Tech-Driven",
    description: <></>,
    quote: {
      text: "Technology is a tool, and it's critical to the future of work. It makes people more productive, more creative, and makes businesses more efficient.",
      author: "Sundar Pichai",
      authorLink: "https://en.wikipedia.org/wiki/Sundar_Pichai",
    },
  },
];
