import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import profilePicture from '../../assets/profile-picture.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 animated-bg">
      <div className="section-container">
        <div className="text-center space-y-8">
          {/* Profile Picture */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow opacity-75"></div>
            <img
              src={profilePicture}
              alt="Manyu Goyal"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary/50 shadow-lg animate-float"
            />
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient">
              Manyu Goyal
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary font-semibold">
              Technology Enthusiast & Problem Solver
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Adapting to diverse tech stacks to build smart, scalable solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 my-8">
            <a
              href="mailto:manyugoyal123@gmail.com"
              className="p-3 rounded-full bg-muted/30 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/manyugoyal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 border border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/manyugoyal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="btn-neon group flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="btn-neon-secondary group flex items-center gap-2"
            >
              Contact Me
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;