import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Star, Heart } from "lucide-react";

export const CrackerBurst = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleCrackerClick = () => {
    setIsExploding(true);
    
    // Show celebration message after animation
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    // Reset after celebration
    setTimeout(() => {
      setIsExploding(false);
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className="relative">
      {/* Cracker button */}
      <Button
        onClick={handleCrackerClick}
        disabled={isExploding}
        className="bg-gradient-magical hover:scale-110 transition-all duration-300 px-8 py-4 text-lg font-mystical shadow-magical"
      >
        <Gift className="w-6 h-6 mr-2" />
        {isExploding ? "🎉 Bursting with Joy! 🎉" : "Click for Surprise"}
      </Button>

      {/* Fireworks explosion overlay */}
      {isExploding && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Fireworks effects */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute cracker-burst"
              style={{
                left: `${20 + (i * 7)}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {i % 4 === 0 && <Star className="w-8 h-8 text-accent" />}
              {i % 4 === 1 && <Sparkles className="w-8 h-8 text-yellow-300" />}
              {i % 4 === 2 && <Heart className="w-8 h-8 text-pink-400" />}
              {i % 4 === 3 && <Star className="w-8 h-8 text-purple-400" />}
            </div>
          ))}

          {/* Additional burst effects */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`burst-${i}`}
              className="absolute w-4 h-4 rounded-full cracker-burst"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${40 + (i % 2) * 30}%`,
                animationDelay: `${i * 0.15}s`,
                backgroundColor: ['#FFD700', '#FF69B4', '#9370DB', '#00CED1'][i % 4],
              }}
            />
          ))}
        </div>
      )}

      {/* Celebration message */}
      {showMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center animate-scale-in">
            <h1 className="text-6xl font-magical text-accent mb-4 golden-glow">
              🎉 HAPPY BIRTHDAY! 🎉
            </h1>
            <p className="text-3xl font-mystical text-foreground">
              May all your wishes come true, magical sister!
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <Heart className="w-12 h-12 text-red-400 animate-bounce" />
              <Star className="w-12 h-12 text-accent animate-spin" />
              <Heart className="w-12 h-12 text-pink-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};