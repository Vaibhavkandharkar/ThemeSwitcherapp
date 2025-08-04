import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Mail, Menu } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/about', icon: User, label: 'About' },
  { to: '/contact', icon: Mail, label: 'Contact' },
];

interface NavigationProps {
  isSidebar?: boolean;
}

export function Navigation({ isSidebar = false }: NavigationProps) {
  const { currentTheme } = useTheme();

  const navContent = (
    <nav className={`${isSidebar ? 'flex flex-col space-y-2' : 'flex space-x-1'}`}>
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `${isSidebar 
              ? 'flex items-center space-x-3 px-4 py-3 rounded-lg font-secondary transition-colors' 
              : 'px-4 py-2 rounded-md font-secondary transition-colors'
            } ${
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`
          }
        >
          <Icon className={`${isSidebar ? 'h-5 w-5' : 'h-4 w-4'} ${isSidebar ? '' : 'mr-2'}`} />
          <span className={isSidebar ? 'text-sm' : 'hidden sm:inline'}>{label}</span>
        </NavLink>
      ))}
    </nav>
  );

  if (isSidebar) {
    return (
      <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-[hsl(var(--sidebar-bg))] border-r border-[hsl(var(--sidebar-border))] p-4 animate-slide-in">
        <div className="mb-6">
          <h2 className="text-lg font-semibold font-primary text-foreground mb-2">
            Navigation
          </h2>
          <p className="text-sm text-muted-foreground font-secondary">
            Explore the app sections
          </p>
        </div>
        {navContent}
      </aside>
    );
  }

  return (
    <div className="bg-background border-b border-border">
      <div className="container mx-auto px-4">

        <div className="hidden md:flex h-12 items-center">
          {navContent}
        </div>

        <div className="md:hidden flex h-12 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="ml-2">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="mt-6">
                <h2 className="text-lg font-semibold font-primary mb-4">
                  Navigation
                </h2>
                <div className="flex flex-col space-y-2">
                  {navItems.map(({ to, icon: Icon, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 rounded-lg font-secondary transition-colors ${
                          isActive
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`
                      }
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}