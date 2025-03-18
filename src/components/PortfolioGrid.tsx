import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import { Button } from "./ui/button";

interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  technologies: string[];
  clientFeedback?: string;
  challenges?: string;
  solutions?: string;
  results?: string;
}

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "Modern E-commerce Redesign",
      category: "Web Development",
      industry: "E-commerce",
      description:
        "Complete redesign of an outdated e-commerce platform with modern UI and improved user experience.",
      beforeImage:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
      technologies: ["React", "Node.js", "Shopify"],
      clientFeedback:
        "The Nexa Digital Hub team transformed our outdated online store into a modern, user-friendly platform that has significantly increased our conversion rates and customer satisfaction.",
      challenges:
        "The client had an outdated platform with poor mobile experience, slow loading times, and a complicated checkout process leading to high cart abandonment rates.",
      solutions:
        "We implemented a responsive design with optimized assets, streamlined the checkout process to 3 steps, and added product recommendations based on browsing history.",
      results:
        "42% increase in mobile conversions, 27% reduction in cart abandonment, and 35% increase in average order value within the first three months after launch.",
    },
    {
      id: "2",
      title: "Luxury Real Estate Platform",
      category: "Web Development",
      industry: "Real Estate",
      description:
        "Custom real estate platform for high-end properties with virtual tours and advanced filtering.",
      beforeImage:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Google Maps API"],
      clientFeedback:
        "Our new platform has revolutionized how we showcase luxury properties. The virtual tour feature has been particularly valuable for international clients.",
      challenges:
        "The client needed a way to showcase luxury properties to international buyers who couldn't visit in person, with detailed filtering options for specific amenities.",
      solutions:
        "We built a custom platform with 360° virtual tours, multilingual support, and advanced search filters for luxury-specific amenities.",
      results:
        "65% increase in international leads and 40% reduction in time-to-sale for featured properties.",
    },
    {
      id: "3",
      title: "Membership Community Portal",
      category: "Web Development",
      industry: "Membership",
      description:
        "Exclusive membership platform with content gating, user profiles, and integrated payment processing.",
      beforeImage:
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
      technologies: ["React", "Firebase", "Stripe"],
      clientFeedback:
        "The membership portal has transformed our business model, allowing us to monetize our content effectively while providing real value to our community.",
      challenges:
        "The client needed to transition from a free content model to a tiered membership system with different access levels and seamless payment processing.",
      solutions:
        "We developed a custom membership portal with content gating, user profiles, community features, and integrated Stripe for recurring payments.",
      results:
        "Successfully converted 22% of free users to paid memberships within the first month, with 95% retention rate after six months.",
    },
    {
      id: "4",
      title: "Healthcare Provider Directory",
      category: "Web Development",
      industry: "Healthcare",
      description:
        "Searchable directory of healthcare providers with appointment booking and insurance verification.",
      beforeImage:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
      technologies: ["Vue.js", "Node.js", "PostgreSQL"],
      clientFeedback:
        "The new directory has streamlined our patient onboarding process and significantly reduced administrative workload for our staff.",
      challenges:
        "The client needed to replace their paper-based provider directory with a digital solution that could handle complex search queries and integrate with their existing systems.",
      solutions:
        "We built a searchable directory with filters for specialty, location, insurance acceptance, and availability, plus online booking functionality.",
      results:
        "Reduced administrative phone calls by 60% and increased new patient appointments by 45%.",
    },
    {
      id: "5",
      title: "Boutique Fashion Store",
      category: "Web Development",
      industry: "E-commerce",
      description:
        "Stylish e-commerce site for a boutique clothing brand with custom product visualization.",
      beforeImage:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80",
      technologies: ["Shopify", "Custom Theme", "AR Try-On"],
      clientFeedback:
        "Our online store now perfectly reflects our brand aesthetic, and the virtual try-on feature has been a game-changer for reducing returns.",
      challenges:
        "The client wanted an online store that matched their unique brand aesthetic while reducing return rates through better product visualization.",
      solutions:
        "We created a custom Shopify theme with their exact brand styling and implemented an AR try-on feature for clothing items.",
      results:
        "38% reduction in return rates and 52% increase in average session duration.",
    },
    {
      id: "6",
      title: "Corporate Intranet Portal",
      category: "Web Development",
      industry: "Corporate",
      description:
        "Secure internal portal for employee resources, communication, and document management.",
      beforeImage:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
      afterImage:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
      technologies: ["React", "SharePoint", "Microsoft Graph API"],
      clientFeedback:
        "The new intranet has centralized our internal resources and significantly improved communication across departments.",
      challenges:
        "The client had information scattered across multiple systems, making it difficult for employees to find resources and stay updated on company news.",
      solutions:
        "We developed a centralized intranet portal with document management, company news, employee directory, and integrated Microsoft 365 services.",
      results:
        "Reduced time spent searching for information by 75% and increased employee engagement with company updates by 60%.",
    },
  ];

  const handleViewDetails = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
    }
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.industry.toLowerCase() === activeFilter.toLowerCase(),
        );

  const industries = [
    "all",
    ...new Set(projects.map((p) => p.industry.toLowerCase())),
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={activeFilter === industry ? "default" : "outline"}
                onClick={() => setActiveFilter(industry)}
                className="capitalize"
              >
                {industry === "all" ? "All Projects" : industry}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              industry={project.industry}
              description={project.description}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              technologies={project.technologies}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectDetails
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
