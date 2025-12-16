import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, TrendingUp, Shield, Users, Calculator } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Property Search",
    description: "Expert assistance in finding your perfect home with personalized search criteria and market insights."
  },
  {
    icon: Home,
    title: "Property Selling",
    description: "Strategic marketing and pricing to ensure maximum value and quick sale of your property."
  },
  {
    icon: TrendingUp,
    title: "Investment Analysis",
    description: "Comprehensive market analysis and investment guidance for building your real estate portfolio."
  },
  {
    icon: Calculator,
    title: "Property Valuation",
    description: "Accurate property valuations using advanced market data and comparative analysis."
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    description: "Complete legal support throughout the transaction process with trusted legal partners."
  },
  {
    icon: Users,
    title: "Consultation Services",
    description: "Expert consultation on market trends, investment opportunities, and property development."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive real estate services designed to meet all your property needs 
            with professional expertise and personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;