import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FinancialFreedom from "../components/FinancialFreedom";
import Programs from "../components/Programs";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
}

export default Home;
