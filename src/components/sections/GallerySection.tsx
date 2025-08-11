import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import GlassCard from '../ui/GlassCard';
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
                minHeight: '100svh',
                padding: 'clamp(1rem, 4vw, 2rem)',
            }}
        >
            <Box style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
                    Gallery
                </h2>
                <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.85)' }}>
                    Memories from past events
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
                {items.map((item, i) => (
                    <GlassCard key={i}>
                        <Box>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        maxHeight: '220px',
                                        objectFit: 'cover',
                                        marginBottom: '1rem',
                                        borderRadius: '8px',
                                    }}
                                />
                            )}
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                            {item.description && (
                                <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{item.description}</p>
                            )}
                        </Box>
                    </GlassCard>
                ))}
            </Box>
        </Box>
    );
};

export default GallerySection;
