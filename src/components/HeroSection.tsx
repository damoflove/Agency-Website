import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Strategic Digital Solutions for Industry Leaders",
  subtitle = "We empower businesses with cutting-edge digital strategies and technologies that drive innovation, growth, and market dominance.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  backgroundImage = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=90",
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[700px] bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Animated Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-primary/30 to-transparent opacity-60" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse z-1" />
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-1" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">
              Elevating Digital Excellence
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white gap-2 group"
              asChild
            >
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-0"
              asChild
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
