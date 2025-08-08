import React from 'react';
import { Box } from '@mantine/core';
import { CardProps } from '../../types';

const GlassCard: React.FC<CardProps> = ({ children, style = {} }) => {
  return (
    <Box
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '2rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
    </Box>
  );
};

export default GlassCard;

