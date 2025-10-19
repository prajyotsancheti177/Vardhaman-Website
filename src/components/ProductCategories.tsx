import { Card, CardContent } from "@/components/ui/card";
import { FileText, Tag, Printer, Package } from "lucide-react";
import xeroxImage from "@/assets/xerox-paper.jpg";
import barcodeImage from "@/assets/barcode-labels.jpg";
import thermalImage from "@/assets/thermal-rolls.jpg";

const categories = [
  {
    icon: FileText,
    title: "Xerox Paper",
    description: "Premium quality A4, A3, A5 paper from leading brands like B2B, Reflection. Also colored and bond paper.",
    image: xeroxImage,
  },
  {
    icon: Tag,
    title: "Barcode Labels",
    description: "High-quality barcode labels in various sizes with excellent sticking capability and leaves no mark.",
    image: barcodeImage,
  },
  {
    icon: Printer,
    title: "Thermal Paper Rolls",
    description: "Imported highest quality dust-free thermal paper in various sizes and configurations.",
    image: thermalImage,
  },
  {
    icon: Package,
    title: "BOPP Tape & More",
    description: "Quality BOPP tape trading and barcode paper printing services for all your packaging needs.",
    image: null,
  },
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Product Range</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your paper and printing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className={category.image ? "pt-6" : "py-8"}>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-gradient-primary transition-all">
                    <category.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
