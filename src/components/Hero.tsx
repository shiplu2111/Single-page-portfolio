
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Send } from "lucide-react";
import SkillsOrbit from "./SkillsOrbit";
import {hero} from "@/data/hero";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

const Hero = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Simulate download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = hero?.cvLink;
      link.download = `${hero?.name}'s CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setDownloadProgress(0);
      
      toast({
        title: "Download Complete!",
        description: "Your CV has been downloaded successfully.",
      });
    }, 1000);
  };
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[150px] md:pt-0">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Animated Skills Orbit */}
      <SkillsOrbit />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile Photo */}
            <div className="flex justify-center md:justify-end order-1 md:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={hero.heroImage}
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-semibold animate-bounce">
                  {hero?.jobStatus}
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-center md:text-left space-y-6 order-2 md:order-2">
              <div className="space-y-2">
                <p className="text-primary font-semibold text-lg tracking-wide uppercase">{hero?.welcomeMessage}</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  Hi, I'm <br />
                  <span className="gradient-text">{hero?.name}</span>
                </h1>
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                {hero?.title}
                <br />({hero?.subtitle})
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {hero?.description}  </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
                <Button variant="hero" size="lg" asChild className="group">
                  <a href="#projects" className="gap-2">
                    {hero?.myProjects} 
                    <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#contact">
                    {hero?.contactMe}
                     <Send size={18} className="group-hover:translate-y-1 transition-transform" />
                
                  </a>
                </Button>
                {/* <Button variant="secondary" size="lg" asChild>
                  <a href={hero?.cvLink} download={`${hero?.name}'s CV.pdf`} className="gap-2">
                    <Download size={20} />
                    {hero?.downloadCV}
                  </a>
                </Button> */}
                 <Button 
                    variant="secondary" 
                    size="lg" 
                    onClick={handleDownloadCV}
                    disabled={isDownloading}
                    className="gap-2 w-full"
                  >
                    <Download size={20} />
                    {isDownloading ? "Downloading..." : "CV"}
                  </Button>
                  {isDownloading && (
                    <div className="absolute -bottom-2 left-0 right-0 px-2">
                      <Progress value={downloadProgress} className="h-1" />
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </div>
    </section>
  );
};

export default Hero;
