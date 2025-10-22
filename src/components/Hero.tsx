import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Users } from "lucide-react";
import heroImage from "@/assets/hero-paper.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vardhaman Paper Products - Barcode Paper Rolls, Thermal Paper, BOPP Tape Manufacturer in Aurangabad Maharashtra"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Quality Paper Products
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Since 2004
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Leading manufacturer of barcode paper rolls, thermal paper rolls (Hansol), 
            BOPP tape, and copier paper (B2B, NR, Reflection) in MIDC Waluj, Aurangabad, Maharashtra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button size="lg" className="bg-gradient-primary text-lg">
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-slide-in">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">Pan India</div>
              <div className="text-sm text-muted-foreground">Presence</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground">Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
