import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import HolographicCard from '../ui/HolographicCard';
import type { Project } from '../../types';
import { getAllProjects } from '../../utils/projects'; 

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
  getAllProjects().then((projects) => {
    const typedProjects: Project[] = projects.map(p => ({
      title: p.title ?? ' ',
      tech: p.tech ?? ' ',
      description: p.description ?? ' ',
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
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <Box style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Our Projects</h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
          Explore the innovative projects we've been working on
        </p>
      </Box>
      
      <Box style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {projects.map((project, i) => (
          <HolographicCard key={i}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            {project.tech && (
              <p style={{ color: 'radial-gradient(at 0% 0%, rgb(255, 140, 55), rgb(236, 55, 80))', marginBottom: '1rem', fontSize: '0.9rem' }}>
                {project.tech}
              </p>
            )}
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{project.description}</p>
          </HolographicCard>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsSection;

