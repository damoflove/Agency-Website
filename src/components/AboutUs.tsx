import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Users, Zap } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing and web development, Sarah founded Nexa Digital Hub to help businesses achieve their full online potential.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      bio: "Michael brings 10+ years of expertise in full-stack development, specializing in React, Node.js, and modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
    },
    {
      name: "Jessica Williams",
      role: "Creative Director",
      bio: "With a background in graphic design and UX/UI, Jessica ensures all our projects are visually stunning and user-friendly.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    },
    {
      name: "David Rodriguez",
      role: "Marketing Strategist",
      bio: "David specializes in creating data-driven marketing strategies that deliver measurable results for our clients.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering high-quality solutions that exceed expectations.",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: "Innovation",
      description:
        "We embrace new technologies and creative approaches to solve complex digital challenges.",
      icon: <Zap className="h-10 w-10 text-primary" />,
    },
    {
      title: "Reliability",
      description:
        "We deliver on our promises, meeting deadlines and maintaining transparent communication.",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: "Collaboration",
      description:
        "We work closely with our clients, treating their goals as our own and building lasting partnerships.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Nexa Digital Hub</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're a team of digital experts passionate about helping
              businesses thrive in the online world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, Nexa Digital Hub began with a simple mission:
                to provide businesses with high-quality digital solutions that
                drive real results. What started as a small team of passionate
                digital experts has grown into a full-service agency serving
                clients across multiple industries.
              </p>
              <p className="text-gray-600 mb-4">
                We noticed that many businesses were struggling to navigate the
                increasingly complex digital landscape. They were either working
                with multiple vendors who didn't communicate with each other, or
                they were settling for one-size-fits-all solutions that didn't
                address their unique needs.
              </p>
              <p className="text-gray-600 mb-6">
                That's why we built Nexa Digital Hub as an integrated agency
                that combines technical expertise with strategic thinking. We
                bring together web development, content creation, and digital
                marketing under one roof to deliver cohesive solutions that help
                our clients achieve their business goals.
              </p>
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Work With Us <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Nexa Digital Hub team"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">5+ Years</p>
                <p>of digital excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Nexa Digital Hub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented people behind Nexa Digital Hub's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's work together to create digital solutions that help your
            business grow.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
