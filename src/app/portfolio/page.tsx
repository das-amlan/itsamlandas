
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import Image from 'next/image'; // For the "no projects" state

const projects = [
  {
    title: "AI-Powered Content Generator",
    description: "A web application utilizing generative AI to create engaging marketing copy and blog posts. Features a clean interface and real-time suggestions.",
    imageUrl: "https://placehold.co/600x400.png?t=ai-content",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "OpenAI API", "Vercel"],
    projectUrl: "#", // Replace with actual URL
    repoUrl: "#",   // Replace with actual URL
    imageHint: "artificial intelligence writing"
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "A comprehensive dashboard for an e-commerce platform, providing insights into sales, customer behavior, and inventory management.",
    imageUrl: "https://placehold.co/600x400.png?t=ecommerce-dashboard",
    tags: ["React", "Chart.js", "Node.js", "Express", "MongoDB"],
    projectUrl: "#",
    imageHint: "data analytics chart"
  },
  {
    title: "Task Management App Redesign",
    description: "Led the UX/UI redesign for a popular task management application, focusing on improving user flow and introducing new collaboration features.",
    imageUrl: "https://placehold.co/600x400.png?t=task-app",
    tags: ["UX Design", "UI Design", "Figma", "User Research", "Prototyping"],
    imageHint: "mobile app interface"
  },
  {
    title: "Community Forum Platform",
    description: "Developed a full-stack community forum platform with features like threaded discussions, user profiles, and moderation tools.",
    imageUrl: "https://placehold.co/600x400.png?t=forum-platform",
    tags: ["Python", "Django", "PostgreSQL", "Bootstrap", "Heroku"],
    repoUrl: "#",
    imageHint: "social community network"
  },
];

// Set to empty array to test the "no projects" state:
// const projects = [];

export default function PortfolioPage() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <header className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
          My Portfolio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A selection of projects that showcase my skills, creativity, and passion for building innovative solutions.
        </p>
      </header>
      
      {projects.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              projectUrl={project.projectUrl}
              repoUrl={project.repoUrl}
              imageHint={project.imageHint}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <Image 
            src="https://placehold.co/400x300.png" 
            alt="No projects yet" 
            width={350} 
            height={260} 
            className="mx-auto rounded-lg shadow-md mb-8 opacity-75"
            data-ai-hint="empty box" 
          />
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">
            Portfolio Under Construction
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            I'm currently curating my best work to share with you. Please check back soon to see my latest projects!
          </p>
        </div>
      )}
    </div>
  );
}
