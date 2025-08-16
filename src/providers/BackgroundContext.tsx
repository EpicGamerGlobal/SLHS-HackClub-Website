import React, { createContext, useState, useContext, ReactNode } from 'react';
import FluidBackground from '../components/ui/FluidBackground';
import BalatroBackground from '../components/ui/BalatroBackground';

interface BackgroundContextType {
  cycleBackground: () => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [backgroundType, setBackgroundType] = useState<'fluid' | 'balatro'>('fluid');
  
  const cycleBackground = () => {
    setBackgroundType(prev => {
      const next = prev === 'fluid' ? 'balatro' : 'fluid';
      return next;
    });
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        {backgroundType === 'fluid' && <FluidBackground />}
        {backgroundType === 'balatro' && <BalatroBackground />}
      </div>
      <BackgroundContext.Provider value={{ cycleBackground }}>
        {children}
      </BackgroundContext.Provider>
    </>
  );
};

export const useBackground = () => {
  const ctx = useContext(BackgroundContext);
  if (!ctx) throw new Error('useBackground must be used inside BackgroundProvider');
  return ctx;
};
