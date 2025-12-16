// Professional Real Estate Website

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Properties />
      <Services />
      <Contact />
      
      <footer className="bg-foreground text-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">Bluebirds Home</div>
              <p className="text-muted text-sm leading-relaxed">
                Your trusted partner in real estate since 2008. 
                Providing exceptional service and expert guidance for all your property needs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-card">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#home" className="block text-muted hover:text-primary transition-colors">Home</a>
                <a href="#properties" className="block text-muted hover:text-primary transition-colors">Properties</a>
                <a href="#services" className="block text-muted hover:text-primary transition-colors">Services</a>
                <a href="#contact" className="block text-muted hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-card">Contact</h4>
              <div className="space-y-2 text-sm text-muted">
                <div>+65 9124 4577</div>
                <div>bluebird@homes.com</div>
                <div>1557 Bedok Rd, #01-01A, <br/>Singapore 089066</div>
              </div>
            </div>
          </div>
          <div className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 Bluebirds Home. All rights reserved. | Licensed Real Estate Broker</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
