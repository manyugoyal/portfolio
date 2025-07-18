import { ExternalLink, Github, Zap, Users, Shield, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Trippy AI – Smart Trip Planner",
      description: "AI-powered travel itinerary generator with real-time trip storage and interactive UI",
      icon: Zap,
      color: "primary",
      technologies: ["React.js", "Firebase", "Google OAuth", "Tailwind CSS", "Gemini API"],
      features: [
        "AI-generated travel itineraries based on user prompts",
        "Google OAuth login authentication",
        "Real-time trip storage with Firebase Firestore",
        "Responsive UI with Framer Motion animations"
      ],
      github: "https://github.com/manyugoyal/aitravel",
      live: "https://trippyyyyy.vercel.app"
    },
    {
      title: "Gaming Hub Platform",
      description: "Centralized platform providing access to multiple online games with secure authentication",
      icon: Gamepad2,
      color: "secondary",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB Atlas", "JWT"],
      features: [
        "Access to multiple online games in one place",
        "JWT-based secure login system",
        "Scalable cloud database with MongoDB Atlas",
        "Interactive UI for smooth gameplay selection"
      ],
      github: "https://github.com/manyugoyal/GAMING-HUB",
      live: "https://manyug.vercel.app/"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      primary: "border-primary text-primary bg-primary/10",
      secondary: "border-secondary text-secondary bg-secondary/10",
      accent: "border-accent text-accent bg-accent/10"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Innovative solutions showcasing modern development practices and cutting-edge technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="card-glow group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${getColorClasses(project.color)} mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-muted/30 border border-muted-foreground/20 rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-accent mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-muted/20">
                  <a
                    href={project.github}
                    className="flex-1 btn-neon text-center flex items-center justify-center gap-2 py-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 btn-neon-secondary text-center flex items-center justify-center gap-2 py-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/manyugoyal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;