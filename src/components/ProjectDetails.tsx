import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

interface ProjectDetailsProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    category: string;
    description: string;
    technologies: string[];
    beforeImage: string;
    afterImage: string;
    clientFeedback?: string;
    challenges?: string;
    solutions?: string;
    results?: string;
  };
}

const ProjectDetails = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "Modern E-commerce Redesign",
    category: "E-commerce",
    description:
      "Complete redesign and development of an outdated e-commerce platform, focusing on improved user experience, mobile responsiveness, and conversion optimization.",
    technologies: ["React", "Node.js", "Shopify", "Tailwind CSS"],
    beforeImage:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    clientFeedback:
      "The Nexa Digital Hub team transformed our outdated online store into a modern, user-friendly platform that has significantly increased our conversion rates and customer satisfaction.",
    challenges:
      "The client had an outdated platform with poor mobile experience, slow loading times, and a complicated checkout process leading to high cart abandonment rates.",
    solutions:
      "We implemented a responsive design with optimized assets, streamlined the checkout process to 3 steps, and added product recommendations based on browsing history.",
    results:
      "42% increase in mobile conversions, 27% reduction in cart abandonment, and 35% increase in average order value within the first three months after launch.",
  },
}: ProjectDetailsProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden">
        <DialogHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold">
                {project.title}
              </DialogTitle>
              <DialogDescription className="mt-1">
                <Badge variant="outline" className="mr-2">
                  {project.category}
                </Badge>
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="mr-2">
                    {tech}
                  </Badge>
                ))}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="before-after">Before & After</TabsTrigger>
              <TabsTrigger value="challenges">
                Challenges & Solutions
              </TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="space-y-4">
                <p className="text-gray-700">{project.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Client Feedback
                  </h4>
                  <p className="text-gray-600 italic">
                    "{project.clientFeedback}"
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="before-after" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Before</h4>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={project.beforeImage}
                      alt="Before redesign"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">After</h4>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={project.afterImage}
                      alt="After redesign"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Challenges</h4>
                  <p className="text-gray-700">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Solutions</h4>
                  <p className="text-gray-700">{project.solutions}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results" className="mt-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4">
                  Project Outcomes
                </h4>
                <p className="text-gray-700">{project.results}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-blue-600">42%</div>
                    <div className="text-sm text-gray-600">
                      Increase in mobile conversions
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-blue-600">27%</div>
                    <div className="text-sm text-gray-600">
                      Reduction in cart abandonment
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-blue-600">35%</div>
                    <div className="text-sm text-gray-600">
                      Increase in average order value
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter className="p-6 border-t bg-gray-50">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button>Contact for Similar Project</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetails;
