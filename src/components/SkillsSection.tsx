import { Code, Database, Cloud, Brain, Server, Terminal, Lightbulb, Cpu } from 'lucide-react';

const technicalSkills = [
  { name: 'C', icon: Terminal },
  { name: 'Python', icon: Code },
  { name: 'HTML/CSS', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'SQL', icon: Database },
  { name: 'Operating Systems', icon: Cpu },
  { name: 'Cloud & AI Engineering', icon: Cloud },
  { name: 'Prompt Engineering', icon: Brain },
];

const coreStrengths = [
  { name: 'Problem Solving', icon: Lightbulb, description: 'Analytical approach to complex challenges' },
  { name: 'Backend Development', icon: Server, description: 'Building robust server-side solutions' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A combination of technical expertise and core strengths that drive my development work
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {technicalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="card-glass p-5 rounded-xl text-center hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-medium text-foreground">{skill.name}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Strengths */}
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
            Core Strengths
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {coreStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={strength.name}
                  className="card-elevated p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-foreground mb-1">
                        {strength.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{strength.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
