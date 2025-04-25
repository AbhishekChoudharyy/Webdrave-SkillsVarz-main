import NavBar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import ServicesSection from "./components/Service";
import Projects from "./components/Projects";
import AboutUs from "./components/About";
import WhyChooseWebdrave from "./components/WhyChooseWebdrave";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactPage";
import TextPressure from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-white bg-black ">
      {/* <Loader /> */}
      <NavBar />
      <LandingPage />
      <Marque />
      <ServicesSection />
      <Projects />
      <AboutUs />
      <WhyChooseWebdrave />
      <Testimonials />
      <ContactSection/>
      <TextPressure
          text="WEBDRAVE"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
        

    </div>
  );
}

export default App;
