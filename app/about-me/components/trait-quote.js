import Image from "next/image";

export default function TraitQuote({ quote }) {
  return (
    <div className="flex flex-row space-x-2 bg-gray-200 rounded-lg p-2 mx-5 mt-2">
      {/* Quote icon */}
      <div className="text-5xl font-mono w-10 h-10">
        <div className="relative w-10 h-10">
          <Image src="/icons/quote.svg" alt="Quote Icon" layout="fill" />
        </div>
      </div>

      {/* Quote */}
      <div className="text-sm lg:text-base text-gray-600 text-center w-5/6 mt-3">
        <p className="italic">{quote.text}</p>

        {/* Credit */}
        <p className="font-bold">
          ~<span className="text-primary hover:underline">{quote.author}</span>
        </p>
      </div>
    </div>
  );
}
