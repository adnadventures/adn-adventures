import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
// import path from 'path';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY <= 50 || isMobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollDifference = currentScrollY - lastScrollY.current;
      if (Math.abs(scrollDifference) > 8) {
        setIsVisible(scrollDifference < 0);
        lastScrollY.current = currentScrollY;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/packages', label: t('nav.packages') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/testimonials', label: t('nav.testimonials') },
    // { path: '/terms', label: t('nav.terms') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -140 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-3"
    >
      <div
        className={`w-full max-w-6xl border border-white/35 bg-white/20 px-3 shadow-[0_12px_40px_hsl(24_10%_10%/0.18),inset_0_1px_0_hsl(0_0%_100%/0.55)] backdrop-blur-[32px] transition-all duration-300 dark:border-white/15 dark:bg-black/20 sm:px-5 ${
          isMobileMenuOpen ? 'rounded-[2rem]' : 'rounded-full'
        } ${isScrolled ? 'bg-white/30 shadow-[0_16px_48px_hsl(24_10%_10%/0.24),inset_0_1px_0_hsl(0_0%_100%/0.65)] dark:bg-black/30' : ''}`}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-xl font-display font-bold text-primary"
            >
              <img src="/adn logo.png" alt="ADN Adventures Logo" className="h-16 w-20 object-contain" />
              {/* <h1>ADN <span className="text-foreground">Adventures</span></h1> */}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                  }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
              aria-label="Change language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs">
                {i18n.language === 'en' ? 'HI' : 'EN'}
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => {
                setIsVisible(true);
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-1 border-t border-border/50 pt-3 pb-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 transition-colors ${location.pathname === link.path
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-foreground/80 hover:bg-muted'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
