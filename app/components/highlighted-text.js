import React from "react";

export default function HighlightedText({ children, additionalClassNames }) {
  return (
    <span
      className={`bg-primary text-white px-2 rounded-md whitespace-nowrap ${additionalClassNames}`}
    >
      {children}
    </span>
  );
}
