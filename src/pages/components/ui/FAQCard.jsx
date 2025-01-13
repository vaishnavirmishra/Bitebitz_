import React, { useState } from "react";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";

function FAQCard ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full p-6 rounded-lg shadow-lg ${
        isOpen ? "bg-[#ff6443] text-white" : "bg-white"
      } transition-all duration-300`}
    >
      {/* Question Section */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold">{question}</h3>
        {isOpen ? (
          <FaChevronUp className="bg-gray-200 p-3 h-10 w-10 rounded-full text-black transition-transform duration-300" />
        ) : (
          <FaChevronRight className="bg-gray-200 p-3 h-10 w-10 rounded-full transition-transform duration-300" />
        )}
      </div>

      {/* Answer Section */}
      {isOpen && <p className="mt-4">{answer}</p>}
    </div>
  );
};

export default FAQCard;