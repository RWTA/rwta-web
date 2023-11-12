import testimonialsImg from "../assets/financial-freedom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import person from "../assets/person-placeholder.jpg";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: person,
      name: "Francis Underwood",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et velit tellus. Sed laoreet scelerisque mi, a laoreet augue finibus ut. Sed ut augue non nulla finibus condimentum.",
      title: "President, X Company",
    },
    {
      id: 2,
      image: person,
      name: "Zoe Barnes",
      feedback:
        "Pellentesque euismod nunc ut sapien euismod, eu vehicula odio congue.",
      title: "Student",
    },
    {
      id: 3,
      image: person,
      name: "Doug Stamper",
      feedback:
        "Vestibulum a quam nec velit eleifend pellentesque a non sem. Sed laoreet scelerisque mi, a laoreet augue finibus ut.",
      title: "Developer, X Company",
    },
  ];

  return (
    <section id="testimonial" className="bg-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="header-1 font-bold mb-3 text-4xl text-center">
          WHAT OUR STUDENTS SAY
        </h3>
        <div className="divider-2"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-10">
          {testimonials.map((test) => (
            <div key={test.id} className="max-w-sm rounded overflow-hidden">
              <TestimonialItem
                image={test.image}
                feedback={test.feedback}
                name={test.name}
                title={test.title}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://forms.gle/j8MLxJquiA63F9Xs7"
            target="_blank"
            rel="noreferrer"
            className="btn-1 block mx-auto"
          >
            ENROLL NOW!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
