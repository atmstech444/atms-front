import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/career/Career";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import DetailedProject from "./pages/DetailedProject";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header scrollToFooter={scrollToFooter} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detailed/:id" element={<DetailedProject />} />
      </Routes>
    </>
  );
}

export default App;
