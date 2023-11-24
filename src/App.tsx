import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Career from "./pages/career/Career";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import DetailedProject from "./pages/DetailedProject";
import sliderItems from "../projectsData.json";

function App() {
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header scrollToFooter={scrollToFooter} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/detailed/:id" element={<DetailedProject />} />
      </Routes>
    </>
  );
}

export default App;
