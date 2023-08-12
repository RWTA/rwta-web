import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/rwta-trans.png'

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-300">
      {/* Top Section */}
      <div className="bg-red-500 py-2 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-white" />
            <a href="tel:+639063252787">
              <span className="text-white">+63 906 3252 787</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
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
          <li><a href="#" className="text-gray-800 font-semibold hover:text-green-600">HOME</a></li>
          <li><a href="#" className="text-gray-800 font-semibold hover:text-green-600">ABOUT</a></li>
          <li><a href="#" className="text-gray-800 font-semibold hover:text-green-600">COURSES</a></li>
          <li><a href="#" className="text-gray-800 font-semibold hover:text-green-600">VIDEOS</a></li>
          <li><a href="#" className="text-gray-800 font-semibold hover:text-green-600">TESTIMONIALS</a></li>
          <li><a href="#" className="text-gray-800 font-semibold hover:text-green-600">FAQS</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar