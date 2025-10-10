import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github } from "lucide-react";
import { teamMembers } from "@/data/teamData";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="team">
      {/* Glowing Divider Above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Subtle Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Builders behind Augment Labs
          </p>
        </motion.div>

        {/* Team Grid - 3 Cards Centered */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center text-center hover:-translate-y-2">
                  {/* Avatar with Neon Ring */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
                      <img
                        src={member.avatar}
                        alt={`${member.name}, ${member.role}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {member.bio}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
