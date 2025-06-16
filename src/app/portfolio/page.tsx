
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import Image from 'next/image'; // For the "no projects" state

const projects = [
  {
    title: "Apple Leaf Disease Detection using Deep Learning (CNN & Transfer Learning)",
    description: "Building and evaluating deep learning models for the detection and classification of various diseases in apple leaves using image data. The goal is to accurately identify different disease types to aid in early diagnosis and management.",
    imageUrl: "appleLeaves.png",
    tags: ["Python", "pytorch", "Computer Vision", "ResNet50", "CNN"],
    //projectUrl: "#", // Replace with actual URL
    repoUrl: "https://github.com/das-amlan/Apple-leaf-disease-detection",   // Replace with actual URL
    imageHint: "apple leaves disease"
  },
  {
    title: "VibeCheck - Text Summarizer & Sentiment Analyzer",
    description: "VibeCheck is a simple yet powerful web application that utilizes Natural Language Processing (NLP) to summarize text and analyze its sentiment.",
    imageUrl: "https://placehold.co/600x400.png?t=ecommerce-dashboard",
    tags: ["Streamlit", "Transformers", "DistilBERT", "NLP", "Sentiment Analysis"],
    projectUrl: "vibecheckImage.png",
    repoUrl: "https://github.com/das-amlan/VibeCheck---Text-Summarizer-Sentiment-Analyzer?tab=readme-ov-file",
    imageHint: "Summarizer & Sentiment Analyzer"
  },
  {
    title: "PDF Image Extractor",
    description: "This repository contains the Streamlit-based version of the PDF Image Extractor. It allows users to upload PDF files, extract images from them, and display the extracted images directly in the web application.",
    imageUrl: "https://placehold.co/600x400.png?t=task-app",
    tags: ["UX Design", "UI Design", "Figma", "User Research", "Prototyping"],
    projectUrl: "vibecheckImage.png",
    repoUrl: "https://github.com/das-amlan/VibeCheck---Text-Summarizer-Sentiment-Analyzer?tab=readme-ov-file",
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
