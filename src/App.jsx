import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Loader from "./components/Loader";
import NavBar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import ServicesSection from "./components/Service";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactPage";
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
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesSection />} />
            <Route path="/works" element={<Projects />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;