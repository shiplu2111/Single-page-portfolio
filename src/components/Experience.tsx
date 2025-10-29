import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useScrollAnimation, useMultiScrollAnimation } from "@/hooks/use-scroll-animation";
import { experiences } from "@/data/experiences";
const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experienceItems = useMultiScrollAnimation(4);

  

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and career progression
          </p>
        </div>

        <div className="max-w-fit lg:max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={experienceItems.setRef(index)}
              className={`transition-all duration-700 delay-${index * 100} ${
                experienceItems.isVisible(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="hover:shadow-lg transition-shadow w-screen-sm lg:w-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <p className="font-semibold text-foreground">{exp.company}</p>
                        <span className="hidden sm:inline">•</span>
                        <p className="text-sm">{exp.period}</p>
                        <span className="hidden sm:inline">•</span>
                        <p className="text-sm">{exp.location}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
