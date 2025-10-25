import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Shield } from "lucide-react";

const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const features = [
		{
			icon: Target,
			title: "Results-Focused",
			description:
				"We measure success by the impact our work has on your business",
		},
		{
			icon: Zap,
			title: "Built for Growth",
			description:
				"Systems designed to scale with your business as it evolves",
		},
		{
			icon: Shield,
			title: "Security First",
			description:
				"Every solution built with security and reliability as core priorities",
		},
	];

	return (
		<section ref={ref} className="py-24 relative overflow-hidden">
			{/* Glowing Divider Line */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						About <span className="text-primary">Nabta Labs</span>
					</h2>
					<p className="text-lg text-muted-foreground leading-relaxed">
						We build software and systems that help businesses run
						better. Our team works with you to understand your
						challenges, then creates practical solutions that make a
						real difference — whether that's a new web platform,
						stronger security, or streamlined operations.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="relative group"
						>
							<div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
								<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:shadow-glow-primary transition-all duration-300">
									<feature.icon className="w-7 h-7 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-3">
									{feature.title}
								</h3>
								<p className="text-muted-foreground">
									{feature.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
