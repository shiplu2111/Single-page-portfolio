import { Code2, Palette, Rocket } from "lucide-react";
import { useScrollAnimation, useMultiScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const cards = useMultiScrollAnimation(3);
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Bringing designs to life with pixel-perfect attention to detail.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/30" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={`text-lg text-muted-foreground text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Dedicated and results-driven Full-stack Developer with expertise in Laravel and React, specializing in building responsive, scalable, and user-focused web applications. Proficient in modern frontend and backend technologies, API development/integration, and performance optimization. Skilled at creating secure, maintainable, and high-quality solutions with a strong commitment to continuous learning and innovation. Seeking to contribute technical expertise and creativity to a forward-thinking organization, driving impactful digital experiences and business growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={cards.setRef(index)}
                className={`bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-700 hover:shadow-lg hover:shadow-primary/10 ${cards.isVisible(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
