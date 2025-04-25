import { useEffect, useState } from "react";
import Loader from "./components/Loader";
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
import CustomCursor from "./components/customcursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // initialize locomotive-scroll after loader ends
    if (!loading) {
      new LocomotiveScroll();
    }
  }, [loading]);

  useEffect(() => {
    // simulate loading time
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen text-white bg-black">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomCursor />
          <NavBar />
          <LandingPage />
          <Marque />
          <ServicesSection />
          <Projects />
          <AboutUs />
          <WhyChooseWebdrave />
          <Testimonials />
          <ContactSection />
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
        </>
      )}
    </div>
  );
}

export default App;