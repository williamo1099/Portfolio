import React from "react";

export default function HighlightedText({ text }) {
  return <span className="bg-primary text-white px-2 rounded-md">{text}</span>;
}
