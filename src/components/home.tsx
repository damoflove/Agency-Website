import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesShowcase from "./ServicesShowcase";
import WebDevelopmentSubsection from "./WebDevelopmentSubsection";
import PortfolioGrid from "./PortfolioGrid";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesShowcase />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Web Development Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From CMS platforms to custom development, we build websites that
                deliver results.
              </p>
            </div>
            <WebDevelopmentSubsection />
          </div>
        </section>
        <PortfolioGrid />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to discuss your project? Fill out the form below and we'll
                get back to you shortly.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
