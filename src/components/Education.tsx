import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Universidade de Fortaleza",
    degree: "Engenharia de Controle e Automação",
    type: "Graduação",
    period: "2008 - 2012",
    description: "Formação completa em sistemas de controle, automação industrial, instrumentação e processos industriais.",
    specializations: ["Sistemas de Controle", "Automação Industrial", "Instrumentação", "Processos Industriais"]
  },
  {
    institution: "SENAI",
    degree: "Técnico em Mecatrônica",
    type: "Técnico",
    period: "2002 - 2004",
    description: "Formação técnica integrada em mecânica, eletrônica, pneumática, hidráulica e programação de CLPs.",
    specializations: ["Mecânica", "Eletrônica", "Pneumática", "Hidráulica", "CLPs"]
  }
];

const certifications = [
  "Siemens TIA Portal",
  "Step 7 Programming",
  "WinCC SCADA",
  "NodeRed Development",
  "SQL Database Management",
  "Industrial Safety",
  "Lean Manufacturing",
  "Project Management"
];

export const Education = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-industrial mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sólida base educacional em engenharia e tecnologia para automação industrial
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="hover:shadow-[var(--shadow-industrial)] transition-all duration-300 animate-fade-up border-t-4 border-t-tech-cyan"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-xl text-industrial mb-2">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-primary font-semibold">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="outline" className="border-tech-cyan text-tech-cyan">
                        {edu.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-industrial">Especializações:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.specializations.map((spec, specIndex) => (
                      <Badge 
                        key={specIndex}
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-r from-muted/50 to-muted/30 border-l-4 border-l-accent">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl text-industrial">
                  Certificações e Competências Técnicas
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-accent/10 text-accent hover:bg-accent/20 transition-colors p-3 justify-center"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};