import {skillOrbit} from "@/data/skillOrbit";
const SkillsOrbit = () => {


  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
      {/* Outer orbit ring */}
      <div className="relative w-[700px] h-[700px]">
        {/* Orbit path visualization */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-pulse" />
        <div className="absolute inset-8 rounded-full border border-primary/5" />
        
        {/* Animated skillOrbit */}
        {skillOrbit.map((skill, index) => {
          const Icon = skill.icon;
          const angle = (index * 360) / skillOrbit.length;
          
          return (
            <div
              key={skill.name}
              className="absolute top-1/2 left-1/2 w-0 h-0 animate-orbit"
              style={{
                animationDelay: skill.delay,
              }}
            >
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateX(250px) rotate(-${angle}deg)`,
                }}
              >
                <div className="relative group pointer-events-auto">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-300" />
                  
                  {/* Skill icon container */}
                  <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-full p-4 shadow-lg group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  
                  {/* Skill name tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-lg">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Center pulse effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-primary/30 rounded-full animate-ping" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkillsOrbit;
