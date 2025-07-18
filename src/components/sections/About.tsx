import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="card-glow">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Passion & Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm Manyu Goyal — a passionate tech enthusiast with a strong foundation in problem-solving and a deep interest in software development, cybersecurity, and AI. I thrive in dynamic environments, adapt quickly to new technologies, and am constantly building projects to sharpen my skills. I'm eager to contribute meaningfully to the IT industry while learning and growing every day..
              </p>
            </div>

            <div className="card-glow">
  <div className="flex items-center mb-4">
    <Award className="h-6 w-6 text-secondary mr-3" />
    <h3 className="text-xl font-semibold text-foreground">Achievements</h3>
  </div>
  <ul className="text-muted-foreground space-y-2">
    <li className="flex items-center">
      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
      Maintaining 8.16 CGPA at NIT Jalandhar
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
      Solved 500+ DSA problems across platforms
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
      Completed 10+ Cybersecurity modules (HTB Academy)
    </li>
  </ul>
</div>

          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="card-glow">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6 py-4">
                  <h4 className="text-lg font-semibold text-primary">
                    Bachelor of Technology
                  </h4>
                  <p className="text-secondary font-medium">
                    Information Technology
                  </p>
                  <p className="text-muted-foreground">
                    National Institute of Technology, Jalandhar
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-muted-foreground">2023 - 2027</span>
                    <span className="text-accent font-semibold">CGPA: 8.16</span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;