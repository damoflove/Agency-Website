import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceCategory: "",
    specificServices: [],
    projectDescription: "",
    budget: "",
    timeline: "",
    hearAboutUs: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const services = [...(prev.specificServices as string[])];
      if (services.includes(service)) {
        return {
          ...prev,
          specificServices: services.filter((s) => s !== service),
        };
      } else {
        return { ...prev, specificServices: [...services, service] };
      }
    });
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    console.log("Form submitted:", formData);
    // Show success message or redirect
    setStep(5);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Let us know who you are</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company/Organization</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                />
              </div>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle>Service Selection</CardTitle>
              <CardDescription>
                What services are you interested in?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Primary Service Category *</Label>
                <RadioGroup
                  value={formData.serviceCategory}
                  onValueChange={(value) =>
                    handleSelectChange("serviceCategory", value)
                  }
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="web-development"
                      id="web-development"
                    />
                    <Label htmlFor="web-development">Web Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="content-writing"
                      id="content-writing"
                    />
                    <Label htmlFor="content-writing">Content Writing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="social-media" id="social-media" />
                    <Label htmlFor="social-media">
                      Social Media Management
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="digital-marketing"
                      id="digital-marketing"
                    />
                    <Label htmlFor="digital-marketing">Digital Marketing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="virtual-assistant"
                      id="virtual-assistant"
                    />
                    <Label htmlFor="virtual-assistant">Virtual Assistant</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Specific Services (Select all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="website-design"
                      checked={(formData.specificServices as string[]).includes(
                        "website-design",
                      )}
                      onCheckedChange={() =>
                        handleCheckboxChange("website-design")
                      }
                    />
                    <Label htmlFor="website-design">Website Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="e-commerce"
                      checked={(formData.specificServices as string[]).includes(
                        "e-commerce",
                      )}
                      onCheckedChange={() => handleCheckboxChange("e-commerce")}
                    />
                    <Label htmlFor="e-commerce">E-commerce Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="blog-writing"
                      checked={(formData.specificServices as string[]).includes(
                        "blog-writing",
                      )}
                      onCheckedChange={() =>
                        handleCheckboxChange("blog-writing")
                      }
                    />
                    <Label htmlFor="blog-writing">Blog Writing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="seo"
                      checked={(formData.specificServices as string[]).includes(
                        "seo",
                      )}
                      onCheckedChange={() => handleCheckboxChange("seo")}
                    />
                    <Label htmlFor="seo">SEO Optimization</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="social-content"
                      checked={(formData.specificServices as string[]).includes(
                        "social-content",
                      )}
                      onCheckedChange={() =>
                        handleCheckboxChange("social-content")
                      }
                    />
                    <Label htmlFor="social-content">Social Media Content</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="ppc"
                      checked={(formData.specificServices as string[]).includes(
                        "ppc",
                      )}
                      onCheckedChange={() => handleCheckboxChange("ppc")}
                    />
                    <Label htmlFor="ppc">PPC Advertising</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Tell us more about your project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectDescription">
                  Project Description *
                </Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Please describe your project, goals, and any specific requirements..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                <Select
                  value={formData.hearAboutUs}
                  onValueChange={(value) =>
                    handleSelectChange("hearAboutUs", value)
                  }
                >
                  <SelectTrigger id="hearAboutUs">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="referral">Referral</SelectItem>
                    <SelectItem value="advertisement">Advertisement</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </>
        );
      case 4:
        return (
          <>
            <CardHeader>
              <CardTitle>Budget & Timeline</CardTitle>
              <CardDescription>
                Help us understand your constraints
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Estimated Budget Range</Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => handleSelectChange("budget", value)}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="under-1000" id="under-1000" />
                    <Label htmlFor="under-1000">Under $1,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1000-5000" id="1000-5000" />
                    <Label htmlFor="1000-5000">$1,000 - $5,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5000-10000" id="5000-10000" />
                    <Label htmlFor="5000-10000">$5,000 - $10,000</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10000-plus" id="10000-plus" />
                    <Label htmlFor="10000-plus">$10,000+</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-sure" id="not-sure" />
                    <Label htmlFor="not-sure">Not sure yet</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Desired Timeline</Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleSelectChange("timeline", value)
                  }
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asap" id="asap" />
                    <Label htmlFor="asap">As soon as possible</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-month" id="1-month" />
                    <Label htmlFor="1-month">Within 1 month</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-3-months" id="1-3-months" />
                    <Label htmlFor="1-3-months">1-3 months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-plus-months" id="3-plus-months" />
                    <Label htmlFor="3-plus-months">3+ months</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="flexible" id="flexible" />
                    <Label htmlFor="flexible">Flexible</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </>
        );
      case 5:
        return (
          <>
            <CardHeader>
              <CardTitle>Submission Successful!</CardTitle>
              <CardDescription>Thank you for your inquiry</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                <p className="font-medium">
                  We've received your project details
                </p>
                <p className="mt-2">
                  Our team will review your information and get back to you
                  within 1-2 business days.
                </p>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  A confirmation email has been sent to {formData.email}.
                </p>
              </div>
            </CardContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="w-full bg-white">
        <form onSubmit={handleSubmit}>
          {renderStepContent()}
          <CardFooter className="flex justify-between border-t p-6">
            {step > 1 && step < 5 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            {step < 4 ? (
              <Button type="button" onClick={nextStep} className="ml-auto">
                Next
              </Button>
            ) : step === 4 ? (
              <Button type="submit" className="ml-auto">
                Submit Inquiry
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="ml-auto"
              >
                Return to Homepage
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Step {step} of {step < 5 ? 4 : 4}
        </p>
        <div className="w-full bg-gray-200 h-2 mt-2 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300 ease-in-out"
            style={{ width: `${(step < 5 ? step : 4) * 25}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
