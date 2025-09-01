import React from 'react';
import { Box } from '@mantine/core';
import GlassCard from '../ui/GlassCard';

const InfoSection: React.FC = () => {
  return (
    <Box 
      className="section"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '3rem 2rem',
        overflow: 'visible',
      }}
    >
      <GlassCard style={{textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem', 
          background: 'linear-gradient(45deg, #ff8c37, #ec3750)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
        }}>
          Welcome to SLHS HackClub
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          A global community of high school students who love coding and building projects. Learn new skills, work on fun tech, and meet students who share your passions.
          <br/><br/>
          Beginner friendly • Welcomes experienced coders
        </p>
      </GlassCard>
    </Box>
  );
};

export default InfoSection;

