export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  github?: string;
}

export const teamMembers: TeamMember[] = [
	{
		name: "Joe FARAH",
		role: "Technical Consultant",
		bio: "LAU CS Graduate with 2+ years of experience as a Technical Consultant between Murex and JobDiva, specializing in fintech solutions.",
		linkedin: "https://linkedin.com/in/joe-farah",
		github: "https://github.com/Joe-Farah",
	},
	{
		name: "Jayson MAREST",
		role: "Head of Automation & Engineering",
		bio: "EPFL graduate and engineer specializing in optimization, automation, and scalable systems.",
		linkedin: "https://linkedin.com/in/jaysonmarest",
		github: "https://github.com/jayson-marest",
	},
	{
		name: "Antonio MATTAR",
		role: "Software Engineer",
		bio: "ENSIMAG graduate and software engineer focused on building reliable, scalable web applications and infrastructure.",
		linkedin: "https://linkedin.com/in/antoniomattar",
		github: "https://github.com/antoniomattar",
	},
];
