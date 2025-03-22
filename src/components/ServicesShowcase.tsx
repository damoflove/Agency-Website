import React from "react";
import ServiceCard from "./ServiceCard";
import {
  Code,
  FileText,
  MessageSquare,
  BarChart3,
  UserCog,
} from "lucide-react";

const ServicesShowcase = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies to deliver exceptional user experiences.",
      icon: <Code className="h-8 w-8" />,
      features: [
        "Responsive design for all devices",
        "CMS integration (WordPress, Shopify, Wix)",
        "Custom development (React, Node.js, Next.js)",
        "E-commerce solutions",
        "Performance optimization",
      ],
    },
    {
      title: "Content Writing",
      description:
        "Engaging, SEO-optimized content that resonates with your audience and drives conversions.",
      icon: <FileText className="h-8 w-8" />,
      features: [
        "Blog posts and articles",
        "Website copy",
        "Product descriptions",
        "Email newsletters",
        "SEO content strategy",
      ],
    },
    {
      title: "Social Media Management",
      description:
        "Strategic social media presence that builds community and increases brand awareness.",
      icon: <MessageSquare className="h-8 w-8" />,
      features: [
        "Content calendar creation",
        "Post creation and scheduling",
        "Community engagement",
        "Performance analytics",
        "Paid social campaigns",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies that attract qualified leads and boost your ROI.",
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        "SEO optimization",
        "PPC campaign management",
        "Email marketing",
        "Conversion rate optimization",
        "Analytics and reporting",
      ],
    },
    {
      title: "Virtual Assistant",
      description:
        "Reliable administrative support to help you focus on growing your business.",
      icon: <UserCog className="h-8 w-8" />,
      features: [
        "Email and calendar management",
        "Customer service",
        "Data entry and management",
        "Research and reporting",
        "Basic bookkeeping",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic digital solutions designed to position your business as an
            industry leader and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
