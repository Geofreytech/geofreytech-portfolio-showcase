
import { useState, useEffect } from "react";
import { Github, Mail, Linkedin, ExternalLink, Code, Database, Smartphone, Globe, Users, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "WhatsApp Automation Bot",
      description: "Intelligent WhatsApp automation system for business communications and customer support workflows.",
      icon: <Smartphone className="w-6 h-6" />,
      tech: ["PHP", "Laravel", "APIs", "Automation"],
      github: "https://github.com/Geofreytech",
      featured: true
    },
    {
      title: "Student Management System",
      description: "Comprehensive platform for managing student records, enrollment, and academic progress tracking.",
      icon: <Users className="w-6 h-6" />,
      tech: ["Laravel", "MySQL", "PHP", "Bootstrap"],
      github: "https://github.com/Geofreytech",
      featured: true
    },
    {
      title: "GlobalPay Platform",
      description: "Worldwide payment processing platform with multi-currency support and secure transactions.",
      icon: <Globe className="w-6 h-6" />,
      tech: ["PHP", "Payment APIs", "Laravel", "Security"],
      github: "https://github.com/Geofreytech",
      featured: true
    },
    {
      title: "PM Construction Billing",
      description: "Advanced billing and project management system for construction companies and contractors.",
      icon: <CreditCard className="w-6 h-6" />,
      tech: ["Laravel", "MySQL", "Billing APIs", "PHP"],
      github: "https://github.com/Geofreytech",
      featured: false
    },
    {
      title: "E-commerce Billing API",
      description: "Robust API solution for e-commerce platforms with integrated M-Pesa payment processing.",
      icon: <Code className="w-6 h-6" />,
      tech: ["PHP", "M-Pesa API", "Laravel", "REST API"],
      github: "https://github.com/Geofreytech",
      featured: false
    },
    {
      title: "Database Management Tools",
      description: "Custom database management and optimization tools for enterprise applications.",
      icon: <Database className="w-6 h-6" />,
      tech: ["MySQL", "PHP", "Laravel", "Optimization"],
      github: "https://github.com/Geofreytech",
      featured: false
    }
  ];

  const skills = [
    { name: "Laravel", level: 95, color: "bg-red-500" },
    { name: "PHP", level: 92, color: "bg-blue-600" },
    { name: "MySQL", level: 88, color: "bg-orange-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "React", level: 80, color: "bg-cyan-500" },
    { name: "M-Pesa APIs", level: 90, color: "bg-green-600" },
    { name: "REST APIs", level: 93, color: "bg-purple-500" },
    { name: "Git & GitHub", level: 87, color: "bg-gray-700" }
  ];

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(120,119,198,0.1)_50%,transparent_70%)]"></div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mb-8 shadow-2xl">
              <span className="text-4xl font-bold text-white">GM</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Geofrey Mwas
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
            Full-Stack Developer & System Architect
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building scalable systems, APIs, and automation tools using Laravel, PHP, and modern web technologies. 
            Specializing in payment integrations, business automation, and enterprise solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-8 py-3 text-lg font-medium transition-all duration-300"
              onClick={() => window.open('https://github.com/Geofreytech', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub Profile
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with a strong focus on backend systems and API development. 
                My expertise lies in creating robust, scalable solutions using Laravel and PHP, with extensive 
                experience in payment system integrations, particularly M-Pesa APIs.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                From WhatsApp automation bots to comprehensive student management systems, I enjoy building 
                tools that solve real-world problems and improve business processes. I'm constantly exploring 
                new technologies and best practices to deliver efficient, secure, and maintainable code.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solving', 'System Design', 'API Development', 'Payment Integration'].map((trait) => (
                  <Badge key={trait} variant="secondary" className="bg-slate-700 text-slate-200 px-3 py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Core Expertise</h3>
              <div className="space-y-4">
                {skills.slice(0, 4).map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Projects Button */}
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3"
              onClick={() => window.open('https://github.com/Geofreytech?tab=repositories', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-slate-300">{skill.name}</span>
                  <span className="text-slate-400 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Interested in collaborating on a project or discussing opportunities? 
            I'm always open to connecting with fellow developers and potential clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('mailto:geofrey@example.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3 text-lg font-medium"
              onClick={() => window.open('https://github.com/Geofreytech', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 px-8 py-3 text-lg font-medium"
              onClick={() => window.open('https://linkedin.com/in/geofrey-mwas', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Geofrey Mwas. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
