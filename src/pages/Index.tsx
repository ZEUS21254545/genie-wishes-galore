import { useState } from "react";
import { MagicalLamp } from "@/components/MagicalLamp";
import { GenieReveal } from "@/components/GenieReveal";
import { CrackerBurst } from "@/components/CrackerBurst";
import { PhotoTimeline } from "@/components/PhotoTimeline";
import { Sparkles, Heart } from "lucide-react";

const Index = () => {
  const [showGenie, setShowGenie] = useState(false);

  const handleLampClick = () => {
    setShowGenie(true);
  };

  return (
    <div className="min-h-screen starry-bg">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-magical text-accent golden-glow leading-tight">
              To the Genie
            </h1>
            <h2 className="text-4xl md:text-6xl font-mystical text-foreground">
              of My Life...
            </h2>
            <div className="flex justify-center space-x-4 mt-6">
              <Heart className="w-8 h-8 text-red-400 animate-pulse" />
              <Sparkles className="w-8 h-8 text-accent magical-float" />
              <Heart className="w-8 h-8 text-pink-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Interactive Lamp or Genie Reveal */}
          <div className="py-12">
            {!showGenie ? (
              <MagicalLamp onLampClick={handleLampClick} isRevealing={false} />
            ) : (
              <GenieReveal isVisible={showGenie} />
            )}
          </div>

          {/* Birthday Cracker */}
          <div className="pt-8">
            <CrackerBurst />
          </div>
        </div>
      </section>

      {/* Photo Timeline Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <PhotoTimeline />
      </section>

      {/* Footer with magical touch */}
      <footer className="py-12 text-center">
        <div className="space-y-4">
          <p className="text-2xl font-mystical text-accent">
            ✨ Made with endless love and a touch of magic ✨
          </p>
          <div className="flex justify-center space-x-3">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
