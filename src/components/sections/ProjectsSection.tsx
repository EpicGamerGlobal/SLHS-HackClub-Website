import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import GlassCard from '../ui/GlassCard';
import type { Project } from '../../types';
import { getAllProjects } from '../../utils/projects';

const ProjectsSection: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getAllProjects().then((projects) => {
            const typedProjects: Project[] = projects.map(p => ({
                title: p.title ?? 'Untitled Project',
                tech: p.tech ?? '',
                description: p.description ?? '',
            }));
            setProjects(typedProjects);
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
                    Our Projects
                </h2>
                <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.1rem)', color: 'rgba(255, 255, 255, 0.85)' }}>
                    Explore the innovative projects we&apos;ve been working on
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
                {projects.map((project, i) => (
                    <GlassCard key={i}>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{project.title}</h3>
                        {project.tech && (
                            <p
                                style={{
                                    marginBottom: '0.75rem',
                                    fontSize: '0.95rem',
                                    background: 'linear-gradient(45deg, #ff8c37, #ec3750)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {project.tech}
                            </p>
                        )}
                        {project.description && (
                            <p style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{project.description}</p>
                        )}
                    </GlassCard>
                ))}
            </Box>
        </Box>
    );
};

export default ProjectsSection;
