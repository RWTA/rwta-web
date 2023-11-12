import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/rwta-trans.png";

function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="bg-white">
      {/* Top Section */}
      <div className="bg-red-500 py-2 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-white" />
            <a href="tel:+639063252787">
              <span className="text-white font-nunito">+63 906 3252 787</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100089567463636"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.tiktok.com/@christian_napocao?_t=8ef0dh2Xcf3&_r=1"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </a>
        </div>
        <ul className="flex space-x-8">
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="font-nunito text-gray-800 font-bold hover:text-green-600 cursor-pointer"
            >
              ABOUT
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="courses"
              spy={true}
              smooth={true}
              duration={500}
              className="font-nunito text-gray-800 font-bold hover:text-green-600 cursor-pointer"
            >
              COURSES
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="videos"
              spy={true}
              smooth={true}
              duration={500}
              className="font-nunito text-gray-800 font-bold hover:text-green-600 cursor-pointer"
            >
              VIDEOS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="testimonials"
              spy={true}
              smooth={true}
              duration={500}
              className="font-nunito text-gray-800 font-bold hover:text-green-600 cursor-pointer"
            >
              TESTIMONIALS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="faqs"
              spy={true}
              smooth={true}
              duration={500}
              className="font-nunito text-gray-800 font-bold hover:text-green-600 cursor-pointer"
            >
              FAQS
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
