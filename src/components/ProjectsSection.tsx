import { ExternalLink, Github, Users, Lightbulb, Target } from 'lucide-react';

const projects = [
  {
    title: 'Healthbot-AI',
    event: 'Smart India Hackathon 2025',
    description:
      'A multilingual AI-powered chatbot designed to educate rural and semi-urban communities about preventive healthcare, symptoms, and vaccination schedules.',
    problem: 'Lack of accessible healthcare information in rural areas.',
    solution: 'Developed a multilingual chatbot offering accurate, localized health guidance.',
    role: 'Backend Developer & Presenter — handled core backend logic, data integration, and presentation.',
    impact:
      'Demonstrated at SIH 2025, showcasing potential to improve healthcare access for underserved populations.',
    technologies: ['Python', 'AI/ML', 'NLP', 'API Integration'],
    github: 'https://github.com/HarichandanaThoopukari/my-projects/tree/main/heaIthbotprojectgithub',
    featured: true,
  },
  {
    title: 'Stock Market Analysis',
    event: 'Denovate Hack, Hyderabad',
    description:
      'A web platform providing actionable financial insights and portfolio advice with real-time stock data integration.',
    features: [
      'User-friendly UI for entering portfolios',
      'Real-time stock data integration via Pathway',
      'Automated billing using Flexprice',
      'Usage tracking and plain-English analysis output',
    ],
    role: 'Backend Developer — implemented data processing logic and API integrations.',
    technologies: ['JavaScript', 'API Integration', 'Pathway', 'Flexprice'],
    github: 'https://github.com/HarichandanaThoopukari/my-projects/tree/main/stockmarketAnalysisproject',
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work from hackathons and academic projects
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-elevated rounded-2xl border border-border overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium mb-3">
                      {project.event}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {project.problem && (
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <Target className="text-destructive" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">Problem</h4>
                        <p className="text-muted-foreground text-sm">{project.problem}</p>
                      </div>
                    </div>
                  )}
                  {project.solution && (
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">Solution</h4>
                        <p className="text-muted-foreground text-sm">{project.solution}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Features (for Stock Market Project) */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3">Key Features</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Role */}
                <div className="flex gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Users className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">My Role</h4>
                    <p className="text-muted-foreground text-sm">{project.role}</p>
                  </div>
                </div>

                {/* Impact (if exists) */}
                {project.impact && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                    <h4 className="font-semibold text-primary text-sm mb-1">Impact</h4>
                    <p className="text-muted-foreground text-sm">{project.impact}</p>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
