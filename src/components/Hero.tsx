import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Home } from "lucide-react";
import ceoImage from "@/assets/ceo-headshot.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Trusted 
                <span className="text-primary block">Real Estate Partner</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With over 15 years of experience in luxury real estate, I help families 
                find their dream homes and investors build their portfolios.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Properties Sold</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">$50M+</div>
                  <div className="text-sm text-muted-foreground">In Sales Volume</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary shadow-elegant hover:shadow-glow">
                <a href="#properties">View Properties</a>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#contact">Schedule Meeting</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={ceoImage} 
                alt="Sarah Johnson - CEO & Principal Broker"
                className="rounded-2xl shadow-card w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-4 shadow-elegant">
                <div className="text-sm text-muted-foreground">Principal Broker</div>
                <div className="font-semibold text-foreground">Annika Meyer</div>
                <div className="text-sm text-muted-foreground">15+ Years Experience</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;