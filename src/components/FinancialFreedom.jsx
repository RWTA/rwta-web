import { faCheck } from "@fortawesome/free-solid-svg-icons";
import financialFreedom from "../assets/financial-freedom.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FinancialFreedom() {
  return (
    <section
      id="courses"
      className="bg-cover bg-fixed bg-center relative z-0"
      style={{ backgroundImage: `url(${financialFreedom})` }}
    >
      <div className="overlay"></div>

      <div className="relative z-20 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div id="ff-content">
            <h3 className="header-2 font-bold mb-3 text-4xl text-center">
              UNLOCK YOUR WAY TO FINANCIAL FREEDOM
            </h3>
            <div className="divider-2"></div>
            <p className="par-2 w-5/6 mx-auto text-lg mb-4 text-center">
              Your journey towards success and financial freedom begins with the
              decision to take proactive steps towards realizing your dreams.
              Seize control of your financial destiny by enrolling in the
              Financial Freedom Project Program, where you'll learn the
              essential tools and strategies needed to create lasting wealth.
            </p>
            <p className="par-2 w-5/6 mx-auto text-lg text-center">
              Embrace the opportunity to gain valuable insights and knowledge
              that will equip you to navigate the complexities of wealth
              creation with confidence. By enrolling in our program, you're
              taking a significant stride towards achieving financial freedom
              and setting the stage for a life of abundance and fulfillment.
            </p>
          </div>

          <div className="flex justify-center items-start space-x-12 mt-10">
            <div id="yt-vid-1" className="w-1/2">
              <iframe
                className="w-full"
                height="315"
                src="https://www.youtube.com/embed/LfhOrP0u6f8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div id="yt-vid-1" className="w-1/2">
              <h3 className="subheader-2 font-bold my-5 text-2xl">
                How To Start Trading Forex
              </h3>
              <div className="flex justify-start space-x-5 items-center mb-3">
                <div className="w-10 h-10 border-2 border-green-700 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-700 text-xl"
                  />
                </div>
                <div>
                  <p className="par-2 text-lg">Learn about forex and trading</p>
                </div>
              </div>
              <div className="flex justify-start space-x-5 items-center mb-3">
                <div className="w-10 h-10 border-2 border-green-700 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-700 text-xl"
                  />
                </div>
                <div>
                  <p className="par-2 text-lg">Setup brokerage account</p>
                </div>
              </div>
              <div className="flex justify-start space-x-5 items-center mb-3">
                <div className="w-10 h-10 border-2 border-green-700 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-700 text-xl"
                  />
                </div>
                <div>
                  <p className="par-2 text-lg">
                    Invest time and effort on studying forex
                  </p>
                </div>
              </div>
              <a
                href="https://forms.gle/j8MLxJquiA63F9Xs7"
                target="_blank"
                rel="noreferrer"
                className="btn-2 block mt-4 text-center"
              >
                ENROLL NOW!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialFreedom;
