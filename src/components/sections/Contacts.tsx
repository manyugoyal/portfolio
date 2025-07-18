import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Manyu,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:manyugoyal123@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
    
    toast({
      title: "Email client opened!",
      description: "Your message has been prepared in your default email client.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manyugoyal123@gmail.com",
      href: "mailto:manyugoyal123@gmail.com",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manyugoyal",
      href: "https://linkedin.com/in/manyugoyal",
      color: "secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/manyugoyal",
      href: "https://github.com/manyugoyal",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "NIT Jalandhar, Punjab",
      href: "#",
      color: "neon-green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      primary: "text-primary border-primary hover:bg-primary hover:text-primary-foreground",
      secondary: "text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground",
      accent: "text-accent border-accent hover:bg-accent hover:text-accent-foreground",
      "neon-green": "text-neon-green border-neon-green hover:bg-neon-green hover:text-background"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section id="contact" className="py-20 bg-muted/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to collaborate on innovative projects? Let's connect and build something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gradient-secondary mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                or just having a chat about technology. Feel free to reach out through 
                any of the channels below!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${getColorClasses(info.color)}`}
                  >
                    <IconComponent className="h-6 w-6 mr-4" />
                    <div>
                      <div className="font-semibold">{info.label}</div>
                      <div className="text-sm opacity-75">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glow">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/20 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground"
                    placeholder="Ex:(abcde)"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted/20 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground"
                    placeholder="abc@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-muted/20 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted/20 border border-muted-foreground/20 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-foreground resize-none"
                  placeholder="Let's discuss your project idea..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-neon flex items-center justify-center gap-3"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;