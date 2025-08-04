import React from 'react';
import { Code, Layers, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/contexts/ThemeContext';

const technologies = [
  'React 18', 'TypeScript', 'Tailwind CSS', 'React Router', 'Context API',
  'Axios', 'Lucide Icons', 'CSS Variables', 'Responsive Design'
];

const themeFeatures = [
  {
    icon: Layers,
    title: 'Complete Design Systems',
    description: 'Each theme is a fully-fledged design system with its own color palette, typography, spacing, and component styles.'
  },
  {
    icon: Code,
    title: 'CSS Variables Magic',
    description: 'Powered by CSS custom properties that enable instant theme switching without page reloads or complex state management.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Layouts',
    description: 'Every theme adapts beautifully to different screen sizes while maintaining its unique character and usability.'
  },
  {
    icon: Zap,
    title: 'Smooth Animations',
    description: 'Carefully crafted transitions and animations make theme switching feel natural and delightful to use.'
  }
];

export default function About() {
  const { currentTheme } = useTheme();

  return (
    <div className="space-y-12 animate-fade-in">
      
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold font-primary text-foreground mb-6">
          About ThemeSwitcher
        </h1>
        <p className="text-xl text-muted-foreground font-secondary max-w-3xl mx-auto">
          A revolutionary approach to theme switching that goes beyond just changing colors. 
          ThemeChanger demonstrates how entire user experiences can transform with thoughtful design systems.
        </p>
      </section>

      <section>
        <Card className={`${
          currentTheme === 'theme3' 
            ? 'bg-gradient-card border-2 border-primary/20' 
            : ''
        }`}>
          <CardHeader>
            <CardTitle className="text-2xl font-primary text-center text-foreground">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground font-secondary max-w-4xl mx-auto">
              To showcase the power of dynamic theming in modern web applications. We believe that 
              great design isn't just about aesthetics—it's about creating experiences that adapt 
              to user preferences and contexts while maintaining functionality and accessibility.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-primary text-foreground mb-4">
            Technical Features
          </h2>
          <p className="text-muted-foreground font-secondary max-w-2xl mx-auto">
            Built with modern web technologies and best practices for performance, accessibility, and maintainability.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${
          currentTheme === 'theme3' ? 'gap-8' : 'gap-6'
        }`}>
          {themeFeatures.map((feature, index) => (
            <Card 
              key={index}
              className={`${
                currentTheme === 'theme3' 
                  ? 'bg-gradient-card border-2 border-accent/20 shadow-lg hover:shadow-xl transform hover:scale-105' 
                  : 'hover:shadow-md'
              } transition-all duration-300`}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-primary text-foreground">
                    {feature.title}
                  </CardTitle>
                </div>
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

      <section>
        <Card className={`${
          currentTheme === 'theme3' 
            ? 'bg-gradient-card border-2 border-secondary/20' 
            : ''
        }`}>
          <CardHeader>
            <CardTitle className="text-2xl font-primary text-center text-foreground">
              Technologies Used
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-secondary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-primary text-foreground mb-4">
            Implementation Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className={currentTheme === 'theme3' ? 'bg-gradient-card' : ''}>
            <CardHeader>
              <CardTitle className="font-primary text-foreground">Theme 1: Minimalist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground font-secondary text-sm">
                <li>• Clean, light color palette</li>
                <li>• Inter sans-serif typography</li>
                <li>• Standard horizontal navigation</li>
                <li>• Subtle shadows and borders</li>
                <li>• Optimal for productivity</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={currentTheme === 'theme3' ? 'bg-gradient-card' : ''}>
            <CardHeader>
              <CardTitle className="font-primary text-foreground">Theme 2: Dark Professional</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground font-secondary text-sm">
                <li>• Rich dark color scheme</li>
                <li>• Playfair Display serif fonts</li>
                <li>• Sidebar navigation layout</li>
                <li>• Gold accent highlights</li>
                <li>• Professional aesthetic</li>
              </ul>
            </CardContent>
          </Card>

          <Card className={currentTheme === 'theme3' ? 'bg-gradient-card' : ''}>
            <CardHeader>
              <CardTitle className="font-primary text-foreground">Theme 3: Colorful Playful</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground font-secondary text-sm">
                <li>• Vibrant gradient backgrounds</li>
                <li>• Pacifico playful typography</li>
                <li>• Card-based grid layouts</li>
                <li>• Enhanced hover animations</li>
                <li>• Fun, energetic vibe</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}