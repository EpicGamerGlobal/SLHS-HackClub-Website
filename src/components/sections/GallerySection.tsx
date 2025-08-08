
import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import HolographicCard from '../ui/HolographicCard';
import type { GalleryItem } from '../../types';
import { getAllGalleryItems } from '../../utils/gallery';

const GallerySection: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);

  
  useEffect(() => {
    getAllGalleryItems().then(rawItems => {
      const typedItems: GalleryItem[] = rawItems.map(item => ({
        title: item.title ?? 'Untitled',
        image: item.image ?? '',
        description: item.description ?? '',
      }));

      setItems(typedItems);
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
        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Gallery</h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
          Memories from past events 
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
        {items.map((item, i) => (
          <HolographicCard key={i}>
            <Box style={{ textAlign: 'center' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', marginBottom: '1rem', borderRadius: '8px' }}
              />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
            </Box>
          </HolographicCard>
        ))}
      </Box>
    </Box>
  );
};

export default GallerySection;

