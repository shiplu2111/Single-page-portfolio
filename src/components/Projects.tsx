import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Loader2 ,Info } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation, useMultiScrollAnimation } from "@/hooks/use-scroll-animation";
import { projects } from "@/data/projects";
import * as Tooltip from "@radix-ui/react-tooltip";
const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const projectCards = useMultiScrollAnimation(visibleCount);
  
  

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="py-20 md:py-32 bg-card/30" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-lg text-muted-foreground text-center mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Some of my recent work showcasing my skills and creativity
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <Card
                key={index}
                ref={projectCards.setRef(index)}
                className={`bg-card flex flex-col border-border hover:border-primary/50 transition-all duration-700 hover:shadow-lg hover:shadow-primary/10 overflow-hidden group ${projectCards.isVisible(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <div className="flex flex-col mt-auto">
                <CardContent  className="flex-1">
                  <div className="flex flex-wrap gap-2 ">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2 mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={
                        project.github && project.github !== "#" ? project.github : undefined
                      }
                      target={project.github && project.github !== "#" ? "_blank" : undefined}
                      rel={project.github && project.github !== "#" ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-1 ${
                        !project.github || project.github === "#" ? "opacity-50 cursor-not-allowed" : "hover:underline"
                      }`}
                      onClick={(e) => {
                        if (!project.github || project.github === "#") e.preventDefault();
                      }}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                 {project.login && (
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <Button variant="secondary" size="sm">
                          <Info size={16} />
                        </Button>
                      </Tooltip.Trigger>

                      <Tooltip.Content className="bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg">
                        <div>Email: {project.login.email}</div>
                        <div>Password: {project.login.password}</div>
                        <Tooltip.Arrow className="fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Root>
                  )}
                 
                </CardFooter>
                </div>
              </Card>
            ))}
          </div>
            {!hasMore && (
           <p className="text-center text-muted-foreground mt-12 text-lg font-semibold animate-fade-in animate-bounce-slow">
                    
            <span className="flex items-center justify-center gap-4">More projects coming soon! <Loader2 className="animate-spin" /></span>
          </p>
            
            )}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setVisibleCount(prev => prev + 6);
                    setIsLoading(false);
                  }, 800);
                }}
                disabled={isLoading}
                className="animate-fade-in"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Loading...
                  </>
                ) : (
                  "View More Projects"
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
