import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin,
  Shield,
  Clock,
  Heart
} from "lucide-react";
import logo from "@/assets/logo-violeta.jpg";

const Footer = () => {
  const quickLinks = [
    "Início",
    "Produtos", 
    "Promoções",
    "Serviços",
    "Sobre Nós",
    "Contato"
  ];

  const legalLinks = [
    "Termos de Uso",
    "Política de Privacidade", 
    "Política de Cookies",
    "Trocas e Devoluções",
    "FAQ - Perguntas Frequentes"
  ];

  const productCategories = [
    "Medicamentos",
    "Suplementos",
    "Vitaminas",
    "Dermocosméticos", 
    "Cuidados Pessoais",
    "Equipamentos Médicos"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-secondary text-white">
      {/* Main Footer Content */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Violeta Digital Care" 
                className="h-12 w-12 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Violeta</h3>
                <p className="text-sm text-white/70">Digital Care</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Sua farmácia digital de confiança. Medicamentos originais, 
              atendimento especializado e entrega rápida para cuidar da sua saúde.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Medicamentos certificados</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Atendimento 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Heart className="h-4 w-4 text-red-400" />
                <span>+10.000 clientes satisfeitos</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors hover-lift"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Product Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Categorias</h4>
            <nav className="space-y-3">
              {productCategories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Fale Conosco</h4>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-light mt-0.5" />
                <div>
                  <p className="text-white font-medium">(11) 9999-0000</p>
                  <p className="text-sm text-white/70">Atendimento 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-light mt-0.5" />
                <div>
                  <p className="text-white font-medium">contato@violetacare.com</p>
                  <p className="text-sm text-white/70">Suporte online</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-light mt-0.5" />
                <div>
                  <p className="text-white font-medium">São Paulo, SP</p>
                  <p className="text-sm text-white/70">Entrega em toda região</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="font-medium">Newsletter</h5>
              <p className="text-sm text-white/70">
                Receba ofertas exclusivas e dicas de saúde
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-primary-light"
                />
                <Button className="bg-primary hover:bg-primary-hover shrink-0 hover-glow">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/20" />

      {/* Bottom Footer */}
      <div className="container px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70">
              © 2024 Violeta Digital Care. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/50 mt-1">
              CNPJ: 00.000.000/0001-00 - Farmácia responsável: Dr. João Silva - CRF-SP 12345
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.slice(0, 3).map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-xs text-white/70 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;