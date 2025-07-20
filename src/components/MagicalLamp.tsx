import { useState } from "react";
import { Sparkles } from "lucide-react";

interface MagicalLampProps {
  onLampClick: () => void;
  isRevealing: boolean;
}

export const MagicalLamp = ({ onLampClick, isRevealing }: MagicalLampProps) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    if (isSpinning || isRevealing) return;
    
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      onLampClick();
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        {/* Magical glow effect */}
        <div className="absolute inset-0 bg-gradient-genie rounded-full blur-2xl opacity-30 animate-pulse"></div>
        
        {/* Lamp container */}
        <div 
          className={`
            relative cursor-pointer transition-all duration-500 hover:scale-110
            ${isSpinning ? 'lamp-spin' : ''}
            ${isRevealing ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
          `}
          onClick={handleClick}
        >
          {/* Lamp body - using CSS to create lamp shape */}
          <div className="w-32 h-40 relative magical-float">
            {/* Lamp base */}
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-accent to-yellow-600 rounded-lg shadow-golden-glow"></div>
            
            {/* Lamp middle */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-accent to-yellow-700 rounded-full shadow-magical border-4 border-yellow-300"></div>
            
            {/* Lamp spout */}
            <div className="absolute top-4 right-2 w-12 h-8 bg-gradient-to-r from-accent to-yellow-600 rounded-full transform rotate-12 shadow-lg"></div>
            
            {/* Lamp handle */}
            <div className="absolute top-8 left-2 w-6 h-12 border-4 border-accent rounded-full border-r-transparent"></div>
            
            {/* Magical sparkles */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <div className="absolute top-2 -right-2">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute bottom-4 -left-2">
              <Sparkles className="w-3 h-3 text-purple-300 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center">
        <p className="text-accent font-mystical text-xl mb-2">
          {isSpinning ? "✨ The magic is awakening... ✨" : "Rub the lamp to meet your genie!"}
        </p>
        {!isSpinning && !isRevealing && (
          <p className="text-muted-foreground text-sm">
            Click the lamp to discover the magic within
          </p>
        )}
      </div>
    </div>
  );
};