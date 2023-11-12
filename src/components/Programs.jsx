import ListItem from "../utils/ListItem";
import {
  faChartLine,
  faBrain,
  faWallet,
  faClipboardList,
  faLightbulb,
  faBookOpen,
  faChartBar,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const programs = [
  {
    icon: faChartLine,
    title: "Understanding the Forex Market",
    description:
      "Gain insights into the intricacies of the Forex Market and its dynamics.",
  },
  {
    icon: faBrain,
    title: "Mastering Your Mind for Profitable Trading",
    description:
      "Enhance your trading prowess by harnessing the power of a disciplined mindset.",
  },
  {
    icon: faWallet,
    title: "Money Management Techniques / Risk Management",
    description:
      "Learn essential Money Management Techniques to safeguard your capital and optimize risk.",
  },
  {
    icon: faClipboardList,
    title: "Trading Plan Development",
    description:
      "Craft a robust Trading Plan tailored to your goals and risk tolerance.",
  },
  {
    icon: faLightbulb,
    title: "Trading Psychology",
    description:
      "Enhance your trading prowess by harnessing the power of a disciplined mindset.",
  },
  {
    icon: faBookOpen,
    title: "Trading Journal",
    description:
      "Harness the power of a Trading Journal to track your progress and fine-tune your strategy.",
  },
  {
    icon: faChartBar,
    title: "Technical Analysis",
    description:
      "Master the art of Technical Analysis to decipher market trends and make informed trades.",
  },
  {
    icon: faCogs,
    title: "Trading Strategies",
    description:
      "Explore a variety of Trading Strategies to diversify your approach and maximize profitability.",
  },
];

function Programs() {
  return (
    <section id="programs" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="header-1 font-bold mb-3 text-4xl text-center">
          WHAT YOU&apos;LL LEARN
        </h3>
        <div className="divider-1"></div>
        <p className="par-1 w-5/6 mx-auto text-lg mb-4 text-center">
          Our academy offers a comprehensive range of programs and features
          designed to empower you with the knowledge and skills needed to
          navigate the dynamic world of forex trading. Whether you're a beginner
          taking your first steps or an experienced trader looking to sharpen
          your strategies, our expert-led courses cater to all levels.
        </p>
        <p className="par-1 w-5/6 mx-auto text-lg mb-4 text-center">
          The course comprises of the following 8 unlockable chapters, each
          offering comprehensive insights and practical knowledge to help you
          master the intricacies of Forex trading and excel in the financial
          markets.
        </p>

        <div className="w-2/3 mx-auto mb-10">
          {programs.map((program, index) => (
            <ListItem
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              isLastItem={index === programs.length - 1}
            />
          ))}
        </div>

        <p className="header-1 w-5/6 mx-auto text-3xl font-bold mb-4 text-center">
          Our Offer:{" "}
          <span className="text-red-500 font-extrabold">
            ₱4,900: Forex Mastery
          </span>{" "}
          (Monthly Learning Path)
        </p>
        <p className="par-1 w-5/6 mx-auto text-lg mb-4 text-center">
          Gain access to the Academy and receive personalized 1-on-1 coaching
          with our CEO. This will help you focus on becoming a profitable
          trader. If you're interested in becoming a forex trader, enroll now by
          clicking the button below!
        </p>

        <div className="text-center mt-10">
          <a
            href="https://forms.gle/j8MLxJquiA63F9Xs7"
            target="_blank"
            rel="noreferrer"
            className="btn-2 block mx-auto"
          >
            ENROLL NOW!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Programs;
