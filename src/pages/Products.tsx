import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Category images
import xeroxImage from "@/assets/xerox-paper.jpg";
import barcodeImage from "@/assets/barcode-labels.jpg";
import thermalImage from "@/assets/thermal-rolls.jpg";

// Product images
import b2bPaper from "@/assets/products/b2b-a4-paper.jpg";
import reflectionPaper from "@/assets/products/reflection-a4-paper.jpg";
import coloredPaper from "@/assets/products/colored-paper.jpg";
import thermal79x50 from "@/assets/products/thermal-79x50.jpg";
import thermal80x80 from "@/assets/products/thermal-80x80.jpg";
import barcode50x25 from "@/assets/products/barcode-50x25.jpg";
import barcode100x50 from "@/assets/products/barcode-100x50.jpg";
import boppTape from "@/assets/products/bopp-tape.jpg";

const productCategories = [
  {
    category: "Xerox Paper",
    description: "Premium quality copier paper from leading brands",
    categoryImage: xeroxImage,
    products: [
      {
        name: "B2B A4 Paper",
        image: b2bPaper,
        size: "210 x 297 mm",
        gsm: "70/75/80 GSM",
        features: ["High brightness", "Smooth finish", "Jam-free printing"],
      },
      {
        name: "Reflection A4 Paper",
        image: reflectionPaper,
        size: "210 x 297 mm",
        gsm: "70/75/80 GSM",
        features: ["Premium quality", "Enhanced whiteness", "Consistent quality"],
      },
      {
        name: "A3 Paper",
        image: xeroxImage,
        size: "297 x 420 mm",
        gsm: "70/75/80 GSM",
        features: ["Large format", "Multiple brands", "High opacity"],
      },
      {
        name: "Colored Paper",
        image: coloredPaper,
        size: "A4 Size",
        gsm: "80 GSM",
        features: ["Vibrant colors", "Fade resistant", "Multiple color options"],
      },
    ],
  },
  {
    category: "Barcode Labels",
    description: "High-quality adhesive labels in various sizes",
    categoryImage: barcodeImage,
    products: [
      {
        name: "Barcode Labels 50 x 25 mm",
        image: barcode50x25,
        size: "50 x 25 mm",
        type: "Direct Thermal/Thermal Transfer",
        features: ["Strong adhesive", "No residue", "High print quality"],
      },
      {
        name: "Barcode Labels 100 x 50 mm",
        image: barcode100x50,
        size: "100 x 50 mm",
        type: "Direct Thermal/Thermal Transfer",
        features: ["Durable", "Smudge-proof", "Long-lasting adhesion"],
      },
      {
        name: "Barcode Labels 100 x 100 mm",
        image: barcodeImage,
        size: "100 x 100 mm",
        type: "Thermal Transfer",
        features: ["Large format", "Custom printing", "Weather resistant"],
      },
      {
        name: "Custom Size Labels",
        image: barcodeImage,
        size: "As per requirement",
        type: "All types available",
        features: ["Customizable", "Any size", "Bulk orders"],
      },
    ],
  },
  {
    category: "Thermal Paper Rolls",
    description: "Dust-free imported thermal paper in various sizes",
    categoryImage: thermalImage,
    products: [
      {
        name: "Thermal Roll 79 x 50 mm",
        image: thermal79x50,
        size: "79 x 50 mm",
        coreDiameter: "12 mm",
        features: ["Dust-free", "Long lasting", "Clear printing"],
      },
      {
        name: "Thermal Roll 80 x 80 mm",
        image: thermal80x80,
        size: "80 x 80 mm",
        coreDiameter: "12 mm",
        features: ["Premium quality", "High sensitivity", "Fade resistant"],
      },
      {
        name: "POS Thermal Rolls",
        image: thermalImage,
        size: "Various sizes",
        coreDiameter: "12/18 mm",
        features: ["Universal compatibility", "Imported paper", "Bulk available"],
      },
      {
        name: "ATM Thermal Rolls",
        image: thermalImage,
        size: "80 x 150 mm",
        coreDiameter: "18 mm",
        features: ["Bank grade", "Long shelf life", "Superior quality"],
      },
    ],
  },
  {
    category: "Other Products",
    description: "Additional packaging and printing solutions",
    categoryImage: null,
    products: [
      {
        name: "BOPP Tape",
        image: boppTape,
        size: "2 inch / 3 inch width",
        length: "40/65 meters",
        features: ["Strong adhesion", "Transparent/Brown", "Durable"],
      },
      {
        name: "Bond Paper",
        image: xeroxImage,
        size: "A4 / A3",
        gsm: "80-100 GSM",
        features: ["High quality", "Smooth texture", "Ideal for printing"],
      },
    ],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive range of paper products and printing solutions for all your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="text-4xl font-bold mb-3">{category.category}</h2>
                  <p className="text-lg text-muted-foreground">{category.description}</p>
                </div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.map((product, productIndex) => (
                    <Card
                      key={productIndex}
                      className="overflow-hidden shadow-medium hover:shadow-large transition-all hover:-translate-y-2 group"
                    >
                      {/* Product Image */}
                      <div className="h-48 overflow-hidden bg-muted">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Info */}
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        {/* Specifications */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Size:</span>
                            <span className="font-medium">{product.size}</span>
                          </div>
                          {product.gsm && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">GSM:</span>
                              <span className="font-medium">{product.gsm}</span>
                            </div>
                          )}
                          {product.type && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Type:</span>
                              <span className="font-medium">{product.type}</span>
                            </div>
                          )}
                          {product.coreDiameter && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Core:</span>
                              <span className="font-medium">{product.coreDiameter}</span>
                            </div>
                          )}
                          {product.length && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Length:</span>
                              <span className="font-medium">{product.length}</span>
                            </div>
                          )}
                        </div>

                        {/* Features */}
                        <div className="pt-3 border-t border-border">
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Size or Specification?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              We offer customized solutions for all your paper and printing needs. Contact us for bulk orders and special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-primary text-white font-medium hover:shadow-medium transition-shadow"
              >
                Call Us Now
              </a>
              <a
                href="mailto:info@vardhamanpaper.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
