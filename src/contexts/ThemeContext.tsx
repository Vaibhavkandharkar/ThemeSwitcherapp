import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

interface ThemeConfig {
  id: ThemeType;
  name: string;
  hasCustomLayout?: boolean;
}

export const themes: ThemeConfig[] = [
  { 
    id: 'theme1', 
    name: 'Minimalist', 
  },
  { 
    id: 'theme2', 
    name: 'Dark Professional', 
    hasCustomLayout: true
  },
  { 
    id: 'theme3', 
    name: 'Colorful Playful', 
  }
];

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('thememorph-theme') as ThemeType;
    if (savedTheme && themes.find(t => t.id === savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const themeConfig = themes.find(t => t.id === currentTheme);
    if (themeConfig) {
      document.body.style.fontFamily = `var(--font-primary), system-ui, sans-serif`;
    }
  }, [currentTheme]);

  const setTheme = (theme: ThemeType) => {
    if (theme === currentTheme) return;
    
    setIsTransitioning(true);
    
    localStorage.setItem('thememorph-theme', theme);
    
    setTimeout(() => {
      setCurrentTheme(theme);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 50);
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        currentTheme, 
        setTheme, 
        isTransitioning 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}