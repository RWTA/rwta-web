import React, { useEffect, useState } from 'react'
import heroImage from '../assets/hero1.jpg'

function Hero() {
  const [heroHeight, setHeroHeight] = useState('auto');

  useEffect(() => {
    const handleResize = () => {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      setHeroHeight(`calc(100vh - ${navbarHeight}px)`);
    };

    handleResize(); // Initialize height on load

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className="min-h-[calc(100vh - var(--nav-height))] bg-cover bg-center relative flex justify-center items-center"
      style={{ backgroundImage: `url(${heroImage})`, height: heroHeight }}
    >
      <div className="absolute inset-0 bg-gray-500 opacity-60"></div>
      <div className="z-10 text-center text-white">
        <h1 className="text-6xl font-semibold mb-6 leading-tight font-roboto-slab">
          <span className="text-green-400 font-bold">EFFORTLESS</span> ONLINE INCOME SYSTEM:<br />
          YOUR PATH TO <span className="text-green-400 font-bold">FINANCIAL FREEDOM</span>
        </h1>
        <p className="font-nunito w-100 mb-16 text-white md:text-xl md:w-1/2 md:mx-auto">
          Ready to transform into a savvy Forexpreneur? Join us on a learning adventure that unlocks the secrets of Forex and online business success. Enroll now in our comprehensive courses under our <span className="font-bold underline">Financial Freedom Project Program</span> and embark on a journey towards financial prosperity!
        </p>
        <button className="btn-1">
          ENROLL NOW!
        </button>
      </div>
    </section>
  )
}

export default Hero