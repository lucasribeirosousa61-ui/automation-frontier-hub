import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-industrial text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JE</span>
              </div>
              <span className="text-xl font-bold">Jefferson Esmeraldo</span>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              Especialista em Sistemas de Automação Industrial com mais de 16 anos de experiência 
              em projetos de automação, desenvolvimento de supervisórios e liderança técnica.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-glow">Links Rápidos</h3>
            <div className="space-y-2">
              {[
                { label: "Experiência", href: "#experience" },
                { label: "Formação", href: "#education" },
                { label: "Competências", href: "#skills" },
                { label: "Projetos", href: "#projects" }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-glow">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                jefferson.esmeraldo@email.com
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                (85) 99999-9999
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                Fortaleza, CE - Brasil
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2024 Jefferson Esmeraldo. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400">
              Desenvolvido com React & TypeScript
            </div>
            
            <Button
              onClick={scrollToTop}
              size="sm"
              className="bg-gradient-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};