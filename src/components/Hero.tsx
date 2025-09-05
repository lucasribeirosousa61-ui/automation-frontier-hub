import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin } from "lucide-react";
import jeffersonProfile from "@/assets/jefferson-profile.jpg";
import automationHeroBg from "@/assets/automation-hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${automationHeroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-industrial/90 via-industrial/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6 animate-fade-up">
          <div className="flex items-center gap-2 text-tech-cyan">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Fortaleza, CE</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold">
            Jefferson<br />
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Esmeraldo
            </span>
          </h1>
          
          <h2 className="text-xl lg:text-2xl text-primary-glow font-medium">
            Especialista em Sistemas de Automação Industrial
          </h2>
          
          <p className="text-lg text-gray-200 max-w-xl leading-relaxed">
            Mais de 16 anos coordenando projetos de automação, desenvolvimento de supervisórios 
            e liderança de equipes técnicas. Especialista em CLPs, sistemas SCADA e automação de processos industriais.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-tech hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Entre em Contato
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end animate-fade-up">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl animate-pulse-glow">
              <img 
                src={jeffersonProfile}
                alt="Jefferson Esmeraldo - Especialista em Automação"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating tech elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-tech-cyan/20 rounded-full backdrop-blur-sm flex items-center justify-center">
              <span className="text-tech-cyan font-bold text-sm">PLC</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/20 rounded-full backdrop-blur-sm flex items-center justify-center">
              <span className="text-primary-glow font-bold text-xs">SCADA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};