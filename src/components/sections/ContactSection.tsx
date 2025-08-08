
import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import GlassCard from '../ui/GlassCard';
import { Officer } from '../../types';
import { getAllOfficers } from '../../utils/officers';

const ContactSection: React.FC = () => {
  const [officers, setOfficers] = useState<Officer[]>([]);

  useEffect(() => {
    getAllOfficers().then(setOfficers);
  }, []);

  return (
    <Box
      className="section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Box style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Contact Us</h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
          Get in touch with our officers
        </p>
      </Box>

      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1100px',
          marginBottom: '3rem',
        }}
      >
        {officers.map((officer, i) => (
          <GlassCard key={i}>
            <Box style={{ textAlign: 'center' }}>
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
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{officer.name}</h3>
              <p style={{ color: '#ec3750', marginBottom: '1rem', fontSize: '1rem' }}>{officer.role}</p>
              <Box
                component="a"
                href={`mailto:${officer.email}`}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
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

      <GlassCard
        style={{
          padding: '1.5rem 3rem',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>General Inquiries</p>
        <Box
          component="a"
          href="mailto:info@club.com"
          style={{
            color: '#ec3750',
            textDecoration: 'none',
            fontSize: '1.2rem',
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

