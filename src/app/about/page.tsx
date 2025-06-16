
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const skills = [
  "Python", "R", "SQL", "Google BigQuery", "Power BI", 
  "Qlik Sense", "Git & GitHub", "Dataiku", "HTML5 & CSS",
  "GitHub Actions", "CI/CD tools", "Machine Learning", "Computer Vision", "NLP"
];

const interests = [
  "Exploring new technologies", "Open-source contributions",
  "Photography", "Hiking & Nature", "Sci-Fi literature", "Opening things up to see what's inside them 🥲"
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
              src="/AmlanDas.jpg" 
              alt="Amlan Das - Profile Picture" 
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
              Hello! I'm Amlan Das, a data analyst with a passion for transforming complex data into actionable insights and building meaningful solutions. Currently based in Magdeburg, Germany , my fascination with technology began with a strong foundation in Statistics  and grew through my pursuit of Operations Research and Business Analytics at Otto-von-Guericke-University Magdeburg. This spark ignited a journey of continuous learning and a drive to build impactful digital experiences.
            </p>
            <p>
              My professional path has taken me through diverse environments, from automating ETL pipelines and building interactive dashboards at Heraeus Precious Metals GmbH & Co. KG  to conducting statistical analysis and improving data quality control at Factworks GmbH. These experiences have honed my skills in Python, SQL, and BI tools  and reinforced my commitment to turning data into solutions that support business outcomes. <br></br>
              My true passion lies in leveraging data's potential to uncover insights and build effective solutions. I thrive in environments that challenge me to grow and innovate, always seeking to leverage analytical rigor and creative problem-solving to drive value.
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
              When I'm not immersed in code or work, I find joy and inspiration in various activities. Some of my key interests include:
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
