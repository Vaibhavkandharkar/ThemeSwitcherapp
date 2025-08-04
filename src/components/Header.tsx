import React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTheme, themes } from '@/contexts/ThemeContext';

export function Header() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--header-bg))] border-b border-[hsl(var(--header-border))] backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg">
            <Palette className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-primary text-foreground">
              ThemeChanger
            </h1>
            <p className="text-xs text-muted-foreground font-secondary">
              Multi-Theme Switcher
            </p>
          </div>
        </div>

      
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground font-secondary hidden sm:inline">
            Choose Theme:
          </span>
          <Select value={currentTheme} onValueChange={setTheme}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent className="bg-popover border border-border">
              {themes.map((theme) => (
                <SelectItem 
                  key={theme.id} 
                  value={theme.id}
                  className="hover:bg-accent"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{theme.name}</span>                  
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}