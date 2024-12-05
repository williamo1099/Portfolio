import React from "react";

export default function HighlightedText({ children }) {
  return (
    <span className="bg-primary text-white px-2 rounded-md">{children}</span>
  );
}
