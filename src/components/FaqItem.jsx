// FAQItem.js
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between bg-gray-200 p-4 cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="par-1 text-lg font-semibold">{question}</h2>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpen && (
        <div className="bg-white p-4 mt-2 border">
          <p className="par-1 text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
