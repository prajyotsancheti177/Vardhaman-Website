import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Zap } from "lucide-react";

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Vardhaman Paper Products - Home",
    "description": "Leading manufacturer of barcode paper rolls, thermal paper rolls (Hansol), BOPP tape, barcode label printing & copier paper in Aurangabad, Maharashtra",
    "url": "https://vardhamanpaperproducts.com/"
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Vardhaman Paper Products - Barcode Labels, Thermal Paper Rolls & BOPP Tape in Aurangabad"
        description="Leading manufacturer & supplier of barcode paper rolls, thermal paper rolls (Hansol paper), BOPP tape, barcode label printing & copier paper (B2B, NR, Reflection) in MIDC Waluj, Aurangabad, Maharashtra. 20+ years of excellence."
        keywords="barcode paper roll Aurangabad, thermal paper roll Maharashtra, BOPP tape supplier, barcode label printing Aurangabad, copier paper B2B NR Reflection, Hansol thermal paper, paper products MIDC Waluj, xerox paper Aurangabad"
        canonicalUrl="https://vardhamanpaperproducts.com/"
        schemaData={schemaData}
      />
      <Navbar />
      <Hero />
      <ProductCategories />
      
      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Two decades of trust, quality, and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-medium hover:shadow-large transition-all hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">20+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Established expertise in paper products manufacturing and trading since 2004
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Imported materials, rigorous quality control, and customer satisfaction guarantee
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pan-India Delivery</h3>
                <p className="text-muted-foreground">
                  Strong presence across Maharashtra with distribution network throughout India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
