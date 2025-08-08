
import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import HolographicCard from '../ui/HolographicCard';
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
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Box style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Upcoming Events</h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
          Don't miss out on our exciting upcoming events!
        </p>
      </Box>

      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {events.map((event, i) => (
          <HolographicCard key={i}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{event.title}</h3>
            <p
              style={{
                color:
                  'radial-gradient(at 0% 0%, rgb(255, 140, 55), rgb(236, 55, 80))',
                marginBottom: '1rem',
              }}
            >
              {event.date}
            </p>
          </HolographicCard>
        ))}
      </Box>
    </Box>
  );
};

export default EventsSection;

