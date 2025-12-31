import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Mathematics",
    institution: "Bahauddin Zakariya University, Multan",
    year: "2021 - Present",
    details: "Currently pursuing with excellent academic performance",
    positions: [
      "2nd position in Semester 1",
      "2nd position in Semester 2",
      "2nd position in Semester 3",
      "2nd position in Semester 4",
    ],
  },
  {
    degree: "F.Sc Pre-Engineering",
    institution: "BISE Multan",
    year: "2019 - 2021",
    details: "Marks: 1083/1200",
    positions: ["2nd position in class", "10th position overall in college"],
  },
  {
    degree: "Matriculation (Science)",
    institution: "BISE Multan",
    year: "2017 - 2019",
    details: "Marks: 1001/1100",
    positions: ["1st position in class", "3rd position overall in school"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-cream">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            My Academic Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 z-10 shadow-gold" />

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{edu.year}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-sm">{edu.institution}</span>
                    </div>

                    <p className="text-primary font-medium mb-4">{edu.details}</p>

                    {/* Positions */}
                    <div className="space-y-2">
                      {edu.positions.map((position) => (
                        <div
                          key={position}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Award className="w-4 h-4 text-primary" />
                          <span>{position}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
