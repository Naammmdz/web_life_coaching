import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Brain } from 'lucide-react';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useLanguageStore } from '@/store/language';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'assessments', href: '/assessments' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguageStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">LifeCoach Pro</span>
        </Link>        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(item.name)}
            </Link>
          ))}
        </nav>        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="ghost" asChild>
            <Link to="/login">{t('login')}</Link>
          </Button>
          <Button asChild>
            <Link to="/assessments/mbti">{t('startFreeAssessment')}</Link>
          </Button>
        </div>{/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <div className="mb-4">
                  <LanguageSwitcher />
                </div>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    {t('login')}
                  </Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/assessments/mbti" onClick={() => setIsOpen(false)}>
                    {t('startFreeAssessment')}
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
