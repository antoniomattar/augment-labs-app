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
    name: "Alex Rivera",
    role: "Chief Technology Officer",
    bio: "Full-stack architect with 15+ years building scalable cloud systems.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Sarah Chen",
    role: "Head of AI & Automation",
    bio: "ML engineer specializing in enterprise automation and intelligent workflows.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Marcus Thompson",
    role: "Lead Security Engineer",
    bio: "Cybersecurity expert focused on zero-trust architectures and compliance.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];
