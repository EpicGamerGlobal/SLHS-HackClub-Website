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
        padding: '2rem',
      }}
    >
      <GlassCard style={{textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem', 
          background: 'linear-gradient(45deg, #ff8c37, #ec3750)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          '@media (max-width: 768px)': {
            fontSize: '2rem',
          },
        }}>
          Welcome to SLHS HackClub
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Hack Club is a global community of high school students who love coding and building projects. It’s a place where you can learn new skills, work on fun tech projects, and meet other students who share your passions. Whether you are just starting out or already know how to code, Hack Club supports you with workshops, events, and a supportive network to help you grow as a coder and maker.
        </p>
      </GlassCard>
    </Box>
  );
};

export default InfoSection;

