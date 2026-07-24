import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Home from "../pages/Home";
import ProjectsPage from "../pages/ProjectsPage";
import AboutPage from "../pages/AboutPage";
import ResumePage from "../pages/ResumePage";
import CertificationsPage from "../pages/CertificationsPage";
import ContactPage from "../pages/ContactPage";

export default function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Capas de textura sobre todo el sitio */}
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <Nav />
      <ScrollToTop />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/sobre-mi" element={<AboutPage />} />
            <Route path="/cv" element={<ResumePage />} />
            <Route path="/certificaciones" element={<CertificationsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
