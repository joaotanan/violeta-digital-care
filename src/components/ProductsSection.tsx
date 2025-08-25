import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Filter } from "lucide-react";
import productsImage from "@/assets/products-mockup.jpg";

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Medicamentos",
    "Suplementos", 
    "Cuidados Pessoais",
    "Vitaminas",
    "Dermocosméticos"
  ];

  const products = [
    {
      id: 1,
      name: "Dipirona Sódica 500mg",
      category: "Medicamentos",
      price: 8.90,
      originalPrice: 12.50,
      rating: 4.8,
      reviews: 127,
      discount: "29%",
      image: productsImage,
      inStock: true,
      badge: "Mais Vendido"
    },
    {
      id: 2,
      name: "Vitamina D3 2000UI",
      category: "Vitaminas",
      price: 24.90,
      originalPrice: 35.00,
      rating: 4.9,
      reviews: 89,
      discount: "29%",
      image: productsImage,
      inStock: true,
      badge: "Novidade"
    },
    {
      id: 3,
      name: "Protetor Solar FPS 60",
      category: "Dermocosméticos",
      price: 45.90,
      originalPrice: 58.00,
      rating: 4.7,
      reviews: 203,
      discount: "21%",
      image: productsImage,
      inStock: true,
      badge: "Oferta"
    },
    {
      id: 4,
      name: "Whey Protein Isolado",
      category: "Suplementos",
      price: 89.90,
      originalPrice: 120.00,
      rating: 4.6,
      reviews: 156,
      discount: "25%",
      image: productsImage,
      inStock: true,
      badge: "Premium"
    },
    {
      id: 5,
      name: "Shampoo Anticaspa",
      category: "Cuidados Pessoais",
      price: 18.90,
      originalPrice: 25.00,
      rating: 4.5,
      reviews: 78,
      discount: "24%",
      image: productsImage,
      inStock: true,
      badge: "Recomendado"
    },
    {
      id: 6,
      name: "Ômega 3 1000mg",
      category: "Suplementos",
      price: 32.90,
      originalPrice: 45.00,
      rating: 4.8,
      reviews: 94,
      discount: "27%",
      image: productsImage,
      inStock: true,
      badge: "Top Seller"
    }
  ];

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Mais Vendido": return "default";
      case "Novidade": return "secondary";
      case "Oferta": return "destructive";
      case "Premium": return "outline";
      default: return "default";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-display mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Produtos em Destaque
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção especial de medicamentos, suplementos e produtos de cuidados pessoais
            com os melhores preços e qualidade garantida.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-gradient-primary hover:opacity-90 shadow-glow" 
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group bg-gradient-card hover-lift hover:shadow-glow transition-all duration-300 border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <Badge 
                      variant={getBadgeVariant(product.badge)}
                      className="text-xs font-medium"
                    >
                      {product.badge}
                    </Badge>
                    {product.discount && (
                      <Badge variant="destructive" className="text-xs font-bold">
                        -{product.discount}
                      </Badge>
                    )}
                  </div>

                  {/* Quick Add Button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      className="h-8 w-8 p-0 bg-white/90 text-primary hover:bg-white hover:scale-110 transition-all"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">
                          R$ {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            R$ {product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-success">
                        {product.inStock ? "Em estoque" : "Indisponível"}
                      </p>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all hover-glow group"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:border-primary hover:text-primary hover:bg-primary/5 transition-all hover-glow"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;