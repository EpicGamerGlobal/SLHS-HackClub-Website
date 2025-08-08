import React from 'react';
import { Box } from '@mantine/core';
import GlassCard from '../ui/GlassCard';

const SignupSection: React.FC = () => {
  const handleSignup = (): void => {
    alert('arya likes 6 year old boys');
  };

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
      <GlassCard style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Join SLHS HackClub!</h2>
        
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
          What to expect:
        </p>
        <ul style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '1.2rem', listStyleType: 'none'  }}>
          <li>Weekly coding sessions and workshops</li>
          <li>Fun projects to build your skills</li>
          <li>Friendly support from fellow club members</li>
          <li>Opportunities to attend hackathons and events</li>
        </ul>

        <Box
          component="button"
          style={{
            background: 'linear-gradient(45deg, #ff8c37, #ec3750)',
            border: 'none',
            borderRadius: '50px',
            padding: '1rem 3rem',
            fontSize: '1.1rem',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 20px rgba(116, 192, 252, 0.3)',
            },
          }}
          onClick={handleSignup}
        >
          Sign Up
        </Box>
      </GlassCard>
    </Box>
  );
};

export default SignupSection;

