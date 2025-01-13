import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Chevron Down icon

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I order food for train delivery?",
      answer: "You can order food for train delivery through our app or website by entering your PNR number."
    },
    {
      question: "Can I track my order in real-time?",
      answer: "Yes, you can track your order in real-time through the order tracking page."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, UPI, net banking, and cash on delivery."
    },
    {
      question: "Can I modify or cancel my order after it’s placed?",
      answer: "You can modify or cancel your order before it is prepared by contacting our support team."
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer: "Yes, we frequently provide discounts and promotions. Check the offers page for the latest deals."
    }
  ];

  return (
    <section className="bg-white rounded-lg p-20 pt-0 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] z-30">
      <h2 className="text-4xl font-bold text-orange-500 text-center mb-2">
        Do You Have Any Questions?
      </h2>
      <p className="text-gray-600 text-center mb-6">
        "We are here to help! Here are some frequently asked <br />questions to get
        you started."
      </p>

      <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="bg-gray-100 rounded-md p-4 cursor-pointer border-b"
        >
          <summary className="font-medium text-gray-700 flex justify-between items-center">
            {faq.question}
            <FaChevronDown
              className={`text-gray-400 transform transition-transform ${
                document.querySelectorAll("details")[index]?.open
                  ? "rotate-180"
                  : ""
              }`}
            />
          </summary>
          <p className="mt-2 text-gray-600">{faq.answer}</p>
        </details>
      ))}
    </div>
    </section>
  );
};

export default FAQSection;
