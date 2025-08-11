import React from 'react';
import { Box } from '@mantine/core';
import type { CardProps } from '../../types';
import './GlassCard.css';

const GlassCard: React.FC<CardProps> = ({ children, style = {} }) => {
    return (
        <Box
            className="glass3d"
            style={{
                width: '100%',
                maxWidth: 'min(1000px, 92vw)',
                margin: '0 auto',
                ...style,
            }}
        >
            {children}
        </Box>
    );
};

export default GlassCard;
