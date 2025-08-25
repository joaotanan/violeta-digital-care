import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Pill } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-hero bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Sua Saúde em{" "}
                <span className="bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent">
                  Primeiro Lugar
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Medicamentos, cuidados e conveniência ao seu alcance. 
                Farmácia digital moderna com atendimento especializado e entrega rápida.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary-light" />
                </div>
                <span className="text-sm text-white/90">Medicamentos Originais</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary-light" />
                </div>
                <span className="text-sm text-white/90">Entrega Expressa</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Pill className="h-5 w-5 text-primary-light" />
                </div>
                <span className="text-sm text-white/90">Orientação Farmacêutica</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold group hover-glow"
              >
                Ver Produtos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur"
              >
                Como Funciona
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>+10.000 clientes atendidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Farmacêuticos licenciados</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Farmácia Digital Moderna - Violeta Digital Care"
                className="w-full h-[500px] object-cover rounded-2xl shadow-extra"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-4 bg-card rounded-2xl shadow-large animate-scale-in">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary rounded-lg">
                  <Pill className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">Disponível 24h</p>
                  <p className="text-xs text-muted-foreground">Farmácia online</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 p-4 bg-card rounded-2xl shadow-large animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success rounded-lg">
                  <Clock className="h-5 w-5 text-success-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">Entrega 2h</p>
                  <p className="text-xs text-muted-foreground">Região metropolitana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default HeroSection;