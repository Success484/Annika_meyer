import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">Bluebirds Home</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#properties" className="text-foreground hover:text-primary transition-colors">Properties</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="default" size="sm" className="bg-gradient-primary shadow-elegant">
            
            <a href="#contact">Schedule Consultation</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;