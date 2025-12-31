import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  {
    period: "Class 2",
    position: "2nd Position",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    period: "Class 3",
    position: "3rd Position",
    icon: Award,
    color: "text-amber-600",
  },
  {
    period: "Class 4",
    position: "1st Position",
    icon: Trophy,
    color: "text-primary",
  },
  {
    period: "Class 5",
    position: "1st Position",
    icon: Trophy,
    color: "text-primary",
  },
  {
    period: "Class 7",
    position: "1st Position (Whole School)",
    icon: Star,
    color: "text-primary",
    highlight: true,
  },
  {
    period: "Class 8",
    position: "1st Position",
    details: "Marks: 405/500",
    icon: Trophy,
    color: "text-primary",
  },
  {
    period: "Class 9",
    position: "2nd Position",
    details: "Marks: 453/505",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    period: "Class 10",
    position: "1st in Class, 3rd in School",
    details: "Marks: 1001/1100",
    icon: Trophy,
    color: "text-primary",
    highlight: true,
  },
  {
    period: "Class 12",
    position: "2nd in Class, 10th in College",
    details: "Marks: 1083/1200",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    period: "Semester 1",
    position: "2nd Position",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    period: "Semester 2",
    position: "2nd Position",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    period: "Semester 3",
    position: "2nd Position",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    period: "Semester 4",
    position: "2nd Position",
    icon: Medal,
    color: "text-gray-400",
  },
];

const specialAchievement = {
  title: "Essay Writing Competition",
  position: "3rd Position with Cash Prize",
  level: "Tehsil Level",
  year: "Class 5",
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            My Journey of Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mt-2">
            Academic Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Special Achievement Banner */}
        <div className="mb-12 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-6 md:p-8 rounded-2xl border border-primary/30 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 animate-pulse-gold">
            <Trophy className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-secondary-foreground mb-2">
            {specialAchievement.title}
          </h3>
          <p className="text-primary text-xl font-semibold mb-1">
            {specialAchievement.position}
          </p>
          <p className="text-secondary-foreground/70">
            {specialAchievement.level} • {specialAchievement.year}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-card p-5 rounded-xl border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                achievement.highlight
                  ? "border-primary shadow-gold"
                  : "border-border/50"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    achievement.highlight ? "bg-primary" : "bg-primary/10"
                  }`}
                >
                  <achievement.icon
                    className={`w-6 h-6 ${
                      achievement.highlight ? "text-primary-foreground" : achievement.color
                    }`}
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {achievement.period}
                  </p>
                  <p className="font-semibold text-foreground">
                    {achievement.position}
                  </p>
                  {achievement.details && (
                    <p className="text-sm text-primary mt-1">
                      {achievement.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-4xl font-heading font-bold text-primary mb-2">
              7
            </div>
            <p className="text-muted-foreground">1st Positions</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-4xl font-heading font-bold text-primary mb-2">
              6
            </div>
            <p className="text-muted-foreground">2nd Positions</p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border/50">
            <div className="text-4xl font-heading font-bold text-primary mb-2">
              90%+
            </div>
            <p className="text-muted-foreground">Consistent Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
