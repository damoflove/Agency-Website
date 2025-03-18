import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  expanded?: boolean;
  onExpand?: () => void;
  className?: string;
}

const ServiceCard = ({
  title = "Service Title",
  description = "Comprehensive service description that explains the value and benefits to potential clients.",
  icon,
  features = [
    "Feature one description",
    "Feature two description",
    "Feature three description",
  ],
  expanded = false,
  onExpand,
  className,
}: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (onExpand) onExpand();
  };

  return (
    <Card
      className={cn(
        "w-full max-w-[350px] transition-all duration-300 h-auto bg-white",
        isExpanded ? "shadow-lg" : "shadow-md",
        className,
      )}
    >
      <CardHeader>
        {icon && <div className="text-primary mb-2">{icon}</div>}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description.length > 100 && !isExpanded
            ? `${description.substring(0, 100)}...`
            : description}
        </CardDescription>
      </CardHeader>

      {isExpanded && (
        <CardContent>
          <h4 className="font-medium mb-2">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}

      <CardFooter className="flex justify-between pt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handleToggle}
          className="flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>Learn More</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="text-primary flex items-center gap-1"
          asChild
        >
          <Link to="/services">
            <span>Details</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
