import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

interface GenieRevealProps {
  isVisible: boolean;
}

export const GenieReveal = ({ isVisible }: GenieRevealProps) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowMessage(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center space-y-8 animate-fade-in">
      {/* Magical entrance effect */}
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-genie rounded-full blur-3xl opacity-40 animate-pulse"></div>
        
        {/* Sister's photo placeholder - user can replace */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent shadow-magical magical-float">
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <div className="text-center text-white">
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-mystical">Your Sister's Photo</p>
              <p className="text-sm opacity-80">Upload her image here</p>
            </div>
          </div>
          
          {/* Magical sparkles around the photo */}
          <div className="absolute -top-4 -left-4">
            <Star className="w-8 h-8 text-accent animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <div className="absolute -top-2 -right-6">
            <Sparkles className="w-6 h-6 text-yellow-300 animate-bounce" />
          </div>
          <div className="absolute -bottom-4 -right-4">
            <Star className="w-8 h-8 text-purple-300 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
          </div>
          <div className="absolute -bottom-2 -left-6">
            <Sparkles className="w-5 h-5 text-pink-300 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Magical message */}
      {showMessage && (
        <div className="text-center space-y-4 animate-scale-in">
          <h2 className="text-4xl font-magical text-accent golden-glow">
            ✨ Your Genie Has Appeared! ✨
          </h2>
          <p className="text-2xl font-mystical text-foreground max-w-2xl mx-auto leading-relaxed">
            "My wish-granter, my magic-maker, my greatest wish come true!"
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
            <Sparkles className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-6 h-6 text-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      )}
    </div>
  );
};