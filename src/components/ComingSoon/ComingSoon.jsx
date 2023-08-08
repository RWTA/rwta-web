import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import rwtaLogoTrans from '../../assets/rwta-trans.png';
import comingSoonBg from '../../assets/coming-soon-2.jpg';

export default function ComingSoon() {
  return (
    <div className="flex flex-col justify-center items-center h-screen" style={{
      backgroundImage: `url(${comingSoonBg})`,
      backgroundSize: 'cover',
    }}>
      {/* Background: https://wallpapersafari.com/w/LwoI4i */}
      <div className="coming-soon-wrap px-5">
        <div className="w-2/3 mx-auto md:w-1/3">
          <img src={rwtaLogoTrans} alt="RWTA logo" className="w-full" />
        </div>
        <div className="coming-soon-content text-center">
          <h1 className="text-red-700 font-bold mb-5 text-3xl md:text-4xl">SOMETHING <span className="text-green-600">EXTRAORDINARY</span> IS IN THE WORKS!</h1>
          <hr className="my-5" />
          <p className="w-100 text-gray-800 md:text-lg md:w-8/12 md:mx-auto">We're hard at work constructing the future of forex education. Stay tuned for a transformative learning experience!</p>
        </div>
        <div className="coming-soon-socmed flex flex-row justify-center items-center mt-10 gap-7">
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  )
}
