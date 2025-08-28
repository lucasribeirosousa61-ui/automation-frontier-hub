import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MonitorSpeaker, 
  Package, 
  Truck, 
  Scale, 
  Eye, 
  Snowflake, 
  Wind, 
  Flame,
  ExternalLink
} from "lucide-react";

const projects = [
  {
    title: "Sistema Supervisório Integrado",
    company: "Fresenius Kabi",
    description: "Desenvolvimento de sistema supervisório com identificação de pressão, vazão, temperatura e tempo de processo, totalmente integrado com banco de dados para monitoramento em tempo real.",
    technologies: ["SCADA", "SQL", "HMI", "NodeRed"],
    icon: MonitorSpeaker,
    category: "Supervisório",
    impact: "Redução de 40% no tempo de diagnóstico de falhas"
  },
  {
    title: "Automação de Embalagem de Tinta",
    company: "Hidrotintas",
    description: "Automação completa do processo de embalagem de tinta para garantir maior produtividade e padronização do processo de envase.",
    technologies: ["CLP", "Sensores", "IHM", "Pneumática"],
    icon: Package,
    category: "Embalagem",
    impact: "Aumento de 35% na produtividade"
  },
  {
    title: "Sistema de Transporte Pneumático",
    company: "Durametal S/A",
    description: "Automação do sistema de controle de transporte pneumático de materiais sólidos com melhor controle de nível de silos, garantindo confiabilidade no transporte.",
    technologies: ["CLP", "Sensores de Nível", "Válvulas", "SCADA"],
    icon: Truck,
    category: "Transporte",
    impact: "99% de precisão no transporte"
  },
  {
    title: "Processo de Envase de Tinta",
    company: "Hidrotintas",
    description: "Automação do processo de envase de tintas para garantir padrão na pesagem dos produtos, atendendo normas de comercialização.",
    technologies: ["Células de Carga", "CLP", "IHM", "Instrumentação"],
    icon: Scale,
    category: "Pesagem",
    impact: "Precisão de 99.8% na pesagem"
  },
  {
    title: "Esteira Transportadora Seletiva",
    company: "Universidade de Fortaleza",
    description: "Automação de esteira transportadora com seleção de produtos para diversas etapas do processo através de sensores ópticos avançados.",
    technologies: ["Sensores Ópticos", "CLP", "Motores", "IHM"],
    icon: Eye,
    category: "Seleção",
    impact: "100% de precisão na seleção"
  },
  {
    title: "Resfriador de Areia Automatizado",
    company: "Durametal S/A",
    description: "Automação do sistema de controle do resfriador de areia para melhor controle do processo de misturas de areia verde, melhorando a produtividade.",
    technologies: ["Controle de Temperatura", "CLP", "Sensores", "SCADA"],
    icon: Snowflake,
    category: "Resfriamento",
    impact: "Melhoria de 25% na qualidade"
  },
  {
    title: "Sistema de Exaustão Industrial",
    company: "Durametal S/A",
    description: "Elaboração, projeto e execução do sistema de automação da exaustão para melhoria do processo produtivo e controle ambiental.",
    technologies: ["Ventiladores", "CLP", "Sensores de Pressão", "IHM"],
    icon: Wind,
    category: "Exaustão",
    impact: "Redução de 60% nas emissões"
  },
  {
    title: "Retrofit Forno Vazador",
    company: "Durametal S/A",
    description: "Retrofit completo do sistema de controle do forno vazador para melhor qualidade no controle do processo, garantindo conformidade no vazamento de moldes.",
    technologies: ["Controle de Temperatura", "CLP", "Instrumentação", "SCADA"],
    icon: Flame,
    category: "Retrofit",
    impact: "Melhoria de 30% na conformidade"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-industrial mb-4">
            Projetos Realizados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Portfolio de projetos de automação industrial com impacto direto na produtividade e qualidade dos processos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            
            return (
              <Card 
                key={index}
                className="group hover:shadow-[var(--shadow-industrial)] transition-all duration-300 animate-fade-up border-t-4 border-t-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-gradient-tech rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <Badge variant="outline" className="border-accent text-accent">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-lg text-industrial mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-primary">{project.company}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-xs font-semibold text-industrial mb-2">Tecnologias:</h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            className="bg-primary/10 text-primary text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <p className="text-xs font-medium text-accent">
                        💡 {project.impact}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Summary Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Projetos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tech-cyan mb-2">16+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-sm text-muted-foreground">Empresas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-industrial mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Equipamentos Automatizados</div>
          </div>
        </div>
      </div>
    </section>
  );
};