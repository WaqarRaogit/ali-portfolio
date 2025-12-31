import { Code, Database, BarChart3, Brain, FileCode, Terminal, GitBranch, Calculator } from "lucide-react";

const technicalSkills = [
  { name: "Python Programming", level: 90, icon: Code },
  { name: "Data Wrangling", level: 85, icon: Database },
  { name: "Statistical Analysis", level: 88, icon: BarChart3 },
  { name: "Machine Learning", level: 75, icon: Brain },
  { name: "HTML & Web Basics", level: 70, icon: FileCode },
  { name: "Mathematical Reasoning", level: 95, icon: Calculator },
];

const tools = [
  { name: "Microsoft Excel", icon: BarChart3 },
  { name: "Anaconda", icon: Terminal },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "VS Code", icon: Code },
  { name: "MATLAB", icon: Calculator },
  { name: "Maple", icon: Calculator },
  { name: "GPT Notebook", icon: Brain },
  { name: "MS PowerPoint", icon: FileCode },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Critical Thinking",
  "Team Collaboration",
  "Time Management",
  "Adaptability",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            What I Can Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              Technical Skills
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-gold-light rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Applications */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              Tools & Applications
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-card p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-card transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-full font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
