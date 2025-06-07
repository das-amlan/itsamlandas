
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  repoUrl?: string;
  tags?: string[];
  imageHint?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  imageUrl = "https://placehold.co/600x400.png", 
  projectUrl, 
  repoUrl,
  tags,
  imageHint = "technology project"
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-card">
      <CardHeader className="p-0">
        {imageUrl && (
          <div className="aspect-video relative w-full">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={imageHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl lg:text-2xl mb-2 text-primary">{title}</CardTitle>
        <CardDescription className="text-foreground/80 leading-relaxed mb-4 text-sm">
          {description}
        </CardDescription>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
              <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium">{tag}</span>
            ))}
          </div>
        )}
      </CardContent>
      {(projectUrl || repoUrl) && (
        <CardFooter className="p-6 pt-0 flex flex-wrap gap-3 justify-start">
          {projectUrl && (
            <Button asChild variant="outline" className="transition-colors duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent group">
              <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          )}
          {repoUrl && (
            <Button asChild variant="ghost" className="transition-colors duration-300 hover:bg-secondary group">
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
       {(!projectUrl && !repoUrl && !tags) && ( // Show if no links and no tags (implies very early placeholder)
         <CardFooter className="p-6 pt-0">
           <p className="text-sm text-muted-foreground">Details coming soon...</p>
         </CardFooter>
        )}
    </Card>
  );
}
