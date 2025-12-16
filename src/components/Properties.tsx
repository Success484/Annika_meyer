import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpeg";
import property5 from "@/assets/property-5.jpeg";
import property6 from "@/assets/property-6.jpeg";
import property7 from "@/assets/property-7.jpeg";
import property8 from "@/assets/property-8.jpeg";
import property9 from "@/assets/property-9.jpeg";
import property10 from "@/assets/property-10.jpeg";
import property11 from "@/assets/property-11.jpeg";
import property12 from "@/assets/property-12.jpeg";
import property13 from "@/assets/property-13.jpeg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Modern Luxury Estate",
    price: "$2,850,000",
    location: "Orchard Road, Singapore",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    featured: true
  },
  {
    id: 2,
    image: property2,
    title: "Downtown Penthouse",
    price: "$1,650,000",
    location: "Marina Bay Sands, Singapore",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    featured: false
  },
  {
    id: 3,
    image: property3,
    title: "Colonial Family Home",
    price: "$875,000",
    location: "Sentosa Island, Singapore",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    featured: false
  },
  {
    id: 4,
    image: property4,
    title: "Oceanfront Villa",
    price: "$4,200,000",
    location: "Jurong East, Singapore",
    beds: 6,
    baths: 5,
    sqft: "5,800",
    featured: true
  },
  {
    id: 5,
    image: property5,
    title: "Urban Loft",
    price: "$950,000",
    location: "Tampines, Singapore",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    featured: false
  },
  {
    id: 6,
    image: property6,
    title: "Mountain Retreat",
    price: "$1,200,000",
    location: "Bedok, Singapore",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    featured: false
  },
  {
    id: 7,
    image: property7,
    title: "Historic Brownstone",
    price: "$3,100,000",
    location: "Changi Business Park, Singapore",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    featured: true
  },
  {
    id: 8,
    image: property8,
    title: "Contemporary Condo",
    price: "$720,000",
    location: "Bukit Timah, Singapore",
    beds: 2,
    baths: 2,
    sqft: "1,600",
    featured: false
  },
  {
    id: 9,
    image: property9,
    title: "Lakefront Cabin",
    price: "$680,000",
    location: "Woodlands, Singapore",
    beds: 3,
    baths: 2,
    sqft: "2,400",
    featured: false
  },
  {
    id: 10,
    image: property10,
    title: "Mediterranean Estate",
    price: "$5,500,000",
    location: "Ang Mo Kio, Singapore",
    beds: 7,
    baths: 6,
    sqft: "7,200",
    featured: true
  },
  {
    id: 11,
    image: property11,
    title: "Prairie Style Home",
    price: "$890,000",
    location: "Hougang, Singapore",
    beds: 4,
    baths: 3,
    sqft: "3,000",
    featured: false
  },
  {
    id: 12,
    image: property12,
    title: "Desert Oasis",
    price: "$1,450,000",
    location: "Punggol, Singapore",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    featured: false
  },
  {
    id: 13,
    image: property13,
    title: "Coastal Cottage",
    price: "$2,200,000",
    location: "Clementi, Singapore",
    beds: 4,
    baths: 3,
    sqft: "2,900",
    featured: false
  }
];

const Properties = () => {
  const navigate = useNavigate();

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium properties, 
            each offering exceptional value and unmatched quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <Card key={property.id} className="group hover:shadow-card transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 bg-card/90 rounded-full flex items-center justify-center hover:bg-card transition-colors">
                  <Heart size={16} className="text-muted-foreground hover:text-primary" />
                </button>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Bed size={16} className="mr-1" />
                        <span>{property.beds}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath size={16} className="mr-1" />
                        <span>{property.baths}</span>
                      </div>
                      <div className="flex items-center">
                        <Square size={16} className="mr-1" />
                        <span>{property.sqft} sqft</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-primary">
                      {property.price}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => navigate(`/property/${property.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;