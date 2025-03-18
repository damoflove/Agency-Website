import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  image: string;
  technologies: string[];
  category: string;
}

const WebDevelopmentSubsection = () => {
  const [activeTab, setActiveTab] = useState("wordpress");

  const projects: Record<string, Project[]> = {
    wordpress: [
      {
        id: "wp1",
        title: "Corporate Business Site",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
        technologies: ["WordPress", "Elementor", "WooCommerce"],
        category: "Business",
      },
      {
        id: "wp2",
        title: "Restaurant Booking Platform",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80",
        technologies: ["WordPress", "Custom Theme", "Booking Plugin"],
        category: "Hospitality",
      },
      {
        id: "wp3",
        title: "Photography Portfolio",
        image:
          "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&q=80",
        technologies: ["WordPress", "Divi", "Lightbox Gallery"],
        category: "Creative",
      },
    ],
    wix: [
      {
        id: "wix1",
        title: "Boutique Store",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80",
        technologies: ["Wix", "Wix Stores", "Wix Bookings"],
        category: "E-commerce",
      },
      {
        id: "wix2",
        title: "Fitness Studio Website",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
        technologies: ["Wix", "Wix Scheduling", "Wix Video"],
        category: "Health & Fitness",
      },
    ],
    shopify: [
      {
        id: "shop1",
        title: "Fashion Apparel Store",
        image:
          "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&q=80",
        technologies: ["Shopify", "Custom Theme", "Product Reviews"],
        category: "E-commerce",
      },
      {
        id: "shop2",
        title: "Handmade Crafts Marketplace",
        image:
          "https://images.unsplash.com/photo-1510832198440-a52376950479?w=500&q=80",
        technologies: ["Shopify", "Multi-vendor", "Custom Checkout"],
        category: "E-commerce",
      },
      {
        id: "shop3",
        title: "Digital Products Store",
        image:
          "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&q=80",
        technologies: ["Shopify", "Digital Downloads", "Subscription"],
        category: "E-commerce",
      },
    ],
    custom: [
      {
        id: "custom1",
        title: "Real Estate Platform",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
        technologies: ["React", "Node.js", "MongoDB"],
        category: "Real Estate",
      },
      {
        id: "custom2",
        title: "Learning Management System",
        image:
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&q=80",
        technologies: ["Next.js", "Tailwind CSS", "Supabase"],
        category: "Education",
      },
      {
        id: "custom3",
        title: "Healthcare Patient Portal",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
        technologies: ["React", "Express", "PostgreSQL"],
        category: "Healthcare",
      },
      {
        id: "custom4",
        title: "SaaS Dashboard",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
        technologies: ["Vue.js", "Firebase", "Stripe"],
        category: "SaaS",
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-2xl font-bold mb-6">Web Development Solutions</h3>

      <Tabs
        defaultValue="wordpress"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="wordpress">WordPress</TabsTrigger>
          <TabsTrigger value="wix">Wix</TabsTrigger>
          <TabsTrigger value="shopify">Shopify</TabsTrigger>
          <TabsTrigger value="custom">Custom Development</TabsTrigger>
        </TabsList>

        {Object.keys(projects).map((platform) => (
          <TabsContent key={platform} value={platform} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects[platform].map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{project.category}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary p-0"
                        asChild
                      >
                        <Link to="/portfolio">
                          View Details <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default WebDevelopmentSubsection;
