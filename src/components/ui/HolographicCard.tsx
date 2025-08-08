import React, { useState, useRef } from 'react';
import { Box } from '@mantine/core';
import type { CardProps, Position } from '../../types';

const HolographicCard: React.FC<CardProps> = ({ children, style = {} }) => {
  const [pos, setPos] = useState<Position>({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const handleLeave = () => {
    setPos({ x: 50, y: 50 });
  };

  return (
    <Box
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '2rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        },
        ...style,
      }}
    >
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(116, 192, 252, 0.3) 0%, transparent 70%)`,
          opacity: 0.8,
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
        }}
      />
      <Box style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default HolographicCard;

