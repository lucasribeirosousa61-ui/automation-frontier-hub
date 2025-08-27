import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Fresenius Kabi",
    position: "Especialista em Sistema de Automação",
    period: "abr/2024 - atual",
    duration: "8 meses",
    location: "Fortaleza, CE",
    description: "Liderança técnica em projetos avançados de automação industrial para linha farmacêutica.",
    skills: ["Gestão da qualidade", "Automação industrial", "BPF", "Gestão de equipes"]
  },
  {
    company: "Fresenius Kabi",
    position: "Supervisor de Automação PL",
    period: "fev/2016 - mai/2024",
    duration: "8 anos 4 meses",
    location: "Fortaleza, CE",
    description: "Coordenação e execução de projetos de automação envolvendo desenvolvimento de sistemas supervisórios, assistência técnica e treinamentos.",
    skills: ["Manutenção preventiva", "Planejamento", "Liderança de equipe", "RPA", "Gestão de manutenção"]
  },
  {
    company: "Durametal S/A",
    position: "Engenheiro de Manutenção",
    period: "mar/2008 - jun/2015",
    duration: "7 anos 4 meses",
    location: "Fortaleza, CE",
    description: "Coordenação de equipe de manutenção, projeto e execução da automação de processos industriais, retrofit de máquinas e equipamentos.",
    skills: ["Automação de processos", "Retrofit", "Manutenção corretiva", "Backup de programas"]
  },
  {
    company: "SENAI",
    position: "Instrutor de Manutenção",
    period: "abr/2004 - fev/2008",
    duration: "3 anos 11 meses",
    location: "Fortaleza, CE",
    description: "Ministrar disciplinas nos cursos técnico de mecatrônica, manutenção industrial e qualificação profissional.",
    skills: ["Eletricidade básica", "Comandos elétricos", "Pneumática", "Hidráulica", "CLP"]
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-industrial mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 16 anos de experiência em automação industrial, liderança técnica e gestão de projetos
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-tech-cyan to-primary hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative flex flex-col lg:flex-row gap-8 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex w-16 flex-shrink-0 justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                </div>
                
                <Card className="flex-1 hover:shadow-[var(--shadow-industrial)] transition-all duration-300 border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-industrial">{exp.position}</CardTitle>
                        <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                        <div className="font-medium text-tech-cyan">
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};