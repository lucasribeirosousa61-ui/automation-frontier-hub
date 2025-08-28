import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Settings, 
  Users, 
  BarChart3, 
  Wrench, 
  Shield,
  Lightbulb,
  Target
} from "lucide-react";
import { TechCarousel } from "./TechCarousel";

const technicalSkills = [
  { name: "Siemens TIA Portal", level: 95, category: "Programação" },
  { name: "Step 7 & WinCC", level: 90, category: "SCADA" },
  { name: "NodeRed", level: 85, category: "Desenvolvimento" },
  { name: "SQL Databases", level: 80, category: "Dados" },
  { name: "Automação Industrial", level: 95, category: "Sistemas" },
  { name: "CLPs & HIMs", level: 90, category: "Hardware" },
  { name: "Pneumática/Hidráulica", level: 85, category: "Sistemas" },
  { name: "Retrofit de Equipamentos", level: 88, category: "Manutenção" }
];

const managementSkills = [
  { name: "Gestão de Equipes", level: 90, icon: Users },
  { name: "Planejamento de Projetos", level: 85, icon: Target },
  { name: "Gestão da Qualidade", level: 88, icon: Shield },
  { name: "Liderança Técnica", level: 92, icon: Lightbulb },
  { name: "Manutenção Preventiva", level: 95, icon: Wrench },
  { name: "Análise de Performance", level: 80, icon: BarChart3 }
];


export const Skills = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-industrial mb-4">
            Competências e Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise técnica e competências de liderança desenvolvidas ao longo de 16+ anos na indústria
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="animate-fade-up border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl text-industrial">
                  Habilidades Técnicas
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-industrial">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Management Skills */}
          <Card className="animate-fade-up border-l-4 border-l-tech-cyan" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-tech rounded-full flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-xl text-industrial">
                  Gestão e Liderança
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {managementSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-tech-cyan" />
                        <span className="font-medium text-industrial">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-tech-cyan">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted [&>div]:bg-gradient-tech"
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
        
        {/* Technologies Carousel */}
        <Card className="animate-fade-up bg-gradient-to-r from-background to-muted/30" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="text-xl text-industrial text-center">
              Tecnologias e Ferramentas
            </CardTitle>
            <p className="text-sm text-muted-foreground text-center">
              Principais tecnologias utilizadas em projetos de automação industrial
            </p>
          </CardHeader>
          
          <CardContent>
            <TechCarousel />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};