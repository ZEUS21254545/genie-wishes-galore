import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Star } from "lucide-react";

export const PhotoTimeline = () => {
  // Placeholder timeline data - user can customize
  const timelineItems = [
    {
      year: "Early Years",
      title: "Our First Adventure",
      description: "When magic first sparkled in your eyes",
      photo: "placeholder-childhood.jpg"
    },
    {
      year: "Growing Up",
      title: "The Day Dreams Took Flight",
      description: "Your wishes started shaping our world",
      photo: "placeholder-teen.jpg"
    },
    {
      year: "Present Day",
      title: "Making Every Moment Magical",
      description: "The genie who grants wishes with love",
      photo: "placeholder-now.jpg"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-magical text-accent mb-4 golden-glow">
          My Genie's Journey of Wishes
        </h2>
        <p className="text-xl font-mystical text-muted-foreground">
          A lifetime of magic, one wish at a time
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
                    <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Camera className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm">{item.title}</p>
                      </div>
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