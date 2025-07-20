import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Star } from "lucide-react";

export const PhotoTimeline = () => {
  // Timeline data with user's photos and titles
  const timelineItems = [
    {
      year: "Childhood",
      title: "Birth of Nakti",
      description: "When magic first sparkled in your eyes",
      photo: "https://images.unsplash.com/photo-502"
    },
    {
      year: "Growing Up",
      title: "The Don Enters",
      description: "Your wishes started shaping our world", 
      photo: "https://images.unsplash.com/photo-503"
    },
    {
      year: "Rising",
      title: "The Rise from Nakti to Matki",
      description: "The genie who grants wishes with love",
      photo: "https://images.unsplash.com/photo-504"
    },
    {
      year: "Present Day",
      title: "Together from Here to Infinity",
      description: "Making every moment magical together",
      photo: "https://images.unsplash.com/photo-505"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-magical text-accent mb-4 golden-glow">
          From Nakti to Matki to and to the HR Managing Peoples
        </h2>
        <p className="text-xl font-mystical text-muted-foreground">
          My Genie's Journey
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-purple-600 rounded-full opacity-30"></div>

        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } gap-8`}
            >
              {/* Photo placeholder */}
              <div className="flex-1">
                <Card className="bg-card border-border shadow-magical hover:shadow-purple-glow transition-all duration-magical">
                  <CardContent className="p-6">
                    <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={item.photo} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-magical text-accent mb-2">{item.year}</h3>
                      <h4 className="text-lg font-mystical text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline marker */}
              <div className="relative">
                <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-golden-glow"></div>
                <div className="absolute -top-2 -left-2 w-10 h-10 bg-accent/20 rounded-full animate-ping"></div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Add photos note */}
      <div className="text-center mt-12 p-6 bg-card/50 rounded-lg border border-border">
        <Star className="w-8 h-8 text-accent mx-auto mb-3" />
        <p className="text-mystical text-muted-foreground">
          ✨ Replace placeholder images with your sister's beautiful journey photos ✨
        </p>
      </div>
    </div>
  );
};