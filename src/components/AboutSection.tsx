import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const educationData = [
  {
    institution: 'SR University',
    location: 'Hanamkonda, Warangal',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2024 – 2028',
    current: true,
  },
  {
    institution: 'Sree Chaitanya Junior College',
    location: 'Karimnagar',
    degree: 'Intermediate Education',
    period: '2021 – 2024',
    current: false,
  },
  {
    institution: 'TS Model School',
    location: 'Mulkanoor, Karimnagar',
    degree: 'Secondary Education',
    period: '2017 – 2021',
    current: false,
  },
  {
    institution: 'Kerala English Medium High School',
    location: 'Husnabad, Siddipet',
    degree: 'Primary Education',
    period: '2013 – 2017',
    current: false,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="animate-fade-in-up">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Passionate about Technology & Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate Computer Science Engineering student with a strong interest in 
              software development, problem-solving, and emerging technologies. I enjoy building 
              efficient, user-focused applications and exploring areas like web development, 
              data structures, algorithms, and AI.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a mindset for continuous learning, I aim to contribute to innovative projects 
              that make a real-world impact. Currently in my second year, I'm focused on backend 
              development, software engineering principles, and applying classroom learning to 
              real-world problem-solving through academic and hackathon projects.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap size={20} />
                <span className="font-medium">B.Tech CSE Student</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={20} />
                <span>Warangal, India</span>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Education Journey
            </h3>
            <div className="relative">
              <div className="timeline-line" />
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                    <div
                      className={`absolute left-2 w-4 h-4 rounded-full border-2 ${
                        edu.current
                          ? 'bg-primary border-primary'
                          : 'bg-background border-primary'
                      }`}
                    />
                    <div className="card-glass p-4 rounded-xl">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                          <p className="text-sm text-muted-foreground">{edu.degree}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                            <MapPin size={12} />
                            {edu.location}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-primary font-medium">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                      </div>
                      {edu.current && (
                        <span className="inline-block mt-2 text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          Currently Pursuing
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
