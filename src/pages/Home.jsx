import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FinancialFreedom from "../components/FinancialFreedom";
import Programs from "../components/Programs";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FinancialFreedom />
      <Programs />
      <Testimonial />
      <Faq />
    </div>
  );
}

export default Home;
