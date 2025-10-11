export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  github?: string;
}

export const teamMembers: TeamMember[] = [
	{
		name: "Joe FARAH",
		role: "Technical Consultant",
		bio: "LAU CS Graduate with 2+ years of experience as a Technical Consultant between Murex and JobDiva, specializing in fintech solutions.",
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joe",
		linkedin: "https://linkedin.com/in/joefarah",
		github: "https://github.com/Joe-Farah",
	},
	{
		name: "Jayson MAREST",
		role: "Head of AI & Automation",
		bio: "EPFL graduate and ML engineer specializing in modelization, optimization, and AI-driven solutions.",
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jason",
		linkedin: "https://linkedin.com/in/jaysonmarest",
		github: "https://github.com/jayson-marest",
	},
	{
		name: "Antonio MATTAR",
		role: "Software Engineer",
		bio: "ENSIMAG graduate and software engineer with a passion for building scalable web applications, specializing in ML/DevOps.",
		avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Antonio",
		linkedin: "https://linkedin.com/in/antoniomattar",
		github: "https://github.com/antoniomattar",
	},
];
