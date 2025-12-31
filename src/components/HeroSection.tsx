import { Mail, Phone, MapPin, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 py-20">
        {/* Profile Image */}
        <div className="relative animate-fade-in-up">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-gold">
            <img
              src={profileImage}
              alt="Ali Faraz - Data Analyst & Python Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse-gold">
            <span className="text-primary-foreground font-heading font-bold text-xl">AF</span>
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in-down">
            Welcome to my Portfolio
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-foreground mb-4 animate-fade-in-up animation-delay-100">
            Ali Faraz
          </h1>
          
          <h2 className="text-xl md:text-2xl font-body font-medium text-primary mb-6 animate-fade-in-up animation-delay-200">
            Data Analyst & Python Developer
          </h2>
          
          <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-8 animate-fade-in-up animation-delay-300">
            Mathematics student with expertise in statistical modeling, data interpretation, 
            and problem-solving. Passionate about leveraging quantitative methods to drive 
            business decisions and provide valuable insights.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up animation-delay-400">
            <a
              href="mailto:alifaraz8995@gmail.com"
              className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">alifaraz8995@gmail.com</span>
            </a>
            <a
              href="tel:+923412179592"
              className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">0341-2179592</span>
            </a>
            <span className="flex items-center gap-2 text-secondary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Khanewal, Pakistan</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-500">
            <Button
              size="lg"
              className="bg-primary hover:bg-gold-dark text-primary-foreground shadow-gold hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={scrollToAbout}
            >
              Explore More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-foreground/50 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
