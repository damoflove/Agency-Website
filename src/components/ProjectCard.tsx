import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id?: string;
  title?: string;
  category?: string;
  industry?: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
  technologies?: string[];
  onViewDetails?: (id: string) => void;
}

const ProjectCard = ({
  id = "1",
  title = "Modern E-commerce Website",
  category = "Web Development",
  industry = "E-commerce",
  description = "Complete redesign of an outdated e-commerce platform with modern UI and improved user experience.",
  beforeImage = "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=400&q=80",
  afterImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
  technologies = ["React", "Node.js", "Shopify"],
  onViewDetails = () => {},
}: ProjectCardProps) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={showAfter ? afterImage : beforeImage}
          alt={`${title} ${showAfter ? "after" : "before"} image`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <div className="flex justify-between items-center">
            <Badge variant="secondary" className="bg-primary text-white">
              {industry}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 hover:bg-white text-xs"
              onClick={() => setShowAfter(!showAfter)}
            >
              {showAfter ? "View Before" : "View After"}
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs bg-gray-100 text-gray-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-primary hover:text-primary/80 p-0"
          onClick={() => onViewDetails(id)}
        >
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="text-xs">
          Live Preview <ExternalLink className="ml-1 h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
