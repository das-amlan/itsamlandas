
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, Twitter, Dribbble } from 'lucide-react'; // Added Twitter, Dribbble as examples
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const emailAddress = "itsamlandas@gmail.com"; // Replace with your actual email
  
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/das-amlan/", icon: Linkedin, hint: "professional network" },
    { name: "GitHub", href: "https://github.com/das-amlan", icon: Github, hint: "code repository" },
    //{ name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter, hint: "social updates" },
    // { name: "Dribbble", href: "https://dribbble.com/yourusername", icon: Dribbble, hint: "design portfolio" },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20">
      <header className="text-center mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-3">
          Let's Connect
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.
        </p>
      </header>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex justify-center">
            <Image 
                src="/AmlanDasContact.jpeg"
                alt="Contact illustration"
                width={500}
                height={400}
                className="rounded-xl shadow-lg object-cover"
                data-ai-hint="communication connection"
            />
        </div>
        <Card className="shadow-xl border-border">
          <CardHeader>
            <CardTitle className="font-headline text-2xl lg:text-3xl text-primary">Get In Touch</CardTitle>
            <CardDescription className="text-base">
              The best way to reach me is via email or through my social channels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                Email Me Directly
              </h3>
              <Button asChild variant="link" className="p-0 h-auto text-base text-accent hover:text-primary hover:underline transition-colors duration-300">
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              </Button>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Connect Online</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(link => (
                  <Button 
                    key={link.name} 
                    asChild 
                    variant="outline" 
                    className="transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-accent-foreground hover:border-accent group" 
                    title={link.name} 
                    aria-label={`My ${link.name} profile`}
                  >
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <link.icon className="h-5 w-5" data-ai-hint={link.hint} />
                      <span className="hidden sm:inline">{link.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
