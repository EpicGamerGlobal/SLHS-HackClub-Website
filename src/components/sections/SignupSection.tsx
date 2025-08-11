import React, { useState } from 'react';
import { Box } from '@mantine/core';
import GlassCard from '../ui/GlassCard';

const SignupSection: React.FC = () => {
    const [hover, setHover] = useState(false);

    const handleSignup = (): void => {
        alert('heh');
    };

    return (
        <Box
            className="section"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100svh',
                padding: 'clamp(1rem, 4vw, 2rem)',
            }}
        >
            <GlassCard style={{ maxWidth: 'min(700px, 92vw)' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
                    Join SLHS HackClub!
                </h2>

                <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.1rem)', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                    What to expect:
                </p>
                <ul
                    style={{
                        fontSize: 'clamp(1rem, 2.8vw, 1.1rem)',
                        marginBottom: '2rem',
                        color: 'rgba(255, 255, 255, 0.85)',
                        paddingLeft: 0,
                        listStyle: 'none',
                        textAlign: 'left',
                        maxWidth: '48ch',
                        marginInline: 'auto',
                    }}
                >
                    <li>Weekly coding sessions and workshops</li>
                    <li>Fun projects to build your skills</li>
                    <li>Friendly support from fellow club members</li>
                    <li>Opportunities to attend hackathons and events</li>
                </ul>

                <Box
                    component="button"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        background: 'linear-gradient(45deg, #ff8c37, #ec3750)',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '1rem 3rem',
                        fontSize: 'clamp(1rem, 2.8vw, 1.1rem)',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        transform: hover ? 'translateY(-2px)' : 'none',
                        boxShadow: hover ? '0 10px 20px rgba(236, 55, 80, 0.35)' : 'none',
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
