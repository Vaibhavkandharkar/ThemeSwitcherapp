import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useProducts, Product } from '@/hooks/useProducts';
import { useTheme } from '@/contexts/ThemeContext';

function ProductCard({ product }: { product: Product }) {
  const { currentTheme } = useTheme();
  
  const cardClass = currentTheme === 'theme3' 
    ? 'bg-gradient-card border-2 border-accent/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300' 
    : 'hover:shadow-md transition-all duration-300';

  return (
    <Card className={`${cardClass} animate-fade-in`}>
      <CardHeader className="p-4">
        <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <h3 className="font-semibold font-primary text-lg mb-2 line-clamp-2 text-foreground">
          {product.title}
        </h3>
        <p className="text-muted-foreground font-secondary text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold font-primary text-primary">
            ${product.price}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-secondary text-muted-foreground">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full group" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

function ProductSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="p-4">
        <Skeleton className="aspect-square rounded-lg" />
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Skeleton className="h-6 mb-2" />
        <Skeleton className="h-4 mb-3" />
        <div className="flex justify-between mb-3">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  );
}

export function ProductGrid() {
  const { products, loading, error } = useProducts();
  const { currentTheme } = useTheme();

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-destructive font-secondary mb-4">
          ⚠️ {error}
        </div>
        <Button 
          onClick={() => window.location.reload()} 
          variant="outline"
        >
          Try Again
        </Button>
      </div>
    );
  }

  const gridClass = currentTheme === 'theme3'
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';

  return (
    <section className="py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-primary text-foreground mb-4">
          Featured Products
        </h2>
        <p className="text-muted-foreground font-secondary max-w-2xl mx-auto">
          Discover our amazing collection of products from the Fake Store API. 
          Each theme presents these products in a unique and beautiful way.
        </p>
      </div>

      <div className={gridClass}>
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          : products.slice(0, 12).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </div>
    </section>
  );
}