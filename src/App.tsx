import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import ContactForm from "./components/ContactForm";
import PortfolioGrid from "./components/PortfolioGrid";
import ServicesShowcase from "./components/ServicesShowcase";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/portfolio" element={<PortfolioGrid />} />
          <Route path="/services" element={<ServicesShowcase />} />
          <Route path="/about" element={<AboutUs />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
