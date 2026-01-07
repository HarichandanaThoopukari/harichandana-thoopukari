import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile-photo.jpeg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 py-20 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <p className="text-primary font-medium mb-4 text-lg">Hello, I'm</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Harichandana
              <br />
              <span className="gradient-text">Thoopukari</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-display">
              Aspiring Software Engineer
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionate about AI & Web Development. A Computer Science student focused on 
              building efficient, user-focused applications and exploring emerging technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="btn-primary-gradient px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-border bg-card hover:bg-muted transition-colors font-medium inline-flex items-center justify-center gap-2"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/HarichandanaThoopukari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/harichandana-thoopukari/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:thoopukariharichandana@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="w-80 md:w-96 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl ring-4 ring-primary/10">
                <img
                  src={profileImage}
                  alt="Harichandana Thoopukari"
                  className="w-full h-full object-cover object-[center_60%]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/10 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primary/20 animate-float animation-delay-500" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
