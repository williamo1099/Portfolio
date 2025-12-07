import React, { ReactNode } from "react";

interface HighlightedTextProps {
  children: ReactNode;
  additionalClassNames: string;
}

export default function HighlightedText({
  children,
  additionalClassNames,
}: HighlightedTextProps) {
  return (
    <span
      className={`bg-primary text-white px-2 rounded-md whitespace-nowrap ${additionalClassNames}`}
    >
      {children}
    </span>
  );
}
