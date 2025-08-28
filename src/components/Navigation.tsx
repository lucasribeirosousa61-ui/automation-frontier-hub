import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "#home", label: "Início" },
  { href: "#experience", label: "Experiência" },
  { href: "#education", label: "Formação" },
  { href: "#skills", label: "Competências" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">JE</span>
            </div>
            <span className="font-bold text-industrial">Jefferson Esmeraldo</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1) 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-3 ml-4">
              <ThemeToggle />
              
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contato
              </Button>
              
              <Button 
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-industrial"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.slice(1) 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="px-4 pt-4 space-y-2">
                <div className="flex justify-center mb-3">
                  <ThemeToggle />
                </div>
                
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contato
                </Button>
                
                <Button 
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};