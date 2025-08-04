import React from 'react';
import { ArrowRight, Zap, Palette, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductGrid } from '@/components/ProductGrid';
import { useTheme } from '@/contexts/ThemeContext';

const features = [
  {
    icon: Palette,
    title: 'Dynamic Themes',
    description: 'Switch between three distinct design systems with complete layout transformations.'
  },
  {
    icon: Zap,
    title: 'Smooth Transitions',
    description: 'Experience seamless animations and transitions between different theme modes.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Perfect experience across all devices with theme-aware responsive layouts.'
  }
];

export default function Home() {
  const { currentTheme } = useTheme();

  return (
    <div className="space-y-12 animate-fade-in">
     
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-primary text-foreground mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ThemeChanger
            </span>
          </h1>
          <p className="text-xl text-muted-foreground font-secondary mb-8 max-w-2xl mx-auto">
            Experience the power of dynamic theming with three completely different design systems. 
            Watch as the entire application transforms with each theme switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-primary text-foreground mb-4">
            Amazing Features
          </h2>
          <p className="text-muted-foreground font-secondary max-w-2xl mx-auto">
            Discover what makes ThemeChanger special with its innovative theme switching capabilities.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 ${
          currentTheme === 'theme3' ? 'gap-8' : 'gap-6'
        }`}>
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`text-center ${
                currentTheme === 'theme3' 
                  ? 'bg-gradient-card border-2 border-accent/20 shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'hover:shadow-md'
              } transition-all duration-300`}
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-primary rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="font-primary text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-secondary">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-8">
        <Card className={`${
          currentTheme === 'theme3' 
            ? 'bg-gradient-card border-2 border-primary/20' 
            : ''
        }`}>
          <CardHeader>
            <CardTitle className="font-primary text-center text-foreground">
              Current Theme: {currentTheme === 'theme1' ? 'Minimalist' : 
                             currentTheme === 'theme2' ? 'Dark Professional' : 
                             'Colorful Playful'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground font-secondary mb-4">
              {currentTheme === 'theme1' && 
                "You're experiencing our clean, minimalist theme with light colors and crisp typography."}
              {currentTheme === 'theme2' && 
                "You're in our professional dark theme with sidebar navigation and elegant serif fonts."}
              {currentTheme === 'theme3' && 
                "You're enjoying our vibrant, playful theme with colorful gradients and fun typography!"}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-secondary">
                {currentTheme === 'theme1' ? 'Sans-serif' : 
                 currentTheme === 'theme2' ? 'Serif' : 'Playful'}
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-secondary">
                {currentTheme === 'theme2' ? 'Sidebar Layout' : 'Standard Layout'}
              </span>
              <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-secondary">
                {currentTheme === 'theme1' ? 'Light Mode' : 
                 currentTheme === 'theme2' ? 'Dark Mode' : 'Colorful Mode'}
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      <ProductGrid />
    </div>
  );
}