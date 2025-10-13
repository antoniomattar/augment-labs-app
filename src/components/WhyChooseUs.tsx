import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Lock, Palette, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: Lightbulb,
      title: "Practical Approach",
      description: "We focus on solutions that work, not the latest buzzwords",
    },
    {
      icon: Lock,
      title: "Trustworthy",
      description: "Clear communication, realistic timelines, and no surprises",
    },
    {
      icon: Palette,
      title: "Tailored Solutions",
      description: "Every business is different — we build what you actually need",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "We're here when you need us, with responsive support and maintenance",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">Augment Labs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe in building lasting partnerships based on trust, quality, and results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-primary group-hover:scale-110 transition-all duration-300">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;