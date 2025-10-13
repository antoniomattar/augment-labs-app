import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Bot, Shield, Cloud, Database, Workflow } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web & Mobile Development",
      description: "Custom applications that work reliably across devices, built to meet your specific business needs.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Workflow,
      title: "Automation & Integration",
      description: "Connect your systems and automate repetitive tasks to free up your team for more important work.",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business from threats with security audits, monitoring, and compliance support.",
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate to the cloud or optimize your existing setup for better performance and lower costs.",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Make sense of your data with dashboards, reports, and tools that help you make better decisions.",
      gradient: "from-yellow-500/20 to-amber-500/20",
    },
    {
      icon: Bot,
      title: "Digital Transformation",
      description: "Modernize legacy systems and processes to help your business operate more efficiently.",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full range of services to help your business leverage technology effectively
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;