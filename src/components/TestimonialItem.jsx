import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TestimonialItem({ image, feedback, name, title }) {
  return (
    <div className="testimonial-wrapper relative">
      {/* Image */}
      <div className="border-[8px] border-gray-200 rounded-full w-1/4 m-auto relative z-20">
        <img src={image} alt={name} className="w-100 rounded-full" />
      </div>

      {/* Content */}
      <div className="mt-[-2.8rem] bg-white rounded-md text-center pt-10 pb-5 px-5 relative z-10">
        <div className="testimonial-content">
          <p className="font-nunito font-light italic text-gray-500 mt-5 relative leading-7">
            <span>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-green-500 text-2xl relative top-[-3px]"
              />
            </span>
            &nbsp;&nbsp;
            {feedback}
            &nbsp;&nbsp;
            <span>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="text-green-500 text-2xl relative top-[-3px]"
              />
            </span>
          </p>
        </div>

        {/* Name */}
        <div className="mt-5 text-center">
          <p className="font-roboto font-semibold">{name}</p>
          <p className="font-nunito font-light italic text-sm text-gray-500">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
