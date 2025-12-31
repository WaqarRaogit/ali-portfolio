import { Briefcase, Users, Clock, BookOpen } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Professional Background
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Teaching Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border/50">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    Subject Teacher
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Part-Time
                  </span>
                </div>

                <p className="text-lg text-muted-foreground mb-6">
                  Private Academies & Home Tuitions
                </p>

                {/* Experience Details */}
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">5+ Years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Students</p>
                      <p className="font-semibold text-foreground">Multiple Batches</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Subject</p>
                      <p className="font-semibold text-foreground">Mathematics</p>
                    </div>
                  </div>
                </div>

                {/* Teaching History */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Teaching History:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Grades 9–10 (2 Years)</span>
                      <span className="text-sm text-primary">2022 – 2024</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>1st Year Intermediate (1 Year)</span>
                      <span className="text-sm text-primary">2023 – 2024</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>Below Grade 9 (2 Years)</span>
                      <span className="text-sm text-primary">2020 – 2022</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
