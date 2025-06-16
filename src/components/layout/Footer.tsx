
"use client";

import React from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-secondary-foreground">
          &copy; {currentYear !== null ? currentYear : 'Loading year...'} Amlan Das. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Crafted with <span className="text-primary hover:text-accent transition-colors">Next.js</span> & <span className="text-primary hover:text-accent transition-colors">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
