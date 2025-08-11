import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import GlassCard from '../ui/GlassCard';
import { getAllEvents } from '../../utils/events';
import type { Event } from '../../types';

const EventsSection: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        getAllEvents().then(rawEvents => {
            const typedEvents: Event[] = rawEvents.map(event => ({
                title: event.title ?? 'Untitled Event',
                date: event.date ?? 'Date TBD',
                description: event.description ?? '',
            }));
            setEvents(typedEvents);
        });
    }, []);

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
                    Upcoming Events
                </h2>
                <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.85)' }}>
                    Don&apos;t miss out on our exciting upcoming events!
                </p>
            </Box>

            <Box
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 'clamp(1rem, 3vw, 2rem)',
                    width: '100%',
                    maxWidth: 'min(1000px, 92vw)',
                    margin: '0 auto',
                }}
            >
                {events.map((event, i) => (
                    <GlassCard key={i}>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{event.title}</h3>
                        <p
                            style={{
                                marginBottom: '0.75rem',
                                fontWeight: 600,
                                background: 'linear-gradient(45deg, #ff8c37, #ec3750)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {event.date}
                        </p>
                        {event.description && (
                            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{event.description}</p>
                        )}
                    </GlassCard>
                ))}
            </Box>
        </Box>
    );
};

export default EventsSection;
