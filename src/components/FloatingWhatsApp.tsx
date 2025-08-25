import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "5511999990000";
  const message = "Olá! Gostaria de falar com um farmacêutico sobre medicamentos.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-3 animate-fade-in">
          <div className="bg-card border shadow-lg rounded-lg p-3 max-w-xs">
            <p className="text-sm font-medium text-card-foreground">
              Fale com nosso farmacêutico
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Tire suas dúvidas sobre medicamentos
            </p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-card border-r border-b"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative">
        <Button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group animate-pulse-glow"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            animationDuration: "2s"
          }}
        >
          <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform" />
        </Button>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 h-6 w-6 bg-muted hover:bg-muted-dark rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
        >
          <X className="h-3 w-3" />
        </button>

        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Badge */}
      <div className="absolute -top-1 -left-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
        <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;