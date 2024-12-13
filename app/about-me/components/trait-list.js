import TraitCircle from "./trait-circle";

import { traits } from "@/data/traits";

export default function TraitList() {
  return (
    <div className="flex flex-row space-x-4 items-center justify-center w-full mb-20">
      {traits.map((trait, index) => (
        <TraitCircle key={index} trait={trait} />
      ))}
    </div>
  );
}
