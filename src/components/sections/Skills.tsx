import { Code, Database, Cloud, Shield, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: ["C++", , "Python", "JavaScript", "SQL", "HTML/CSS"]
    },
    
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "accent",
      skills: ["Git", "Docker", "VS Code", "Firebase"]
    },
    {
      title: "Operating Systems",
      icon: Cpu,
      color: "neon-green",
      skills: ["Linux", "Kali Linux", "Windows", "Ubuntu"]
    },
    {
      title: "Database & Cloud",
      icon: Cloud,
      color: "neon-pink",
      skills: ["MongoDB", "Firebase", "MySQL", "Google Cloud", "MongoDB Atlas"]
    },
    {
      title: "Core Concepts",
      icon: Shield,
      color: "neon-cyan",
      skills: ["DSA", "OS", "CN", "DBMS", "OOP", "DAA", "Cybersecurity"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      primary: "border-primary text-primary",
      secondary: "border-secondary text-secondary",
      accent: "border-accent text-accent",
      "neon-green": "border-neon-green text-neon-green",
      "neon-pink": "border-neon-pink text-neon-pink",
      "neon-cyan": "border-neon-cyan text-neon-cyan"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Mastering diverse technologies to build innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="card-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex items-center mb-6 ${getColorClasses(category.color)}`}>
                  <div className={`p-3 rounded-lg border ${getColorClasses(category.color)} mr-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="skill-chip"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Skills Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gradient-secondary mb-8">
            Special Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "AI Integration",
              "Full-Stack Development",
              "Cloud Computing",
              "Cybersecurity Basics",
              "Problem Solving",
              "System Design"
            ].map((expertise) => (
              <div
                key={expertise}
                className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-foreground font-medium hover:scale-105 transition-transform duration-300"
              >
                {expertise}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;