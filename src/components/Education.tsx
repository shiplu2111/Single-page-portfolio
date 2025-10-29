import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation, useMultiScrollAnimation } from "@/hooks/use-scroll-animation";
import { education ,trainings} from "@/data/education";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  const educationItems = useMultiScrollAnimation(6);

 

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Training</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and professional training
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl lg:max-w-5xl mx-auto">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  ref={educationItems.setRef(index)}
                  className={`transition-all duration-700 delay-${index * 100} ${
                    educationItems.isVisible(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <Card className="h-full  hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          <p className="text-sm text-primary mt-1">{edu.period}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training & Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Training & Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {trainings.map((training, index) => {
              const Icon = training.icon;
              const actualIndex = education.length + index;
              return (
                <div
                  key={index}
                  ref={educationItems.setRef(actualIndex)}
                  className={`transition-all duration-700 delay-${index * 100} ${
                    educationItems.isVisible(actualIndex)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{training.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{training.provider}</p>
                          <p className="text-sm text-primary mt-1">{training.period}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{training.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
