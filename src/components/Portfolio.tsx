import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "FinTech Platform",
      category: "Web & Mobile",
      description: "Real-time trading platform with AI-powered analytics",
      image: "bg-gradient-to-br from-blue-600/20 to-cyan-600/20",
    },
    {
      title: "Healthcare AI",
      category: "AI Automation",
      description: "Diagnostic assistance system using machine learning",
      image: "bg-gradient-to-br from-purple-600/20 to-pink-600/20",
    },
    {
      title: "E-Commerce Security",
      category: "Cybersecurity",
      description: "Enterprise security solution for retail platform",
      image: "bg-gradient-to-br from-red-600/20 to-orange-600/20",
    },
    {
      title: "Cloud Migration",
      category: "Cloud Infrastructure",
      description: "Multi-cloud architecture for global SaaS company",
      image: "bg-gradient-to-br from-green-600/20 to-emerald-600/20",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A showcase of innovative solutions we've delivered for our clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className={`h-64 ${project.image} flex items-end p-8 relative overflow-hidden`}>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 w-full">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                    <span className="text-sm font-medium">View Case Study</span>
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;