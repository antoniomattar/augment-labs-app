import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${heroBackground})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
			</div>

			{/* Animated Particles Effect */}
			<div className="absolute inset-0 z-0">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute w-1 h-1 bg-primary rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.2, 0.8, 0.2],
						}}
						transition={{
							duration: 3 + Math.random() * 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-5xl mx-auto"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
					>
						<Sparkles className="w-4 h-4 text-primary" />
						<span className="text-sm font-medium text-primary">
							Innovation Meets Excellence
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
					>
						Empowering Businesses with{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
							Next-Gen Tech Solutions
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
					>
						From AI automation to cybersecurity — we build the
						digital future your business deserves
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<Button
							size="lg"
							onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
							className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary hover:shadow-glow-lg transition-all duration-300"
						>
							Get a Free Consultation
							<ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
							className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white transition-all duration-300"
						>
							Explore Our Services
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom Gradient Fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
		</section>
	);
};

export default Hero;
