import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Download,
  Send,
  FileText,
  Github,
  Instagram
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve.",
    });
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
  };
  
  const handleDownload = (format: string) => {
    toast({
      title: `Download iniciado`,
      description: `Currículo em formato ${format} será baixado.`,
    });
  };
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-industrial mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interessado em discutir projetos de automação ou oportunidades de colaboração? Vamos conversar!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up">
            {/* Contact Details */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl text-industrial">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-industrial">Email</p>
                    <p className="text-sm text-muted-foreground">jefferson.esmeraldo@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-tech rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-industrial">Telefone</p>
                    <p className="text-sm text-muted-foreground">(85) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-industrial">Localização</p>
                    <p className="text-sm text-muted-foreground">Fortaleza, CE - Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="border-l-4 border-l-tech-cyan">
              <CardHeader>
                <CardTitle className="text-xl text-industrial">
                  Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  LinkedIn Profile
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Github className="w-5 h-5" />
                  GitHub Projects
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  Instagram
                </Button>
              </CardContent>
            </Card>
            
            {/* Download CV */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="text-xl text-industrial">
                  Download do Currículo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={() => handleDownload('PDF')}
                  className="w-full bg-gradient-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleDownload('Word')}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Word
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-xl text-industrial">
                  Formulário de Contato
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo para propostas de projetos ou consultas técnicas
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-industrial mb-2 block">
                        Nome Completo *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-industrial mb-2 block">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-industrial mb-2 block">
                        Empresa
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Nome da empresa"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-industrial mb-2 block">
                        Assunto *
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Assunto da mensagem"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-industrial mb-2 block">
                      Mensagem *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Descreva seu projeto ou consulta..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  {/* Project Types */}
                  <div>
                    <label className="text-sm font-medium text-industrial mb-3 block">
                      Tipo de Projeto (opcional)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Automação Industrial', 
                        'Sistemas SCADA', 
                        'Retrofit', 
                        'Manutenção', 
                        'Consultoria',
                        'Treinamento',
                        'Outro'
                      ].map((type) => (
                        <Badge 
                          key={type}
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};