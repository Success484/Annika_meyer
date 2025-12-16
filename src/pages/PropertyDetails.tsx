import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Bed, Bath, Square, Heart, Calendar, Car } from "lucide-react";
import Navigation from "@/components/Navigation";
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
    featured: true,
    description: "Stunning modern estate featuring clean lines, floor-to-ceiling windows, and premium finishes throughout. This architectural masterpiece offers panoramic city views and seamless indoor-outdoor living.",
    yearBuilt: 2020,
    lotSize: "0.8 acres",
    garage: 3,
    features: ["Swimming Pool", "Home Theater", "Wine Cellar", "Smart Home System", "Chef's Kitchen", "Master Suite with Balcony"]
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
    featured: false,
    description: "Luxurious penthouse in the heart of Manhattan with breathtaking skyline views. Features premium amenities and prime location steps from Central Park.",
    yearBuilt: 2018,
    lotSize: "N/A",
    garage: 2,
    features: ["City Views", "Concierge Service", "Rooftop Terrace", "Fitness Center", "24/7 Security", "Private Elevator"]
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
    featured: false,
    description: "Classic colonial home in prestigious Greenwich neighborhood. Perfect for families with spacious rooms, beautiful gardens, and top-rated school district.",
    yearBuilt: 1995,
    lotSize: "1.2 acres",
    garage: 2,
    features: ["Large Garden", "Fireplace", "Hardwood Floors", "Updated Kitchen", "Master Suite", "Quiet Neighborhood"]
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
    featured: true,
    description: "Spectacular oceanfront villa with direct beach access and unobstructed ocean views. This luxury retreat features high-end finishes and entertainment spaces.",
    yearBuilt: 2019,
    lotSize: "1.5 acres",
    garage: 4,
    features: ["Private Beach", "Infinity Pool", "Guest House", "Ocean Views", "Outdoor Kitchen", "Private Dock"]
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
    featured: false,
    description: "Modern industrial loft in trendy Brooklyn neighborhood. Open floor plan with exposed brick, high ceilings, and contemporary fixtures.",
    yearBuilt: 2017,
    lotSize: "N/A",
    garage: 1,
    features: ["Exposed Brick", "High Ceilings", "Modern Kitchen", "Rooftop Access", "Industrial Design", "Walk to Subway"]
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
    featured: false,
    description: "Charming mountain retreat with stunning alpine views. Perfect for year-round recreation with ski-in/ski-out access and rustic luxury finishes.",
    yearBuilt: 2016,
    lotSize: "2.1 acres",
    garage: 2,
    features: ["Mountain Views", "Ski Access", "Fireplace", "Hot Tub", "Rustic Design", "Hiking Trails"]
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
    featured: true,
    description: "Meticulously restored historic brownstone in prestigious Back Bay. Combines original architectural details with modern luxury amenities.",
    yearBuilt: 1890,
    lotSize: "0.2 acres",
    garage: 1,
    features: ["Historic Details", "Restored Features", "Garden", "Original Hardwood", "Modern Updates", "Prime Location"]
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
    featured: false,
    description: "Sleek contemporary condo with floor-to-ceiling windows and stunning city views. Features modern amenities and walkable urban location.",
    yearBuilt: 2021,
    lotSize: "N/A",
    garage: 1,
    features: ["City Views", "Modern Design", "Gym Access", "Walkable Location", "Floor-to-Ceiling Windows", "Balcony"]
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
    featured: false,
    description: "Cozy lakefront cabin with private dock and panoramic lake views. Perfect weekend getaway with rustic charm and modern conveniences.",
    yearBuilt: 2015,
    lotSize: "0.5 acres",
    garage: 1,
    features: ["Lake Views", "Private Dock", "Fireplace", "Deck", "Mountain Access", "Peaceful Setting"]
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
    featured: true,
    description: "Magnificent Mediterranean estate with resort-style amenities. Features grand architecture, lush landscaping, and luxury finishes throughout.",
    yearBuilt: 2022,
    lotSize: "2.8 acres",
    garage: 5,
    features: ["Resort Amenities", "Guest Wing", "Wine Cellar", "Tennis Court", "Pool & Spa", "Gated Community"]
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
    featured: false,
    description: "Beautiful prairie style home designed by renowned architect. Features horizontal lines, natural materials, and integration with surrounding landscape.",
    yearBuilt: 1908,
    lotSize: "0.7 acres",
    garage: 2,
    features: ["Architectural Design", "Natural Materials", "Large Windows", "Historic Value", "Mature Trees", "Quiet Street"]
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
    featured: false,
    description: "Stunning desert contemporary home with mountain views and resort-style backyard. Features sustainable design and luxury desert living.",
    yearBuilt: 2020,
    lotSize: "1.1 acres",
    garage: 3,
    features: ["Mountain Views", "Desert Landscaping", "Resort Backyard", "Solar Panels", "Outdoor Kitchen", "Spa"]
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
    featured: false,
    description: "Charming coastal cottage with classic New England architecture. Walking distance to beaches with nautical charm and modern updates.",
    yearBuilt: 2014,
    lotSize: "0.4 acres",
    garage: 2,
    features: ["Beach Access", "Nautical Design", "Widow's Walk", "Garden", "Classic Architecture", "Island Living"]
  }
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const property = properties.find(p => p.id === parseInt(id || ""));
  
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Property Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-gradient-primary shadow-elegant">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="mb-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-card/90 rounded-full flex items-center justify-center hover:bg-card transition-colors">
                  <Heart size={20} className="text-muted-foreground hover:text-primary" />
                </button>
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin size={20} className="mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>
                <div className="text-4xl font-bold text-primary mb-6">
                  {property.price}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Bed size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-semibold text-foreground">{property.beds}</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-semibold text-foreground">{property.baths}</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-semibold text-foreground">{property.sqft}</div>
                  <div className="text-sm text-muted-foreground">Sq Ft</div>
                </div>
                <div className="text-center">
                  <Car size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-semibold text-foreground">{property.garage}</div>
                  <div className="text-sm text-muted-foreground">Garage</div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Property Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-primary" />
                      <span className="text-muted-foreground">Year Built:</span>
                      <span className="ml-2 text-foreground font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={16} className="mr-2 text-primary" />
                      <span className="text-muted-foreground">Lot Size:</span>
                      <span className="ml-2 text-foreground font-medium">{property.lotSize}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button size="lg" className="bg-gradient-primary shadow-elegant flex-1">
                  Contact Agent
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Schedule Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetails;