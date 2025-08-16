import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketOverview } from './components/MarketOverview';
import { Educational } from './components/Educational';
import { News } from './components/News';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <MarketOverview />
      <Educational />
      <News />
      <Footer />
      <Toaster 
        theme={isDark ? 'dark' : 'light'}
        position="top-right"
        richColors
      />
    </div>
  );
}