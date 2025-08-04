import React from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { currentTheme, isTransitioning } = useTheme();
  const hasSidebar = currentTheme === 'theme2';

  return (
    <div 
      className={`min-h-screen bg-background text-foreground transition-all duration-300 ${
        isTransitioning ? 'animate-theme-morph' : ''
      } ${currentTheme === 'theme3' ? 'bg-gradient-theme' : ''}`}
    >
      <Header />
      
      {/* Theme-specific layouts */}
      {hasSidebar ? (
        // Theme 2: Sidebar Layout
        <div className="flex">
          <Navigation isSidebar />
          <main className="flex-1 ml-64 pt-16 min-h-screen">
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      ) : (
        
        <div className="pt-16">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      )}
    </div>
  );
}