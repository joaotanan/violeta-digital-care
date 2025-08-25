import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-violeta.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const menuItems = [
    "Início",
    "Produtos", 
    "Promoções",
    "Serviços",
    "Sobre Nós",
    "Contato"
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Violeta Digital Care" 
            className="h-10 w-10 rounded-lg object-cover"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Violeta
            </h1>
            <p className="text-xs text-muted-foreground -mt-1">Digital Care</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Pesquisar medicamentos..."
              className="pl-10 bg-muted/50 border-none focus-visible:ring-primary/20"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          {/* Cart Button */}
          <Button variant="ghost" size="sm" className="relative hover-glow">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse-glow"
              >
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* Account Button */}
          <Button className="hidden sm:flex bg-gradient-primary hover:opacity-90 transition-all hover-glow">
            <User className="h-4 w-4 mr-2" />
            Minha Conta
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur border-t animate-slide-up">
          <div className="container px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Pesquisar medicamentos..."
                className="pl-10 bg-muted/50 border-none"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Mobile Account Button */}
            <Button className="w-full bg-gradient-primary hover:opacity-90 transition-all">
              <User className="h-4 w-4 mr-2" />
              Minha Conta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;