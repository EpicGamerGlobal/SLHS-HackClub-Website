import React from 'react';
import { Box } from '@mantine/core';
import type { CardProps } from '../../types';
import './GlassCard.css';

const GlassCard: React.FC<CardProps> = ({ children, style = {} }) => {
  return (
    <Box
      className="glass3d"
      style={{
        borderRadius: '16px',
        padding: '2rem',
        color: 'white',
        overflow: 'hidden',
        ...style,
      }}
    >
      <i />
      {children}
    </Box>
  );
};

export default GlassCard;

