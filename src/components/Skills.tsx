import { useScrollAnimation, useMultiScrollAnimation } from "@/hooks/use-scroll-animation";
import { skills } from "@/data/skills";
const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillItems = useMultiScrollAnimation(8);
  
 

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className={`text-lg text-muted-foreground text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Technologies and tools I work with to build amazing web experiences
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={skillItems.setRef(index)}
                className={`space-y-2 transition-all duration-700 ${skillItems.isVisible(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: skillItems.isVisible(index) ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
