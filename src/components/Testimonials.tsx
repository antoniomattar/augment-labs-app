import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc",
      content: "Augment Labs transformed our infrastructure with their cloud solutions. The team's expertise and dedication were outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, DataFlow Systems",
      content: "Their AI automation solutions cut our processing time by 70%. Exceptional service and innovative thinking throughout.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT, SecureBank",
      content: "The cybersecurity implementation was flawless. We now have peace of mind knowing our systems are protected by the best.",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from the businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full relative">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;