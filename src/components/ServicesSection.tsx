import { Palette, Server, ArrowRight, BookOpen, Linkedin, Github } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Web Designing',
    description:
      'Crafting user-centered, visually appealing, and responsive web interfaces that provide excellent user experiences across all devices.',
    features: ['Responsive Design', 'UI/UX Focused', 'Modern Aesthetics'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Building efficient, secure, and scalable server-side architectures using modern technologies and best practices.',
    features: ['API Development', 'Database Design', 'Security First'],
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Actively learning new technologies and improving skills through hands-on practice, projects, and online resources.',
    features: ['Self-Motivated', 'Hands-on Projects', 'Skill Growth'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services I offer to help bring your digital ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group card-elevated p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                >
                  Get Started <ArrowRight size={18} />
                </a>
              </div>
            );
          })}
        </div>

        {/* LinkedIn & GitHub Callout */}
        <div className="mt-16 text-center">
          <div className="card-glass p-6 rounded-2xl max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              🏆 Check out my <strong className="text-foreground">achievements & certifications</strong> on LinkedIn and explore my <strong className="text-foreground">projects</strong> on GitHub!
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/harichandana-thoopukari/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 font-medium"
              >
                <Linkedin size={18} />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/HarichandanaThoopukari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card hover:bg-muted transition-all duration-300 font-medium"
              >
                <Github size={18} />
                GitHub Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
