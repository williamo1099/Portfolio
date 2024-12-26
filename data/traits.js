import HighlightedText from "@/app/components/highlighted-text";
import Link from "next/link";

export const traits = [
  // Clean Code
  {
    title: "Clean Code",
    description: (
      <>
        <p className="text-center">
          Writing code is like crafting a story and everytime I write, I want to
          make sure that it is easy and interesting to follow. I stick to{" "}
          <HighlightedText>best practices</HighlightedText> and current{" "}
          <HighlightedText>coding standards</HighlightedText> to keep things
          clean, consistent, and maintainable by following principles like DRY
          and KISS, and by using{" "}
          <HighlightedText>clean architecture</HighlightedText>.
        </p>

        <p className="text-center mt-2">
          On top of that, <HighlightedText>testing</HighlightedText> and{" "}
          <HighlightedText>good documentation</HighlightedText> are key for me.
          I always test my code to make sure everything works as expected, and
          if something breaks, I make sure it’s handled properly. And clear
          documentation? It’s a must! It helps making collaboration a lot
          smoother and ensuring the code is easy to maintain in the long run.
        </p>
      </>
    ),
    quote: {
      text: "Clean code always looks like it was written by someone who cares.",
      author: "Robert C. Martin",
      authorLink: "https://en.wikipedia.org/wiki/Robert_C._Martin",
    },
    backgroundColor: "#46466A",
    textColor: "#FCFDFE",
  },

  // Detail Focused
  {
    title: "Detail Focused",
    description: <></>,
    quote: {
      text: "It has long been an axiom of mine that the little things are infinitely the most important.",
      author: "Sherlock Holmes",
      authorLink: "https://en.wikipedia.org/wiki/Sherlock_Holmes",
    },
    backgroundColor: "#E19DAF",
    textColor: "#FCFDFE",
  },

  // Team Work
  {
    title: "Team Work",
    description: <></>,
    quote: {
      text: "Alone we can do so little, together we can do so much.",
      author: "Helen Keller",
      authorLink: "https://en.wikipedia.org/wiki/Helen_Keller",
    },
    backgroundColor: "#29283B",
    textColor: "#FCFDFE",
  },

  // Tech-Driven
  {
    title: "Tech-Driven",
    description: (
      <>
        <p className="text-center">
          Life is full of challenges, but with the right{" "}
          <HighlightedText>tools</HighlightedText> and{" "}
          <HighlightedText>technology</HighlightedText>, solutions are always
          within reach. I’m the kind of person who loves diving into new apps,
          gadgets, or systems just to see how they can{" "}
          <HighlightedText>make things easier</HighlightedText>. Whether it’s
          automating boring tasks, uncovering clever hacks to save time, or
          figuring out a tool to make everyone’s life better, I’m all about
          using tech to get things done.
        </p>

        <p className="text-center mt-2">
          In my work, I use a lot of tech to stay organized, improve efficiency,
          and tackle problems head-on. From the basic tools like Git for version
          control to AI (which is a big star nowadays) to help automate boring
          tasks, suggest code revisions and learn new stuffs; I use these kinds
          of tools every day.
        </p>
      </>
    ),
    quote: {
      text: "Technology is a tool, and it's critical to the future of work. It makes people more productive, more creative, and makes businesses more efficient.",
      author: "Sundar Pichai",
      authorLink: "https://en.wikipedia.org/wiki/Sundar_Pichai",
    },
    backgroundColor: "#BC3932",
    textColor: "#FCFDFE",
  },
];
