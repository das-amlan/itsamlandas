"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, QuoteIcon } from 'lucide-react'; // Added QuoteIcon for potential use
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center py-10 md:py-16 lg:py-24">
      <section className="w-full max-w-4xl mb-16 md:mb-24">
        <div className="mb-8">
            <Image 
                src="/AmlanDasHome.JPG" 
                alt="Amlan Das" 
                width={128} 
                height={128} 
                className="rounded-full shadow-lg mx-auto border-4 border-background"
                data-ai-hint="abstract avatar"
            />
        </div>
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-text-bg-change">
          Amlan Das
        </h1>
        <style jsx global>{`
          @keyframes text-bg-change {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-text-bg-change {
            background-size: 200% 200%;
            animation: text-bg-change 5s ease infinite;
          }
        `}</style>
        <p className="font-headline text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10">
        Data Storyteller <span className="text-accent mx-1">|</span> Code & Curiosity <span className="text-accent mx-1">|</span> Continuous Learner
        </p>
        <Button asChild size="lg" className="group transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-accent hover:text-accent-foreground transform hover:scale-105">
          <Link href="/portfolio">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>

      <section className="w-full max-w-3xl p-8 bg-card rounded-xl shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-8 w-8 text-accent mr-3" />
          <h2 className="font-headline text-3xl font-semibold text-primary">Welcome!</h2>
        </div>
        <p className="text-lg text-foreground/80 leading-relaxed text-center">
          Hi, I'm Amlan Das, a data analyst with a knack for turning complex data into clear solutions. Beyond the numbers, I'm passionate about exploring new tech, coding, and diving into the worlds of science fiction, photography, and cultural discovery. This is my personal space to showcase my journey, projects, and evolving skills. I'm excited to share what I've been working on. <br></br>
          Feel free to look around and connect!
        </p>
      </section>

      <section className="w-full max-w-2xl mt-16 md:mt-24 text-center">
        <figure>
          <blockquote className="font-headline text-3xl md:text-4xl text-primary italic mb-4 relative px-8">
            <QuoteIcon className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 h-8 w-8 text-accent opacity-50" />
            Stay hungry. Stay foolish.
            <QuoteIcon className="absolute bottom-0 right-0 transform translate-x-2 translate-y-2 h-8 w-8 text-accent opacity-50 scale-x-[-1] scale-y-[-1]" />
          </blockquote>
          <figcaption className="text-lg text-muted-foreground">
            - Steve Jobs
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
