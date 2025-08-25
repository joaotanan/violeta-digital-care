import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Truck, 
  Phone, 
  Shield, 
  Clock, 
  HeartHandshake,
  Pill,
  UserCheck
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Phone,
      title: "Teleatendimento",
      description: "Consulte nossos farmacêuticos especializados 24/7 para orientações sobre medicamentos.",
      features: ["Farmacêuticos licenciados", "Atendimento 24h", "Orientação gratuita"],
      highlight: "Novo",
      color: "primary"
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Receba seus medicamentos em casa com agilidade e segurança garantidas.",
      features: ["Entrega em 2h", "Frete grátis acima de R$ 50", "Rastreamento em tempo real"],
      highlight: "Popular",
      color: "success"
    },
    {
      icon: Stethoscope,
      title: "Orientação Farmacêutica",
      description: "Suporte especializado para uso correto de medicamentos e interações medicamentosas.",
      features: ["Análise personalizada", "Relatórios detalhados", "Acompanhamento contínuo"],
      highlight: "Premium",
      color: "warning"
    },
    {
      icon: Shield,
      title: "Medicamentos Originais",
      description: "Garantimos a autenticidade e qualidade de todos os produtos em nossa farmácia.",
      features: ["Produtos certificados", "Garantia de qualidade", "Procedência verificada"],
      highlight: "Confiável",
      color: "primary"
    },
    {
      icon: HeartHandshake,
      title: "Programa de Fidelidade",
      description: "Acumule pontos a cada compra e troque por desconto em medicamentos.",
      features: ["Cashback em compras", "Descontos exclusivos", "Ofertas personalizadas"],
      highlight: "Benefício",
      color: "secondary"
    },
    {
      icon: UserCheck,
      title: "Controle de Receitas",
      description: "Gerenciamento digital das suas receitas médicas com lembretes automáticos.",
      features: ["Lembretes de medicação", "Histórico completo", "Renovação automática"],
      highlight: "Inteligente",
      color: "primary"
    }
  ];

  const getIconColorClass = (color: string) => {
    switch (color) {
      case "primary": return "text-primary";
      case "success": return "text-success";
      case "warning": return "text-warning";
      case "secondary": return "text-secondary";
      default: return "text-primary";
    }
  };

  const getHighlightColorClass = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary text-primary-foreground";
      case "success": return "bg-success text-success-foreground";
      case "warning": return "bg-warning text-warning-foreground";
      case "secondary": return "bg-secondary text-secondary-foreground";
      default: return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-display mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência completa em cuidados farmacêuticos, 
            combinando tecnologia moderna com atendimento humanizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-0 hover-lift hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center space-y-6 relative z-10">
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getHighlightColorClass(service.color)}`}>
                    {service.highlight}
                  </div>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`h-8 w-8 ${getIconColorClass(service.color)}`} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-heading group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'primary' ? 'bg-primary' : service.color === 'success' ? 'bg-success' : service.color === 'warning' ? 'bg-warning' : 'bg-secondary'}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                >
                  Saiba Mais
                </Button>
              </CardContent>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-heading mb-4">
                Precisa de Ajuda Personalizada?
              </h3>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Nossa equipe de farmacêuticos está pronta para te atender com orientação especializada 
                sobre medicamentos, dosagens e interações.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 hover-glow"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Falar com Farmacêutico
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur"
                >
                  <Pill className="h-5 w-5 mr-2" />
                  Agendar Consulta
                </Button>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)] opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;