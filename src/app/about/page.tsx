
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const skills = [
  "HTML5 & CSS3", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", 
  "Responsive Design", "Git & GitHub", "Problem Solving", "UI/UX Principles",
  "Figma (Basic)", "Node.js (Learning)", "API Integration"
];

const interests = [
  "Exploring new web technologies", "Minimalist design aesthetics", "Open-source contributions",
  "Photography", "Hiking & Nature", "Sci-Fi literature"
];

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <header className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A glimpse into my journey, skills, and what drives my passion for creating impactful digital experiences.
        </p>
      </header>
      
      <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="relative">
            <Image 
              src="https://placehold.co/400x450.png" 
              alt="Your Name - Profile Picture" 
              width={350} 
              height={390} // Adjusted for a slightly taller portrait
              className="rounded-xl shadow-2xl aspect-[10/11] object-cover transform transition-all duration-500 hover:scale-105"
              data-ai-hint="professional portrait"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-3 rounded-full shadow-lg">
              <CheckCircle size={28} />
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3 space-y-8 text-lg leading-relaxed text-foreground/90">
          <section>
            <h2 className="font-headline text-2xl lg:text-3xl font-semibold text-primary mb-4">My Story</h2>
            <p className="mb-4">
              Hello! I'm [Your Name], a [Your Role/Passion, e.g., detail-oriented web developer, creative problem-solver] currently based in [Your Location, optional]. 
              My fascination with technology and design began when [Briefly mention your origin story or a pivotal moment]. This spark ignited a journey of continuous learning and a drive to build meaningful solutions on the web.
            </p>
            <p>
              I am deeply passionate about crafting digital experiences that are not only visually appealing but also intuitive, accessible, and performant. I thrive in environments that challenge me to grow and innovate.
            </p>
          </section>
          
          <section>
            <h2 className="font-headline text-2xl lg:text-3xl font-semibold text-primary mb-4">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1 transition-transform duration-200 hover:scale-110 cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="font-headline text-2xl lg:text-3xl font-semibold text-primary mb-4">Interests & Hobbies</h2>
            <p className="mb-4">
              When I'm not immersed in code or design, I find joy and inspiration in various activities. Some of my key interests include:
            </p>
            <ul className="space-y-2">
              {interests.map(interest => (
                <li key={interest} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              These pursuits help me maintain a balanced perspective and often fuel my creativity in unexpected ways.
            </p>
          </section>
          <p className="pt-4 font-medium">
            I'm always excited to connect, collaborate, and explore new opportunities. Feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}
