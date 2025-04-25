import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Cursor from "./components/CursorFollower";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      new LocomotiveScroll();
    }
  }, [loading]);

  return (
    <Router>
      <div className="w-full min-h-screen text-white bg-black">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Cursor />
            <NavBar />
            <Routes>
              {/* Full site structure on the home route */}
              <Route
                path="/"
                element={
                  <>
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
                }
              />
              {/* Individual routes for specific sections */}
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/works" element={<Projects />} />
              <Route path="/contact" element={<ContactSection />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;