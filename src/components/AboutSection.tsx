import { User, Calendar, Heart, Globe } from "lucide-react";

const personalInfo = [
  { icon: User, label: "Father's Name", value: "Pervez Akhtar" },
  { icon: Calendar, label: "Date of Birth", value: "June 2, 2004" },
  { icon: Heart, label: "Religion", value: "Islam" },
  { icon: Globe, label: "Nationality", value: "Pakistani" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Get to Know Me
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am an analytical and detail-oriented Mathematics student with a strong 
              foundation in statistical modeling, data interpretation, and problem-solving. 
              Currently pursuing my Bachelor's degree at Bahauddin Zakariya University, Multan.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Skilled in <span className="text-primary font-medium">Python (Pandas, NumPy)</span>, 
              and <span className="text-primary font-medium">Excel</span> for data cleaning, 
              analysis, and visualization. Passionate about leveraging quantitative methods 
              to drive business decisions—particularly in FMCG supply chain optimization, 
              sales forecasting, and consumer insights.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over <span className="text-primary font-medium">5+ years of teaching experience</span> as 
              a Mathematics mentor, I have developed strong communication skills and 
              the ability to explain complex concepts in simple terms.
            </p>
          </div>

          {/* Personal Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {personalInfo.map((info, index) => (
              <div
                key={info.label}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
            Languages I Speak
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["English", "Urdu", "Punjabi"].map((lang) => (
              <span
                key={lang}
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
