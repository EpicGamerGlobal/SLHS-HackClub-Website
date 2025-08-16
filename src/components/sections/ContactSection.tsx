import React, { useEffect, useState, startTransition } from 'react';
import { Box } from '@mantine/core';
import GlassCard from '../ui/GlassCard';
import type { Officer } from '../../types';
import { getAllOfficers } from '../../utils/officers';
import { useBackground } from '../../providers/BackgroundContext';

const ContactSection: React.FC = () => {
  const [officers, setOfficers] = useState<Officer[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [count, setCount] = useState(0);
  const { cycleBackground } = useBackground();

  useEffect(() => {
    getAllOfficers().then(rawOfficers => {
      const typedOfficers: Officer[] = rawOfficers.map(o => ({
        name: o.name ?? 'Unnamed Officer',
        role: o.role ?? 'Officer',
        email: o.email ?? 'No email',
        avatar: o.avatar ?? '',
      }));
      setOfficers(typedOfficers);
    });
  }, []);

  useEffect(() => {
    console.log("running");
    if (count === 5) {
      console.log("triggered");
      cycleBackground();
      setCount(0);
    }
  }, [count, cycleBackground]);

  const handleClick = (name: string) => {
    if (name == "Jackson MacGregor") {
      setCount(prev => prev + 1);
    }
  };

  return (
    <Box
      className="section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100svh',
        padding: 'clamp(1rem, 4vw, 2rem)',
      }}
    >
      <Box style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
          Contact Us
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.8)' }}>
          Get in touch with our officers
        </p>
      </Box>

      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)',
          width: '100%',
          maxWidth: 'min(1100px, 92vw)',
          margin: '0 auto 3rem',
        }}
      >
        
{officers.map((officer, i) => (
  <GlassCard key={i}>
    <Box
      onClick={() => handleClick(officer.name)}
      style={{ cursor: 'pointer', textAlign: 'center' }}
    >
      {officer.avatar ? (
        <img
          src={officer.avatar}
          alt={officer.name}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />
      ) : (
        <Box style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</Box>
      )}
      <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.3rem)', marginBottom: '0.5rem' }}>
        {officer.name}
      </h3>
      <p style={{ color: '#ec3750', marginBottom: '1rem', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>
        {officer.role}
      </p>
      <Box
        component="a"
        href={`mailto:${officer.email}`}
        style={{
          color: 'rgba(255, 255, 255, 0.8)',
          textDecoration: 'none',
          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          cursor: 'pointer',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#ff8c37')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
      >
        {officer.email}
      </Box>
    </Box>
  </GlassCard>
))}

      </Box>

      <GlassCard style={{ padding: '1.5rem 3rem', maxWidth: 400 }}>
        <p style={{ fontSize: 'clamp(1rem, 3.5vw, 1.1rem)', marginBottom: '1rem' }}>General Inquiries</p>
        <Box
          component="a"
          href="mailto:info@club.com"
          style={{
            color: '#ec3750',
            textDecoration: 'none',
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#ff8c37')}
          onMouseLeave={e => (e.currentTarget.style.color = '#ec3750')}
        >
          info@club.com
        </Box>
      </GlassCard>
    </Box>
  );
};

export default ContactSection;

