import ReiColorPaletteImage from "./components/rei-color-palette-image";
import HighlightedText from "../components/highlighted-text";
import Title from "../components/title";
import Separator from "../components/separator";

export const metadata = {
  title: "William Oktavianus | Misc",
};

export default function MiscPage() {
  return (
    <>
      <Title>Congratulations!</Title>
      <h2 className="text-xl mt-2 px-5 lg:px-0">
        You just found <HighlightedText>my</HighlightedText> little secret about
        this portfolio!
      </h2>

      <div className="flex-">
        <Separator additionalClassNames="my-5" />
      </div>

      {/*  */}
      <div className="text-justify max-h-[60vh] overflow-x-auto px-5 lg:px-0 pb-20 lg:pb-0 mb-5 w-full lg:w-3/5">
        <p>
          <span className="float-left text-5xl font-bold mr-2">T</span>his
          portfolio website is my <span className="italic">love letter</span> to
          Rei Ayanami. While planning and designing it, I was really inspired by
          her so I decided to use her{" "}
          <HighlightedText>signature colors</HighlightedText> as this{" "}
          {`website's`} color palette to reflect her calm and minimalistic
          appearance. Along with the colors, I added several other details to
          make this website feel truly alive.
        </p>

        <ReiColorPaletteImage />

        <p className="mt-2">
          The separator uses the binary code{" "}
          <span className="font-mono">011100100110010101101001</span>, which
          spells out <span className="font-mono">rei</span>. The triangle
          background symbolizes NERV, whose headquarters are inverted pyramid
          underground—also, {`Rei's`} place of origin. The trait circle also
          represents different characters who, in one way or another, influence{" "}
          {`Rei's`} life:{" "}
          <span
            className="font-bold dark:bg-white dark:px-2 dark:rounded"
            style={{ color: "#46466A" }}
          >
            Shinji
          </span>
          ,{" "}
          <span
            className="font-bold dark:bg-white dark:px-2 dark:rounded"
            style={{ color: "#E19DAF" }}
          >
            Mari
          </span>
          ,{" "}
          <span
            className="font-bold dark:bg-white dark:px-2 dark:rounded"
            style={{ color: "#29283B" }}
          >
            Nagisa
          </span>{" "}
          and{" "}
          <span
            className="font-bold dark:bg-white dark:px-2 dark:rounded"
            style={{ color: "#BC3932" }}
          >
            Asuka
          </span>
          .
        </p>
      </div>
    </>
  );
}
