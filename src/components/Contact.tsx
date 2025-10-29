import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useScrollAnimation, useMultiScrollAnimation } from "@/hooks/use-scroll-animation";
import { socials } from "@/data/contact";
const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const socialButtons = useMultiScrollAnimation(4);
  

  return (
    <section id="contact" className="py-20 md:py-32" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className={`text-lg text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socials.map((social, index) => (
              <div key={index} ref={socialButtons.setRef(index)}>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className={`group transition-all duration-700 ${socialButtons.isVisible(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <social.icon className={`transition-colors ${social.color}`} size={20} />
                  {social.name}
                </a>
              </Button>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shiplu. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
