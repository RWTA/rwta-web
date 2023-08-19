import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import placeholderImage from '../assets/rwta-trans.png'

function About() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="header-1 font-bold mb-3 text-4xl text-center">YOUR PATH TO FINANCIAL EMPOWERMENT BEGINS <span className="text-green-500">NOW!</span></h3>
        <div className="divider-1"></div>
        <p className="par-1 w-5/6 mx-auto text-lg mb-4 text-center">
          Dream of financial freedom? Join us on an enlightening voyage to the world of forex trading. Imagine turning currency exchanges into your own source of wealth. Our Forex Academy unveils this potential.
        </p>
        <p className="par-1 w-5/6 mx-auto text-lg mb-4 text-center">
          But success in forex isn't just about strategies - it's about the right mindset. Our academy not only equips you with expert guidance, strategies, and risk management skills but also corrects and strengthens the psychology behind forex trading. Discover how millions are made daily in forex trading.
        </p>
        <p className="par-1 w-5/6 mx-auto text-lg text-center">
          Empower yourself. Enroll today and chart a course toward financial independence with us.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 my-10">
        <div className="flex justify-center items-center space-x-7">
          <div className="box border-blue-200">
            <div className="w-20 mx-auto h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faLightbulb} className="text-white text-4xl" />
            </div>
            <h3 className="subheader-1 font-bold my-5 text-2xl">Right Mindset</h3>
            <p className="par-1 text-lg">Forex isn't just about strategies, it's about mindset</p>
          </div>
          <div className="box border-blue-200">
            <div className="w-20 mx-auto h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faCoins} className="text-white text-4xl" />
            </div>
            <h3 className="subheader-1 font-bold my-5 text-2xl">Learn Forex</h3>
            <p className="par-1 text-lg">Setup a brokerage account and learn forex</p>
          </div>
          <div className="box border-blue-200">
            <div className="w-20 mx-auto h-20 bg-blue-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faLightbulb} className="text-white text-4xl" />
            </div>
            <h3 className="subheader-1 font-bold my-5 text-2xl">Right Mindset</h3>
            <p className="par-1 text-lg">Forex isn't just about strategies, it's about mindset</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About