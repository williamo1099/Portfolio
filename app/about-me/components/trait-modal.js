import Image from "next/image";
import TraitQuote from "./trait-quote";

export default function TraitModal({ trait, isModalOpen, onClose }) {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-0">
      <div className="bg-white rounded-lg shadow-lg max-w-sm lg:max-w-2xl w-full p-6">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-3">
          {/* Title */}
          <h3 className="text-xl font-bold">{trait.title}</h3>

          {/* Close */}
          <button onClick={onClose} className="relative w-8 h-8">
            <Image src="/icons/close.svg" alt="Close Icon" layout="fill" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">
          {/* Quote */}
          <TraitQuote quote={trait.quote} />

          <div className="overflow-auto max-h-[60vh] w-full mt-4">
            {trait.description}
          </div>
        </div>
      </div>
    </div>
  );
}
