import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  {
    year: "2004",
    title: "Company Founded",
    description: "Started operations in Aurangabad, Maharashtra",
  },
  {
    year: "2008",
    title: "Xerox Paper Trading",
    description: "Expanded into premium A4, A3, A5 paper distribution",
  },
  {
    year: "2012",
    title: "Barcode Labels Manufacturing",
    description: "Began manufacturing high-quality barcode labels",
  },
  {
    year: "2016",
    title: "Thermal Paper Rolls",
    description: "Started manufacturing thermal paper rolls with imported dust-free paper",
  },
  {
    year: "2019",
    title: "Pan-India Presence",
    description: "Established distribution network across India",
  },
  {
    year: "2024",
    title: "20 Years Excellence",
    description: "Celebrating two decades of quality and trust",
  },
];

const values = [
  "Premium quality products",
  "Customer satisfaction",
  "Timely delivery",
  "Competitive pricing",
  "Innovation and technology",
  "Sustainable practices",
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Two decades of excellence in paper products and manufacturing
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">About Vardhaman Paper Products</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in Aurangabad, Maharashtra, Vardhaman Paper Products has been a trusted name 
                  in the paper industry for over 20 years. What started as a small trading business has 
                  grown into a comprehensive paper products manufacturer and distributor serving clients 
                  across Maharashtra and India.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We pride ourselves on delivering premium quality products, from xerox paper to specialized 
                  barcode labels and thermal paper rolls. Our commitment to excellence and customer satisfaction 
                  has helped us build strong relationships with clients across various industries.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we continue to innovate and expand our product range while maintaining the quality 
                  and service standards that have been our foundation for two decades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 animate-fade-in ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"} hidden md:block`}>
                      {index % 2 === 0 && (
                        <Card className="shadow-medium hover:shadow-large transition-shadow">
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                    
                    <div className="relative z-10 hidden md:block">
                      <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                    </div>
                    
                    <div className={`flex-1 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                      <Card className="shadow-medium hover:shadow-large transition-shadow md:hidden block mb-4">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                      {index % 2 !== 0 && (
                        <Card className="shadow-medium hover:shadow-large transition-shadow hidden md:block">
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="shadow-medium hover:shadow-large transition-all hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium">{value}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
