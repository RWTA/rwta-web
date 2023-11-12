import { useState } from "react";
import FAQItem from "./FaqItem";

function Faqs() {
  const faqData = [
    {
      question: "What is Trading?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend vel dui non cursus. Fusce commodo libero vel justo consectetur, a tincidunt tellus tempor.",
    },
    {
      question: "How can I enroll?",
      answer:
        "Nullam ullamcorper, elit vel dapibus consectetur, velit ex tristique justo, id sagittis quam orci ac ligula. Mauris gravida, libero sed consequat volutpat, felis libero rhoncus odio, nec fermentum tortor mauris ac justo.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="header-1 font-bold mb-3 text-4xl text-center">
          FREQUENTLY ASKED QUESTIONS
        </h3>

        <div className="divider-1"></div>

        <div className="max-w-3xl mx-auto mt-8">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
