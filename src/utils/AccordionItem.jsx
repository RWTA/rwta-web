import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className="border rounded-lg p-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-gray-600">
            {isOpen ? "-" : "+"}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="border-t p-2 mt-2">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;