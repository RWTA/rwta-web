import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/rwta-trans.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-7">
      <div className="flex justify-center items-center mb-2">
        <a href="/">
          <img src={logo} alt="RTWA Logo" className="w-28" />
        </a>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="#" className="font-nunito text-gray-300 hover:text-white">
          About Us
        </a>
        <a href="#" className="font-nunito text-gray-300 hover:text-white">
          Courses
        </a>
        <a href="#" className="font-nunito text-gray-300 hover:text-white">
          Videos
        </a>
        <a href="#" className="font-nunito text-gray-300 hover:text-white">
          Testimonials
        </a>
        <a href="#" className="font-nunito text-gray-300 hover:text-white">
          FAQs
        </a>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://www.facebook.com/profile.php?id=100089567463636"
          className="text-gray-300 hover:text-white"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.tiktok.com/@christian_napocao?_t=8ef0dh2Xcf3&_r=1"
          className="text-gray-300 hover:text-white"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </div>
      <p className="mt-4 text-center text-gray-500">
        © 2023 Real World Trading Academy. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;